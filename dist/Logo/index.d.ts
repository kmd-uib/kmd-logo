import { type CSSProperties } from 'react';
export declare const LOGO_DIRECTION: Readonly<{
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
}>;
export declare const KMD_LOGO_MODE: Readonly<{
    readonly KUNST: "KUNST";
    readonly MUSIKK: "MUSIKK";
    readonly DESIGN: "DESIGN";
    readonly DEFAULT: "DEFAULT";
}>;
export declare const KMD_EXIT_LOGO_MODE: Readonly<{
    readonly K: "K";
    readonly M: "M";
    readonly D: "D";
    readonly EXIT: "EXIT";
    readonly DEFAULT: "DEFAULT";
}>;
export declare const LOGO_COLOR: Readonly<{
    readonly BLACK: "black";
    readonly WHITE: "white";
}>;
/** Alias for {@link LOGO_DIRECTION} */
export declare const KMDLogoDirection: Readonly<{
    readonly HORIZONTAL: "horizontal";
    readonly VERTICAL: "vertical";
}>;
export type LogoDirection = typeof LOGO_DIRECTION[keyof typeof LOGO_DIRECTION];
export type KMDLogoMode = typeof KMD_LOGO_MODE[keyof typeof KMD_LOGO_MODE];
export type KMDExitLogoMode = typeof KMD_EXIT_LOGO_MODE[keyof typeof KMD_EXIT_LOGO_MODE];
export type LogoColor = typeof LOGO_COLOR[keyof typeof LOGO_COLOR];
export interface SpringConstants {
    k?: number;
    b?: number;
    ki?: number;
    krandom?: number;
    fcap?: number;
}
export interface KMDLogoProps {
    width?: number;
    /** @default 'DEFAULT' */
    mode?: 'KUNST' | 'MUSIKK' | 'DESIGN' | 'DEFAULT';
    /** @default 'horizontal' */
    direction?: 'horizontal' | 'vertical';
    /** @default 'white' */
    color?: 'black' | 'white';
    constants?: SpringConstants;
    style?: CSSProperties;
    href?: string;
}
export interface KMDExitLogoProps {
    width?: number;
    /** @default 'DEFAULT' */
    mode?: 'K' | 'M' | 'D' | 'EXIT' | 'DEFAULT';
    /** @default 'horizontal' */
    direction?: 'horizontal' | 'vertical';
    /** @default 'white' */
    color?: 'black' | 'white';
    constants?: SpringConstants;
    style?: CSSProperties;
    href?: string;
}
declare const KMDLogo: ({ width, mode, direction, color, constants, style, href, }: KMDLogoProps) => import("react/jsx-runtime").JSX.Element;
declare const KMDExitLogo: ({ width, mode, direction, color, constants, style, href, }: KMDExitLogoProps) => import("react/jsx-runtime").JSX.Element;
export { KMDLogo, KMDExitLogo };
export default KMDLogo;
