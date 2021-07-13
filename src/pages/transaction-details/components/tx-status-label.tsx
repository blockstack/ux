import React, { memo } from 'react';
import { Flex, Text, FlexProps, FailedIcon, Box } from '@stacks/ui';
import { IconClock } from '@tabler/icons';

type TxStatus = 'failed' | 'pending' | 'confirmed';
interface TxStatusLabelProps extends FlexProps {
  status: TxStatus;
}
function _TxStatusLabel({ status, ...props }: TxStatusLabelProps) {
  return (
    <Flex
      flexDirection="row"
      display="inline-flex"
      border={`1px solid ${getStatusBorderColor(status)}`}
      color={getStatusColor(status)}
      borderRadius="24px"
      height="loose"
      justifyContent="center"
      alignItems="center"
      fontWeight="500"
      px="tight"
      {...props}
    >
      {status !== 'confirmed' && (
        <Box mr="extra-tight">
          {status === 'failed' && <FailedIcon size="13px" />}
          {status === 'pending' && <IconClock size="14px" />}
        </Box>
      )}
      <Text textStyle="caption">{getStatusText(status)}</Text>
    </Flex>
  );
}

//
// Many of the colors here aren't in the color map
function getStatusColor(status: TxStatus) {
  const colorMap = { failed: '#C83532', pending: '#74777D', confirmed: '#008051' };
  return colorMap[status];
}

function getStatusBorderColor(status: TxStatus) {
  const colorMap = { failed: '#F7CDCA', pending: '#DCDDE2', confirmed: '#D9EDD4' };
  return colorMap[status];
}

function getStatusText(status: TxStatus) {
  const colorMap = { failed: 'Failed', pending: 'Pending', confirmed: 'Confirmed' };
  return colorMap[status];
}

export const TxStatusLabel = memo(_TxStatusLabel);
