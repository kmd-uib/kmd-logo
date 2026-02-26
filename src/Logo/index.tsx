import { useState, useEffect, useRef, useCallback, type CSSProperties, type ComponentType, type SVGProps } from 'react';
import stepper, { type StepperParams } from './stepper';
import { D, E, G, I, K, M, N, S, T, U, X, Block } from './svgs';

export const LOGO_DIRECTION = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
} as const);

export const KMD_LOGO_MODE = Object.freeze({
    KUNST: 'KUNST',
    MUSIKK: 'MUSIKK',
    DESIGN: 'DESIGN',
    DEFAULT: 'DEFAULT',
} as const);

export const KMD_EXIT_LOGO_MODE = Object.freeze({
    K: 'K',
    M: 'M',
    D: 'D',
    EXIT: 'EXIT',
    DEFAULT: 'DEFAULT',
} as const);

export const LOGO_COLOR = Object.freeze({
    BLACK: 'black',
    WHITE: 'white',
} as const);

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
    mode?: KMDLogoMode;
    direction?: LogoDirection;
    color?: LogoColor;
    constants?: SpringConstants;
    style?: CSSProperties;
    mainPage?: string;
}

export interface KMDExitLogoProps {
    width?: number;
    mode?: KMDExitLogoMode;
    direction?: LogoDirection;
    color?: LogoColor;
    constants?: SpringConstants;
    style?: CSSProperties;
    mainPage?: string;
}

type LetterComponent = ComponentType<SVGProps<SVGSVGElement>>;

const defaultConstants: Required<SpringConstants> = {
    k: 234,
    b: 18,
    ki: 389,
    krandom: 1992700730,
    fcap: 15036,
};

const lastLetterWidth = 57;
const containerHeight = 81;

interface BaseLogoProps {
    letters: LetterComponent[];
    targetAnchors: number[];
    width: number;
    direction: LogoDirection;
    color: LogoColor;
    constants?: SpringConstants;
    style?: CSSProperties;
    mainPage?: string;
}

const BaseLogo = ({ letters, targetAnchors, width, direction, color, constants, style, mainPage }: BaseLogoProps) => {
    const isVertical = direction === LOGO_DIRECTION.VERTICAL;

    const [positions, setPositions] = useState<number[]>(() =>
        targetAnchors.map(pos => pos * (width - lastLetterWidth))
    );
    const [velocities, setVelocities] = useState<number[]>(() =>
        letters.map(() => 0)
    );
    const animationRef = useRef<number | null>(null);
    const loopRef = useRef<(() => void) | null>(null);

    const updatePositions = useCallback(() => {
        animationRef.current = requestAnimationFrame(() => {
            const newValues = letters.map((_, index) => {
                const params: StepperParams = {
                    ...defaultConstants,
                    ...constants,
                    others: positions.filter((_, i) => i !== index),
                    width: width - lastLetterWidth,
                };
                return stepper(
                    positions[index],
                    velocities[index],
                    targetAnchors[index] * (width - lastLetterWidth),
                    params
                );
            });

            setPositions(newValues.map(val => val.newX));
            setVelocities(newValues.map(val => val.newV));

            if (!newValues.every(result => result.done)) {
                loopRef.current?.();
            }
        });
    }, [positions, velocities, width, constants, targetAnchors, letters]);

    useEffect(() => {
        loopRef.current = updatePositions;
    }, [updatePositions]);

    useEffect(() => {
        if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
        }
        updatePositions();

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [width, direction, constants, updatePositions]);

    // In vertical mode the outer <a> has the correct visual dimensions so that
    // parents (borders, flex containers, etc.) size themselves correctly.
    // An inner div is rotated 90° clockwise with translateX(containerHeight)
    // so its visual top-left corner stays anchored at (0, 0) of the outer element.
    if (isVertical) {
        return (
            <a
                style={{ position: 'relative', display: 'block', width: containerHeight, height: width, ...style }}
                href={mainPage}
                title="Til forsiden"
            >
                <div style={{
                    position: 'absolute',
                    width,
                    height: containerHeight,
                    transform: `translateX(${containerHeight}px) rotate(90deg)`,
                    transformOrigin: '0 0',
                }}>
                    {letters.map((Letter, index) => (
                        <Letter
                            key={index}
                            fill={color}
                            style={{ position: 'absolute', left: positions[index] }}
                        />
                    ))}
                </div>
            </a>
        );
    }

    return (
        <a
            style={{ position: 'relative', display: 'block', height: containerHeight, width, ...style }}
            href={mainPage}
            title="Til forsiden"
        >
            {letters.map((Letter, index) => (
                <Letter
                    key={index}
                    fill={color}
                    style={{ position: 'absolute', left: positions[index] }}
                />
            ))}
        </a>
    );
};

const KMDLogo = ({
    width = 420,
    mode = KMD_LOGO_MODE.DEFAULT,
    direction = LOGO_DIRECTION.HORIZONTAL,
    color = LOGO_COLOR.BLACK,
    constants,
    style,
    mainPage,
}: KMDLogoProps) => {
    const letters: LetterComponent[] = [K, U, N, S, T, M, U, S, I, K, K, D, E, S, I, G, N];

    const anchors: Record<KMDLogoMode, number[]> = {
        KUNST:   [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
        MUSIKK:  [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
        DESIGN:  [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
        DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1],
    };

    return (
        <BaseLogo
            letters={letters}
            targetAnchors={anchors[mode] ?? anchors.DEFAULT}
            width={width}
            direction={direction}
            color={color}
            constants={constants}
            style={style}
            mainPage={mainPage}
        />
    );
};

const KMDExitLogo = ({
    width = 420,
    mode = KMD_EXIT_LOGO_MODE.DEFAULT,
    direction = LOGO_DIRECTION.HORIZONTAL,
    color = LOGO_COLOR.BLACK,
    constants,
    style,
    mainPage,
}: KMDExitLogoProps) => {
    const letters: LetterComponent[] = [K, M, D, E, X, I, T, Block];

    const anchors: Record<KMDExitLogoMode, number[]> = {
        K:       [0, 0.1836, 0.3427, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        M:       [0, 0.1636, 0.3827, 0.4983, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        D:       [0, 0.1236, 0.3427, 0.5183, 0.6460, 0.7219, 0.7721, 0.9176, 1.0000],
        EXIT:    [0, 0.1436, 0.3227, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
    };

    return (
        <BaseLogo
            letters={letters}
            targetAnchors={anchors[mode] ?? anchors.DEFAULT}
            width={width}
            direction={direction}
            color={color}
            constants={constants}
            style={style}
            mainPage={mainPage}
        />
    );
};

export { KMDLogo, KMDExitLogo };
export default KMDLogo;
