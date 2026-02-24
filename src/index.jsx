import { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import { KMDLogo, KMDExitLogo } from './Logo';

const initialConstants = {
    k: 234,
    b: 18,
    ki: 389,
    krandom: 1992700730,
    fcap: 15036
};

const headerStyle = {
    fontSize: 20,
    margin: '30px 0 10px',
};

const App = () => {
    const [width, setWidth] = useState(300);
    const [logoType, setLogoType] = useState('KMD');
    const [mode, setMode] = useState('KUNST');
    const [direction, setDirection] = useState('horizontal');
    const [constants, setConstants] = useState(initialConstants);

    const updateConstant = useCallback((id, value) => {
        setConstants(prev => ({ ...prev, [id]: parseInt(value) }));
    }, []);

    const RangeInput = ({ id, name, min, max }) => {
        const value = constants[id];
        return (
            <div>
                <input 
                    id={id} 
                    type="range" 
                    min={min} 
                    max={max} 
                    value={value} 
                    onChange={event => updateConstant(id, event.target.value)} 
                />
                <label style={{ marginLeft: 10 }} htmlFor={id}>
                    {`${name}: ${(100 * (value / (max - min))).toFixed(2)}%`}
                </label>
            </div>
        );
    };

    return (
        <div style={{ padding: '0 25px' }}>
            <h1 style={headerStyle}>Physical constants</h1>
            <RangeInput id="k" name="Spring stiffness" min={0} max={300} />
            <RangeInput id="b" name="Spring damping" min={0} max={50} />
            <RangeInput id="ki" name="Interaction force constant" min={0} max={100000} />
            <RangeInput id="krandom" name="Noise" min={0} max={10000000000} />
            <RangeInput id="fcap" name="Max force" min={0} max={200000} />

            <h1 style={headerStyle}>Logo Components</h1>
            <div style={{ marginBottom: '20px' }}>
                <h3>KMD Logo (KUNSTMUSIKKDESIGN)</h3>
                <div style={{ marginBottom: '10px' }}>
                    {[
                        { mode: 'KUNST', label: 'KUNST' },
                        { mode: 'MUSIKK', label: 'MUSIKK' },
                        { mode: 'DESIGN', label: 'DESIGN' },
                        { mode: 'DEFAULT', label: 'DEFAULT' }
                    ].map(variant => (
                        <button 
                            key={variant.label} 
                            style={{ 
                                height: 30, 
                                width: 80, 
                                margin: '2px',
                                backgroundColor: logoType === 'KMD' && mode === variant.mode ? '#007acc' : '#f0f0f0',
                                color: logoType === 'KMD' && mode === variant.mode ? 'white' : 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }} 
                            onClick={() => {
                                setLogoType('KMD');
                                setMode(variant.mode);
                            }}
                        >
                            {variant.label}
                        </button>
                    ))}
                </div>
                
                <h3>KMD Exit Logo (KMDEXIT▝)</h3>
                <div>
                    {[
                        { mode: 'K', label: 'K' },
                        { mode: 'M', label: 'M' },
                        { mode: 'D', label: 'D' },
                        { mode: 'EXIT', label: 'EXIT' },
                        { mode: 'DEFAULT', label: 'DEFAULT' }
                    ].map(variant => (
                        <button 
                            key={variant.label} 
                            style={{ 
                                height: 30, 
                                width: 80, 
                                margin: '2px',
                                backgroundColor: logoType === 'EXIT' && mode === variant.mode ? '#28a745' : '#f0f0f0',
                                color: logoType === 'EXIT' && mode === variant.mode ? 'white' : 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }} 
                            onClick={() => {
                                setLogoType('EXIT');
                                setMode(variant.mode);
                            }}
                        >
                            {variant.label}
                        </button>
                    ))}
                </div>
            </div>
            

            <h1 style={headerStyle}>Logo</h1>
            <div style={{ marginBottom: '10px' }}>
                {['horizontal', 'vertical'].map(d => (
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
                            textTransform: 'capitalize'
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
                    {direction === 'vertical' ? 'Height' : 'Width'}: {width}px
                </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                <div style={{ border: '1px solid red', display: 'inline-block', flexShrink: 0 }}>
                    {logoType === 'KMD' ? (
                        <KMDLogo width={width} mode={mode} direction={direction} constants={constants} />
                    ) : (
                        <KMDExitLogo width={width} mode={mode} direction={direction} constants={constants} />
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

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
