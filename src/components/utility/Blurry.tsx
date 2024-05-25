import {CSSProperties} from "react";

// noinspection JSSuspiciousNameCombination
export const blurry = (top: number, right = top, bottom = top, left = right): CSSProperties => {
    const mask = [
        `linear-gradient(to right, black calc(100% - ${right}px), transparent)`,
        `linear-gradient(to left, black calc(100% - ${left}px), transparent)`,
        `linear-gradient(to top, black calc(100% - ${top}px), transparent)`,
        `linear-gradient(to bottom, black calc(100% - ${bottom}px), transparent)`,
    ].join(', ');
    return ({
        padding: `${top}px ${right}px ${bottom}px ${left}px`,
        mask,
        WebkitMask: mask,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'destination-in',
    });
}
