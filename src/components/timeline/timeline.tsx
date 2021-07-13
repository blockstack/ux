import React, { cloneElement, FC, isValidElement } from 'react';
import { Box, BoxProps, color, Flex, SlideFade, Spacing, Text } from '@stacks/ui';
import { pseudoBorderLeft } from '@common/style/pseudo-border-left';

function isLastElement(array: any[], index: number) {
  return index === array.length - 1;
}

interface TimelineProps extends BoxProps {
  spacing?: Spacing;
}
export const Timeline: FC<TimelineProps> = props => {
  const { children, spacing, ...rest } = props;
  const parsedChildren = Array.isArray(children) ? children : [children];
  const txEvents = parsedChildren.flatMap((child, index) => {
    if (!isValidElement(child)) return null;
    return [
      cloneElement(child, {
        key: index,
        mb: !isLastElement(parsedChildren, index) ? spacing ?? 'loose' : null,
      }),
    ];
  });
  return (
    <Box
      position="relative"
      _before={{ ...pseudoBorderLeft('border', '2px'), left: '5px' }}
      {...rest}
    >
      {txEvents}
    </Box>
  );
};

const NON_USER_INITIATED_DURATION = 380;

interface TimelineEventProps extends BoxProps {
  time: string;
  icon: JSX.Element;
}
export const TimelineEvent: FC<TimelineEventProps> = props => {
  const { time, children, icon, ...rest } = props;
  const iconWithDefaultProps = cloneElement(icon, { size: '12px' });
  return (
    <SlideFade initialOffset="-20px" timeout={NON_USER_INITIATED_DURATION} in={true}>
      {styles => (
        <Box zIndex="1" position="relative" {...(styles as any)} {...rest}>
          <Box
            position="absolute"
            display="inline-block"
            top="2px"
            _before={{
              position: 'absolute',
              content: '""',
              background: color('bg'),
              borderRadius: '50%',
              transform: 'scale(1.4)',
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          >
            {iconWithDefaultProps}
          </Box>
          <Flex ml="base-loose" flexDirection="column">
            <Text textStyle="caption" color={color('text-caption')}>
              {time}
            </Text>
            <Text textStyle="body.small" mt="extra-tight" ml="1px">
              {children}
            </Text>
          </Flex>
        </Box>
      )}
    </SlideFade>
  );
};
