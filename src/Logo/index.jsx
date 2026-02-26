import { useState, useEffect, useRef, useCallback } from 'react';
import stepper from './stepper';
import { D, E, G, I, K, M, N, S, T, U, X, Block } from './svgs.jsx';

export const LOGO_DIRECTION = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

export const KMD_LOGO_MODE = Object.freeze({
    KUNST: 'KUNST',
    MUSIKK: 'MUSIKK',
    DESIGN: 'DESIGN',
    DEFAULT: 'DEFAULT',
});

export const KMD_EXIT_LOGO_MODE = Object.freeze({
    K: 'K',
    M: 'M',
    D: 'D',
    EXIT: 'EXIT',
    DEFAULT: 'DEFAULT',
});

const lastLetterWidth = 57;
const containerHeight = 81;

const defaultConstants = {
    k: 234,
    b: 18,
    ki: 389,
    krandom: 1992700730,
    fcap: 15036
};

// Base logo component
const BaseLogo = ({ letters, targetAnchors, width = 400, direction = LOGO_DIRECTION.HORIZONTAL, constants, style, mainPage }) => {
    const isVertical = direction === LOGO_DIRECTION.VERTICAL;

    const [positions, setPositions] = useState(() =>
        targetAnchors.map(pos => pos * (width - lastLetterWidth))
    );
    const [velocities, setVelocities] = useState(() =>
        letters.map(() => 0)
    );
    const animationRef = useRef(null);

    const updatePositions = useCallback(() => {
        animationRef.current = requestAnimationFrame(() => {
            const newValues = letters.map((_, index) => {
                const params = {
                    ...defaultConstants,
                    ...constants,
                    others: positions.filter((_, i) => i !== index),
                    width: (width - lastLetterWidth),
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
                updatePositions();
            }
        });
    }, [positions, velocities, width, constants, targetAnchors, letters]);

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
                    style={{ position: 'absolute', left: positions[index] }}
                />
            ))}
        </a>
    );
};

// KMD Logo (KUNSTMUSIKKDESIGN)
const KMDLogo = ({ width = 420, mode = KMD_LOGO_MODE.DEFAULT, direction = LOGO_DIRECTION.HORIZONTAL, constants, style, mainPage }) => {
    const letters = [K, U, N, S, T, M, U, S, I, K, K, D, E, S, I, G, N];

    const anchors = {
        KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
        MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
        DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
        DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
    };

    const targetAnchors = anchors[mode] || anchors.DEFAULT;

    return (
        <BaseLogo
            letters={letters}
            targetAnchors={targetAnchors}
            width={width}
            direction={direction}
            constants={constants}
            style={style}
            mainPage={mainPage}
        />
    );
};

// KMD Exit Logo (KMDEXIT▝)
const KMDExitLogo = ({ width = 420, mode = KMD_EXIT_LOGO_MODE.DEFAULT, direction = LOGO_DIRECTION.HORIZONTAL, constants, style, mainPage }) => {
    const letters = [K, M, D, E, X, I, T, Block];

    const anchors = {
        K: [0, 0.1836, 0.3427, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        M: [0, 0.1636, 0.3827, 0.4983, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        D: [0, 0.1236, 0.3427, 0.5183, 0.6460, 0.7219, 0.7721, 0.9176, 1.0000],
        EXIT: [0, 0.1436, 0.3227, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000],
        DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.6160, 0.7619, 0.7721, 0.9176, 1.0000]
    };

    const targetAnchors = anchors[mode] || anchors.DEFAULT;

    return (
        <BaseLogo
            letters={letters}
            targetAnchors={targetAnchors}
            width={width}
            direction={direction}
            constants={constants}
            style={style}
            mainPage={mainPage}
        />
    );
};

// Export both components
export { KMDLogo, KMDExitLogo, };
export default KMDLogo;
