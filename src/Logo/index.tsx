import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type CSSProperties,
  type ComponentType,
  type SVGProps,
  type MouseEvent,
} from "react";
import stepper, { type StepperParams } from "./stepper";
import { D, E, G, I, K, M, N, S, T, U, X, Block } from "./svgs";

export const LOGO_DIRECTION = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
} as const);

export const KMD_LOGO_MODE = Object.freeze({
  KUNST: "KUNST",
  MUSIKK: "MUSIKK",
  DESIGN: "DESIGN",
  DEFAULT: "DEFAULT",
} as const);

export const KMD_EXIT_LOGO_MODE = Object.freeze({
  K: "K",
  M: "M",
  D: "D",
  EXIT: "EXIT",
  DEFAULT: "DEFAULT",
} as const);

export const LOGO_COLOR = Object.freeze({
  BLACK: "black",
  WHITE: "white",
} as const);

/** Alias for {@link LOGO_DIRECTION} */
export const KMDLogoDirection = LOGO_DIRECTION;

export type LogoDirection =
  (typeof LOGO_DIRECTION)[keyof typeof LOGO_DIRECTION];
export type KMDLogoMode = (typeof KMD_LOGO_MODE)[keyof typeof KMD_LOGO_MODE];
export type KMDExitLogoMode =
  (typeof KMD_EXIT_LOGO_MODE)[keyof typeof KMD_EXIT_LOGO_MODE];
export type LogoColor = (typeof LOGO_COLOR)[keyof typeof LOGO_COLOR];

export interface SpringConstants {
  k?: number;
  b?: number;
  ki?: number;
  krandom?: number;
  fcap?: number;
}

export interface LogoLink {
  name: string;
  url: string;
  /** Font size in px. @default 10 */
  fontSize?: number;
}

export interface KMDLogoProps {
  id?: string;
  width?: number;
  /** @default 'DEFAULT' */
  mode?: "KUNST" | "MUSIKK" | "DESIGN" | "DEFAULT";
  /** @default 'horizontal' */
  direction?: "horizontal" | "vertical";
  /** @default 'white' */
  color?: "black" | "white";
  constants?: SpringConstants;
  style?: CSSProperties;
  href?: string;
  link?: LogoLink;
  /** When true, letters repel the cursor like same-pole magnets (max 10 px). */
  antimagnet?: boolean;
}

export interface KMDExitLogoProps {
  id?: string;
  width?: number;
  /** @default 'DEFAULT' */
  mode?: "K" | "M" | "D" | "EXIT" | "DEFAULT";
  /** @default 'horizontal' */
  direction?: "horizontal" | "vertical";
  /** @default 'white' */
  color?: "black" | "white";
  /** @default true */
  block?: boolean;
  constants?: SpringConstants;
  style?: CSSProperties;
  href?: string;
  link?: LogoLink;
  /** When true, letters repel the cursor like same-pole magnets (max 10 px). */
  antimagnet?: boolean;
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
  id?: string;
  letters: LetterComponent[];
  targetAnchors: number[];
  width: number;
  direction: LogoDirection;
  color: LogoColor;
  constants?: SpringConstants;
  style?: CSSProperties;
  href?: string;
  link?: LogoLink;
  antimagnet?: boolean;
}

const ANTIMAGNET_MAX_PX = 10;
const ANTIMAGNET_FALLOFF = 80;

const calcRepulsion = (
  letterLeft: number,
  cursorX: number,
  cursorY: number,
): number => {
  const letterCenterX = letterLeft + 30;
  const letterCenterY = containerHeight / 2;
  const dx = cursorX - letterCenterX;
  const dy = cursorY - letterCenterY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist === 0) return 0;
  const magnitude = ANTIMAGNET_MAX_PX * Math.exp(-dist / ANTIMAGNET_FALLOFF);
  return -(dx / dist) * magnitude;
};

