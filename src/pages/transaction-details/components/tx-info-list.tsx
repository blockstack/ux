import React, { cloneElement, isValidElement } from 'react';
import { Box, BoxProps, color, Flex, FlexProps, Stack, StackProps, Text } from '@stacks/ui';

export function TxInfoList(props: FlexProps) {
  return <Flex flexDirection="column" {...props} />;
}

export function TxInfoListGroup({ children, ...props }: BoxProps) {
  const parsedChildren = Array.isArray(children) ? children : [children];
  const infoGroup = parsedChildren.flatMap((child, index) => {
    if (!isValidElement(child)) return null;
    return [
      cloneElement(child, {
        key: index,
        mb: index === parsedChildren.length ? '280px' : null,
      }),
      index !== parsedChildren.length - 1 && <Box my="loose" key={index.toString() + '-hr'} />,
    ];
  });
  return <Box {...props}>{infoGroup}</Box>;
}

export function TxInfoListSection({ children, ...props }: StackProps) {
  return (
    <Stack {...props} spacing="base-tight">
      {children}
    </Stack>
  );
}

export function TxInfoListRow(props: FlexProps) {
  return <Flex justifyContent="space-between" {...props} />;
}

export function TxInfoListLabel({ children, ...props }: FlexProps) {
  return (
    <Flex color={color('text-caption')} alignItems="center" {...props}>
      <Box>{children}</Box>
    </Flex>
  );
}

export function TxInfoListValue(props: FlexProps) {
  return <Text textStyle="body.large.medium" textAlign="right" {...props} />;
}
