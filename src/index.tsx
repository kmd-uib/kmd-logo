import { useState, useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { createRoot } from 'react-dom/client';
import { KMDLogo, KMDExitLogo, LOGO_DIRECTION, KMD_LOGO_MODE, KMD_EXIT_LOGO_MODE } from './Logo';
import type { SpringConstants, LogoDirection, KMDLogoMode, KMDExitLogoMode, LogoLink } from './Logo';

const initialConstants: SpringConstants = {
    k: 234,
    b: 18,
    ki: 389,
    krandom: 1992700730,
    fcap: 15036,
};

const MENU_SHRINK_PX = 100;   // how many px the logo width shrinks when menu opens
const MENU_ANIM_MS  = 100;    // animation duration in ms

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const headerStyle: CSSProperties = {
    fontSize: 20,
    margin: '30px 0 10px',
};

type LogoType = 'KMD' | 'EXIT';

interface RangeInputProps {
    id: keyof SpringConstants;
    name: string;
    min: number;
    max: number;
    value: number;
    onChange: (id: keyof SpringConstants, value: string) => void;
}

const RangeInput = ({ id, name, min, max, value, onChange }: RangeInputProps) => (
    <div>
        <input
            id={id}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={event => onChange(id, event.target.value)}
        />
        <label style={{ marginLeft: 10 }} htmlFor={id}>
            {`${name}: ${(100 * (value / (max - min))).toFixed(2)}%`}
        </label>
    </div>
);

const App = () => {
    const [width, setWidth] = useState(348); // matches real app logoWidth when menu closed
    const [logoType, setLogoType] = useState<LogoType>('KMD');
    const [mode, setMode] = useState<KMDLogoMode | KMDExitLogoMode>(KMD_LOGO_MODE.KUNST);
    const [direction, setDirection] = useState<LogoDirection>(LOGO_DIRECTION.HORIZONTAL);
    const [color, setColor] = useState<'black' | 'white'>('white');
    const [block, setBlock] = useState(true);
    const [link, setLink] = useState<LogoLink | undefined>(undefined);
    const [linkName, setLinkName] = useState('kmd.uib.no');
    const [linkUrl, setLinkUrl] = useState('https://kmd.uib.no');
    const [constants, setConstants] = useState<SpringConstants>(initialConstants);
    const [antimagnet, setAntimagnet] = useState(false);

    // ── Menu shrink simulation ──────────────────────────────────────────────
    const [menuOpen, setMenuOpen]         = useState(false);
    const [menuProgress, setMenuProgress] = useState(0);
    const menuProgressRef = useRef(0);
    const menuRafRef      = useRef<number | null>(null);

    useEffect(() => {
        const target     = menuOpen ? 1 : 0;
        const startTime  = performance.now();
        const startProg  = menuProgressRef.current;

        const tick = (now: number) => {
            const t = Math.min((now - startTime) / MENU_ANIM_MS, 1);
            const p = t >= 1 ? target : startProg + (target - startProg) * easeInOut(t);
            menuProgressRef.current = p;
            setMenuProgress(p);
            if (t < 1) menuRafRef.current = requestAnimationFrame(tick);
            else menuRafRef.current = null;
        };

        if (menuRafRef.current !== null) cancelAnimationFrame(menuRafRef.current);
        menuRafRef.current = requestAnimationFrame(tick);

        return () => { if (menuRafRef.current !== null) cancelAnimationFrame(menuRafRef.current); };
    }, [menuOpen]);

    const isMenuActive = menuOpen || menuProgress > 0;
    const activeWidth  = isMenuActive ? Math.max(1, Math.round(width - MENU_SHRINK_PX * menuProgress)) : width;
    // ───────────────────────────────────────────────────────────────────────

    const updateConstant = useCallback((id: keyof SpringConstants, value: string) => {
        setConstants(prev => ({ ...prev, [id]: parseInt(value) }));
    }, []);

    return (
        <div style={{ padding: '0 25px' }}>
            <h1 style={headerStyle}>Physical constants</h1>
            <RangeInput id="k" name="Spring stiffness" min={0} max={300} value={constants.k ?? 0} onChange={updateConstant} />
            <RangeInput id="b" name="Spring damping" min={0} max={50} value={constants.b ?? 0} onChange={updateConstant} />
            <RangeInput id="ki" name="Interaction force constant" min={0} max={100000} value={constants.ki ?? 0} onChange={updateConstant} />
            <RangeInput id="krandom" name="Noise" min={0} max={10000000000} value={constants.krandom ?? 0} onChange={updateConstant} />
            <RangeInput id="fcap" name="Max force" min={0} max={200000} value={constants.fcap ?? 0} onChange={updateConstant} />

            <h1 style={headerStyle}>Logo Components</h1>
            <div style={{ marginBottom: '20px' }}>
                <h3>KMD Logo (KUNSTMUSIKKDESIGN)</h3>
                <div style={{ marginBottom: '10px' }}>
                    {Object.values(KMD_LOGO_MODE).map(m => (
                        <button
                            key={m}
                            style={{
                                height: 30,
                                width: 80,
                                margin: '2px',
                                backgroundColor: logoType === 'KMD' && mode === m ? '#007acc' : '#f0f0f0',
                                color: logoType === 'KMD' && mode === m ? 'white' : 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                            onClick={() => { setLogoType('KMD'); setMode(m); }}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <h3>KMD Exit Logo (KMDEXIT▝)</h3>
                <div>
                    {Object.values(KMD_EXIT_LOGO_MODE).map(m => (
                        <button
                            key={m}
                            style={{
                                height: 30,
                                width: 80,
                                margin: '2px',
                                backgroundColor: logoType === 'EXIT' && mode === m ? '#28a745' : '#f0f0f0',
                                color: logoType === 'EXIT' && mode === m ? 'white' : 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                            onClick={() => { setLogoType('EXIT'); setMode(m); }}
                        >
                            {m}
                        </button>
                    ))}
                </div>
            </div>

            {logoType === 'EXIT' && (
                <div style={{ marginBottom: '10px' }}>
                    <label>
                        <input type="checkbox" checked={block} onChange={e => setBlock(e.target.checked)} style={{ marginRight: 6 }} />
                        Show block (▝)
                    </label>
                </div>
            )}

            <div style={{ marginBottom: '10px' }}>
                <label>
                    <input type="checkbox" checked={antimagnet} onChange={e => setAntimagnet(e.target.checked)} style={{ marginRight: 6 }} />
                    Antimagnet (repel letters from cursor)
                </label>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>
                    <input
                        type="checkbox"
                        checked={link !== undefined}
                        onChange={e => setLink(e.target.checked ? { name: linkName, url: linkUrl } : undefined)}
                        style={{ marginRight: 6 }}
                    />
                    Show link
                </label>
                {link !== undefined && (
                    <span style={{ marginLeft: 12 }}>
                        <input
                            value={linkName}
                            onChange={e => { setLinkName(e.target.value); setLink({ name: e.target.value, url: linkUrl }); }}
                            placeholder="name"
                            style={{ marginRight: 6, width: 120 }}
                        />
                        <input
                            value={linkUrl}
                            onChange={e => { setLinkUrl(e.target.value); setLink({ name: linkName, url: e.target.value }); }}
                            placeholder="url"
                            style={{ width: 200 }}
                        />
                    </span>
                )}
            </div>

            <h1 style={headerStyle}>Menu shrink simulation</h1>
            <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <button
                    onClick={() => setMenuOpen(o => !o)}
                    style={{
                        padding: '6px 18px',
                        fontSize: 14,
                        backgroundColor: menuOpen ? '#cc3300' : '#222',
                        color: 'white',
                        border: 'none',
                        borderRadius: 4,
                        cursor: 'pointer',
                    }}
                >
                    {menuOpen ? '✕ Close menu' : '☰ Open menu'}
                </button>
                <span style={{ fontSize: 12, color: '#888' }}>
                    width: {activeWidth}px &nbsp;|&nbsp; progress: {menuProgress.toFixed(2)}
                </span>
            </div>

            <h1 style={headerStyle}>Logo</h1>
            <div style={{ marginBottom: '10px' }}>
                {(['white', 'black'] as const).map(c => (
                    <button
                        key={c}
                        style={{
                            height: 30,
                            width: 80,
                            margin: '2px',
                            backgroundColor: color === c ? '#333' : '#f0f0f0',
                            color: color === c ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                        }}
                        onClick={() => setColor(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>
            <div style={{ marginBottom: '10px' }}>
                {Object.values(LOGO_DIRECTION).map(d => (
                    <button
                        key={d}
                        style={{
                            height: 30,
                            width: 100,
                            margin: '2px',
                            backgroundColor: direction === d ? '#555' : '#f0f0f0',
                            color: direction === d ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                        }}
                        onClick={() => setDirection(d)}
                    >
                        {d}
                    </button>
                ))}
            </div>
            <div>
                <input
                    id="width"
                    type="range"
                    min={100}
                    max={1500}
                    value={width}
                    onChange={(event) => setWidth(parseInt(event.target.value))}
                />
                <label style={{ marginLeft: 10 }} htmlFor="width">
                    {direction === LOGO_DIRECTION.VERTICAL ? 'Height' : 'Width'}: {width}px
                </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{ border: '1px solid red', display: 'inline-block', flexShrink: 0, backgroundColor: color === 'white' ? 'black' : 'white' }}>
                    {logoType === 'KMD' ? (
                        <KMDLogo width={activeWidth} mode={mode as KMDLogoMode} direction={direction} color={color} link={link} constants={constants} antimagnet={antimagnet} />
                    ) : (
                        <KMDExitLogo width={activeWidth} mode={mode as KMDExitLogoMode} direction={direction} color={color} block={block} link={link} constants={constants} antimagnet={antimagnet} />
                    )}
                </div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                    <p style={{ margin: '0 0 6px' }}><strong>Current component:</strong> {logoType === 'KMD' ? 'KMDLogo (KUNSTMUSIKKDESIGN)' : 'KMDExitLogo (KMDEXIT▝)'}</p>
                    <p style={{ margin: '0 0 6px' }}><strong>Mode:</strong> {mode}</p>
                    <p style={{ margin: 0 }}><strong>Available letters:</strong> K, U, N, S, T, M, I, D, E, G, X, ▝</p>
                </div>
            </div>
        </div>
    );
};

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);