const BaseLogo = ({
  id,
  letters,
  targetAnchors,
  width,
  direction,
  color,
  constants,
  style,
  href,
  link,
  antimagnet,
}: BaseLogoProps) => {
  const isVertical = direction === LOGO_DIRECTION.VERTICAL;

  // Physics state lives in refs so the animation loop never re-triggers effects.
  const posRef = useRef<number[]>(targetAnchors.map((a) => a * (width - lastLetterWidth)));
  const velRef = useRef<number[]>(letters.map(() => 0));

  // Rendered positions drive the visual output.
  const [positions, setPositions] = useState<number[]>(() =>
    targetAnchors.map((a) => a * (width - lastLetterWidth)),
  );

  const animationRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);

  // Keep mutable copies of props so the stable loop can always read the latest
  // values without needing to be recreated.
  const widthRef = useRef(width);
  const constantsRef = useRef(constants);
  const targetAnchorsRef = useRef(targetAnchors);
  const lettersLenRef = useRef(letters.length);

  // Sync prop mirrors — defined before the animation effect so React runs them
  // first, ensuring refs are fresh before startLoop() is invoked.
  useEffect(() => { widthRef.current = width; }, [width]);
  useEffect(() => { constantsRef.current = constants; }, [constants]);
  useEffect(() => { targetAnchorsRef.current = targetAnchors; }, [targetAnchors]);

  // Stable loop — created once per mount, reads all live values through refs.
  const startLoop = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    const step = () => {
      const w = widthRef.current;
      const pos = posRef.current;
      const vel = velRef.current;
      const anchors = targetAnchorsRef.current;

      const newValues = pos.map((x, index) => {
        const params: StepperParams = {
          ...defaultConstants,
          ...constantsRef.current,
          others: pos.filter((_, i) => i !== index),
          width: w - lastLetterWidth,
        };
        return stepper(x, vel[index], anchors[index] * (w - lastLetterWidth), params);
      });

      posRef.current = newValues.map((v) => v.newX);
      velRef.current = newValues.map((v) => v.newV);
      setPositions([...posRef.current]);

      if (!newValues.every((v) => v.done)) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, []); // intentionally stable — no deps, reads everything via refs

  // (Re-)start the loop only when meaningful layout or target props change.
  useEffect(() => {
    // If the letters array grew or shrank, reinitialise the physics arrays to
    // avoid index-out-of-bounds in the stepper.
    if (letters.length !== lettersLenRef.current) {
      lettersLenRef.current = letters.length;
      posRef.current = targetAnchors.map((a) => a * (width - lastLetterWidth));
      velRef.current = letters.map(() => 0);
      setPositions([...posRef.current]);
    }

    startLoop();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [width, direction, targetAnchors, letters, startLoop]);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorPos(null);
  }, []);

  const linkFontSize = link?.fontSize ?? 10;
  const linkPadding = link ? linkFontSize + 20 : 0;

  const isExternalUrl = (url: string) => /^(https?:)?\/\/|^mailto:/.test(url);

  const linkEl = link ? (
    <a
      href={link.url}
      className="kmd-logo-link"
      {...(isExternalUrl(link.url)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        color,
        fontSize: linkFontSize,
        lineHeight: 1,
        textDecoration: "none",
        whiteSpace: "nowrap",
      }}
    >
      → {link.name}
    </a>
  ) : null;

  // In vertical mode the outer div has the correct visual dimensions so that
  // parents (borders, flex containers, etc.) size themselves correctly.
  // An inner div is rotated 90° clockwise with translateX(containerHeight)
  // so its visual top-left corner stays anchored at (0, 0) of the outer element.
  if (isVertical) {
    return (
      <div
        id={id}
        ref={containerRef}
        onMouseMove={antimagnet ? handleMouseMove : undefined}
        onMouseLeave={antimagnet ? handleMouseLeave : undefined}
        style={{
          position: "relative",
          display: "block",
          width: containerHeight,
          height: width + linkPadding,
          ...style,
        }}
      >
        <a
          href={href}
          title="Til forsiden"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: containerHeight,
            height: width,
          }}
        >
          <div
            style={{
              position: "absolute",
              width,
              height: containerHeight,
              transform: `translateX(${containerHeight}px) rotate(90deg)`,
              transformOrigin: "0 0",
            }}
          >
            {letters.map((Letter, index) => {
              const repulsion =
                antimagnet && cursorPos
                  ? calcRepulsion(positions[index], cursorPos.y, cursorPos.x)
                  : 0;
              return (
                <Letter
                  key={index}
                  fill={color}
                  style={{
                    position: "absolute",
                    left: positions[index],
                    transform: repulsion !== 0 ? `translateX(${repulsion}px)` : undefined,
                  }}
                />
              );
            })}
          </div>
        </a>
        {linkEl}
      </div>
    );
  }

  return (
    <div
      id={id}
      ref={containerRef}
      onMouseMove={antimagnet ? handleMouseMove : undefined}
      onMouseLeave={antimagnet ? handleMouseLeave : undefined}
      style={{
        position: "relative",
        display: "inline-block",
        height: containerHeight + linkPadding,
        width,
        ...style,
      }}
    >
      <a
        href={href}
        title="Til forsiden"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height: containerHeight,
        }}
      >
        {letters.map((Letter, index) => {
          const repulsion =
            antimagnet && cursorPos
              ? calcRepulsion(positions[index], cursorPos.x, cursorPos.y)
              : 0;
          return (
            <Letter
              key={index}
              fill={color}
              style={{
                position: "absolute",
                left: positions[index],
                transform: repulsion !== 0 ? `translateX(${repulsion}px)` : undefined,
              }}
            />
          );
        })}
      </a>
      {linkEl}
    </div>
  );
};

