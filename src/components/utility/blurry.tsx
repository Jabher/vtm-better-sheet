// noinspection JSSuspiciousNameCombination
export const blurry = (top: number, right = top, bottom = top, left = right): string =>
        [
            `linear-gradient(to bottom, black, white ${top}px, white calc(100% - ${bottom}px), black) luminance`,
            `linear-gradient(to right, white, black ${left}px, black calc(100% - ${right}px), white) luminance`,
        ].join(", ")
