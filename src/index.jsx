import { useState, useCallback } from 'react';
import { createRoot } from 'react-dom/client';
import Logo from './Logo';

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
    const [text, setText] = useState('KUNSTMUSIKKDESIGN');
    const [mode, setMode] = useState('KUNST');
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

            <h1 style={headerStyle}>Text Variants</h1>
            <div style={{ marginBottom: '20px' }}>
                {[
                    { text: 'KUNSTMUSIKKDESIGN', mode: 'KUNST', label: 'KUNST' },
                    { text: 'KUNSTMUSIKKDESIGN', mode: 'MUSIKK', label: 'MUSIKK' },
                    { text: 'KUNSTMUSIKKDESIGN', mode: 'DESIGN', label: 'DESIGN' },
                    { text: 'KUNSTMUSIKKDESIGN', mode: 'DEFAULT', label: 'DEFAULT' },
                    { text: 'KMDEXIT▝', mode: 'K', label: 'K' },
                    { text: 'KMDEXIT▝', mode: 'M', label: 'M' },
                    { text: 'KMDEXIT▝', mode: 'D', label: 'D' },
                    { text: 'KMDEXIT▝', mode: 'EXIT', label: 'EXIT' }
                ].map(variant => (
                    <button 
                        key={variant.label} 
                        style={{ 
                            height: 30, 
                            width: 80, 
                            margin: '2px',
                            backgroundColor: text === variant.text && mode === variant.mode ? '#007acc' : '#f0f0f0',
                            color: text === variant.text && mode === variant.mode ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }} 
                        onClick={() => {
                            setText(variant.text);
                            setMode(variant.mode);
                        }}
                    >
                        {variant.label}
                    </button>
                ))}
            </div>
            
            <h1 style={headerStyle}>Custom Text</h1>
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value.toUpperCase())}
                    style={{ 
                        padding: '8px', 
                        fontSize: '16px', 
                        width: '200px', 
                        marginRight: '10px' 
                    }}
                    placeholder="Enter custom text"
                />
                <button 
                    onClick={() => setMode('DEFAULT')}
                    style={{ 
                        padding: '8px 12px', 
                        backgroundColor: '#dc3545', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer' 
                    }}
                >
                    Reset to Default
                </button>
            </div>

            <h1 style={headerStyle}>Logo</h1>
            <div>
                <input 
                    id="width" 
                    type="range" 
                    min={100} 
                    max={1500} 
                    value={width} 
                    onChange={(event) => setWidth(parseInt(event.target.value))}
                />
                <label style={{ marginLeft: 10 }} htmlFor="width">Width: {width}px</label>
            </div>
            <div style={{ position: 'relative', display: 'inline-block', border: '1px solid red' }}>
                <Logo width={width} text={text} mode={mode} constants={constants} />
            </div>
            
            <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
                <p><strong>Current text:</strong> {text}</p>
                <p><strong>Mode:</strong> {mode}</p>
                <p><strong>Available letters:</strong> K, U, N, S, T, M, I, D, E, G, X, ▝</p>
            </div>
        </div>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
