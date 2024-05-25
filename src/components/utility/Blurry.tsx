// noinspection JSSuspiciousNameCombination
export const blurry = (top: number, right = top, bottom = top, left = right): string =>
  [
    `linear-gradient(to bottom, transparent, black ${top}px, black calc(100% - ${bottom}px), transparent)`,
    `linear-gradient(to right, transparent, black ${left}px, black calc(100% - ${right}px), transparent)`,
  ].join(", ");
