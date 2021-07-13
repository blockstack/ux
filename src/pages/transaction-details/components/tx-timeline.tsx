import React from 'react';
import { AdditionSignInCircle } from '@components/icons/addition-sign-in-circle';
import { TimelineEvent } from '@components/timeline/timeline';
import { LighteningBoltInCircle } from '@components/icons/lightening-bolt-in-circle';
import { CheckmarkInCircle } from '@components/icons/checkmark-in-circle';
import { BoxProps } from '@stacks/ui';

export { Timeline } from '@components/timeline/timeline';

export function TxCreationTimelineEvent(props: BoxProps) {
  return (
    <TimelineEvent icon={<AdditionSignInCircle />} time="12 mins ago" {...props}>
      Transaction created
    </TimelineEvent>
  );
}

export function TxInMicroblockTimelineEvent(props: BoxProps) {
  return (
    <TimelineEvent icon={<LighteningBoltInCircle />} time="11 mins ago" {...props}>
      Included in microblock
    </TimelineEvent>
  );
}

export function TxConfirmedInAnchorTimelineEvent(props: BoxProps) {
  return (
    <TimelineEvent icon={<CheckmarkInCircle />} time="3 mins ago" {...props}>
      Confirmed in anchor block
    </TimelineEvent>
  );
}
