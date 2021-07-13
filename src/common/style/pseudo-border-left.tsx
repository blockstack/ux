import { ColorsStringLiteral, color } from '@stacks/ui';

// Copied from stacks-wallet
export function pseudoBorderLeft(themeColor: ColorsStringLiteral, borderWidth = '4px') {
  return {
    content: '""',
    top: 0,
    left: 0,
    borderRadius: '8px',
    width: borderWidth,
    height: '100%',
    position: 'absolute',
    background: color(themeColor),
  } as const;
}
