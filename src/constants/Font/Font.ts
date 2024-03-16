export const TEXT_STYLE_NAME = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  P1: 'P1',
  P2: 'P2',
  P3: 'P3',
  P4: 'P4',
  P5: 'P5',
  P6: 'P6',
  P7: 'P7',
  B1: 'B1',
  B2: 'B2',
  B3: 'B3',
  B4: 'B4',
} as const;

export type TextStyleName = (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

interface TextStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  letterSpacing?: string;
}

export const TEXT_STYLES: Record<TextStyleName, TextStyle> = {
  [TEXT_STYLE_NAME.H1]: {
    fontSize: 56,
    fontWeight: 600,
    lineHeight: '56px',
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.H2]: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: '52px',
    letterSpacing: '-0.2px',
  },

  [TEXT_STYLE_NAME.H3]: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: `44px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.H4]: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: `40px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.H5]: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: `36px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P1]: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: `36px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P2]: {
    fontSize: 15,
    fontWeight: 600,
    lineHeight: `22px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P3]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: `20px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P4]: {
    fontSize: 13,
    fontWeight: 500,
    lineHeight: `18px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P5]: {
    fontSize: 10,
    fontWeight: 600,
    lineHeight: `16px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P6]: {
    fontSize: 8,
    fontWeight: 500,
    lineHeight: `18px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.P7]: {
    fontSize: 6,
    fontWeight: 500,
    lineHeight: `18px`,
    letterSpacing: '-0.2px',
  },
  [TEXT_STYLE_NAME.B1]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: `24px`,
    letterSpacing: '-0.1px',
  },
  [TEXT_STYLE_NAME.B2]: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: `18px`,
    letterSpacing: '-0.1px',
  },
  [TEXT_STYLE_NAME.B3]: {
    fontSize: 13,
    fontWeight: 600,
    lineHeight: `18px`,
    letterSpacing: '-0.1px',
  },
  [TEXT_STYLE_NAME.B4]: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: `36px`,
    letterSpacing: '-0.2px',
  },
};