const KMD_LETTERS: LetterComponent[] = [K, U, N, S, T, M, U, S, I, K, K, D, E, S, I, G, N];

const KMD_ANCHORS: Record<KMDLogoMode, number[]> = {
  KUNST: [
    0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721,
    0.48661044156241245, 0.6066875599833533, 0.6559793671420038,
    0.6990937736217631, 0.7392582023254431, 0.747728771908964,
    0.7872618713956905, 0.826794970882417, 0.8696291011627215,
    0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1,
  ],
  MUSIKK: [
    0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172,
    0.15660388188698735, 0.19524781811273922, 0.33801827509956184,
    0.46289629988000636, 0.5792299092805033, 0.6037643534425029,
    0.7182693595515138, 0.8327743656605249, 0.8741297734335922,
    0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1,
  ],
  DESIGN: [
    0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262,
    0.17219936342679554, 0.21469167676026912, 0.2670211199240199,
    0.3127924765342526, 0.35543206128895555, 0.3644246346015707,
    0.4063939841127197, 0.4483633336238687, 0.5847847583095644,
    0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1,
  ],
  DEFAULT: [
    0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094,
    0.2723629604628279, 0.3395718747474556, 0.42233990463921206,
    0.49473519079288264, 0.5621770402027011, 0.576400344173532,
    0.6427821010748294, 0.7091638579761266, 0.7810885201013505,
    0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1,
  ],
};

const KMDLogo = ({
  id,
  width = 420,
  mode = KMD_LOGO_MODE.DEFAULT,
  direction = LOGO_DIRECTION.HORIZONTAL,
  color = LOGO_COLOR.WHITE,
  constants,
  style,
  href,
  link,
  antimagnet,
}: KMDLogoProps) => {
  // Stable reference — never changes, so BaseLogo's effect never re-fires from this.
  const letters = KMD_LETTERS;

  // Only changes when mode changes.
  const targetAnchors = useMemo(
    () => KMD_ANCHORS[mode] ?? KMD_ANCHORS.DEFAULT,
    [mode],
  );

  return (
    <BaseLogo
      id={id}
      letters={letters}
      targetAnchors={targetAnchors}
      width={width}
      direction={direction}
      color={color}
      constants={constants}
      style={style}
      href={href}
      link={link}
      antimagnet={antimagnet}
    />
  );
};

const KMDExitLogo = ({
  id,
  width = 420,
  mode = KMD_EXIT_LOGO_MODE.DEFAULT,
  direction = LOGO_DIRECTION.HORIZONTAL,
  color = LOGO_COLOR.WHITE,
  block = true,
  constants,
  style,
  href,
  link,
  antimagnet,
}: KMDExitLogoProps) => {
  // Stable references — only change when `block` flips.
  const letters = useMemo<LetterComponent[]>(
    () => (block ? [K, M, D, E, X, I, T, Block] : [K, M, D, E, X, I, T]),
    [block],
  );

  const targetAnchors = useMemo(() => {
    const anchors: Record<KMDExitLogoMode, number[]> = {
      K: [0, 0.35, 0.58, 0.66, 0.74, 0.83, 0.85, 1.0],
      M: [0, 0.3, 0.65, 0.73, 0.81, 0.88, 0.9, 1.0],
      D: [0, 0.1, 0.4, 0.65, 0.7, 0.82, 0.84, 1.0],
      EXIT: [0, 0.09, 0.17, 0.4, 0.57, 0.81, 0.88, 1.0],
      DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176],
    };
    return (anchors[mode] ?? anchors.DEFAULT).slice(0, letters.length);
  }, [mode, letters.length]);

  return (
    <BaseLogo
      id={id}
      letters={letters}
      targetAnchors={targetAnchors}
      width={width}
      direction={direction}
      color={color}
      constants={constants}
      style={style}
      href={href}
      link={link}
      antimagnet={antimagnet}
    />
  );
};

export { KMDLogo, KMDExitLogo };
export default KMDLogo;
