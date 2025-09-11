# @kmd/logo

Animated KMD logo component with spring physics simulation for React applications.

## Installation

### npm
```bash
npm install @kmd/logo
```

### yarn
```bash
yarn add @kmd/logo
```

### pnpm
```bash
pnpm add @kmd/logo
```

## Requirements

- React ≥16.8.0
- React DOM ≥16.8.0

## Quick Start

### JavaScript

```jsx
import React from 'react';
import { Logo } from '@kmd/logo';

function App() {
  return (
    <div>
      <Logo 
        width={400} 
        text="KUNSTMUSIKKDESIGN" 
        mode={[{ start: 0, length: 5 }]} 
      />
    </div>
  );
}

export default App;
```

### TypeScript

```tsx
import React from 'react';
import { Logo } from '@kmd/logo';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Logo 
        width={400}
        text="KMDEXIT▝"
        mode={[{ start: 3, length: 4 }]}
        constants={{
          k: 234,
          b: 18,
          ki: 389,
          krandom: 1992700730,
          fcap: 15036
        }}
      />
    </div>
  );
};

export default App;
```

## Framework Examples

### Next.js (App Router)

```tsx
// app/page.tsx
import { Logo } from '@kmd/logo';

export default function Home() {
  return (
    <main>
      <h1>My App</h1>
      <Logo 
        width={600} 
        text="KUNSTMUSIKKDESIGN" 
        mode={[{ start: 11, length: 6 }]} 
      />
    </main>
  );
}
```

### Next.js (Pages Router)

```tsx
// pages/index.tsx
import { Logo } from '@kmd/logo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>My App</h1>
      <Logo 
        width={600} 
        text="KUNSTMUSIKKDESIGN" 
        mode={[{ start: 11, length: 6 }]} 
      />
    </div>
  );
};

export default Home;
```

### Vite + React

```tsx
// src/App.tsx
import { useState } from 'react';
import { Logo } from '@kmd/logo';

function App() {
  const [text, setText] = useState('KUNSTMUSIKKDESIGN');
  const [mode, setEmphasis] = useState([{ start: 0, length: 5 }]);
  
  const presets = [
    { text: 'KUNSTMUSIKKDESIGN', mode: [{ start: 0, length: 5 }], label: 'KUNST' },
    { text: 'KUNSTMUSIKKDESIGN', mode: [{ start: 5, length: 6 }], label: 'MUSIKK' },
    { text: 'KUNSTMUSIKKDESIGN', mode: [{ start: 11, length: 6 }], label: 'DESIGN' },
    { text: 'KMDEXIT▝', mode: [{ start: 0, length: 3 }], label: 'KMD' },
    { text: 'KMDEXIT▝', mode: [{ start: 3, length: 4 }], label: 'EXIT' }
  ];
  
  return (
    <div className="App">
      <select 
        value={`${text}-${JSON.stringify(mode)}`} 
        onChange={(e) => {
          const preset = presets.find(p => 
            `${p.text}-${JSON.stringify(p.mode)}` === e.target.value
          );
          if (preset) {
            setText(preset.text);
            setEmphasis(preset.mode);
          }
        }}
      >
        {presets.map(preset => (
          <option key={preset.label} value={`${preset.text}-${JSON.stringify(preset.mode)}`}>
            {preset.label}
          </option>
        ))}
      </select>
      
      <Logo width={500} text={text} mode={mode} />
    </div>
  );
}

export default App;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `400` | Width of the logo in pixels |
| `text` | `string` | `'KUNSTMUSIKKDESIGN'` | Text to display (supported letters: K,U,N,S,T,M,I,D,E,G,X,▝) |
| `mode` | `Array<{start: number, length: number}>` | `[]` | Array of letter ranges to emphasize (visual opacity) |
| `mode` | `Array<{start: number, length: number}>` | `[]` | Array of letter ranges with stronger physics anchoring |
| `constants` | `PhysicsConstants` | See below | Physics simulation parameters |
| `style` | `React.CSSProperties` | `{}` | Additional CSS styles |
| `mainPage` | `string` | `undefined` | URL for the logo link |

### Physics Constants

```typescript
interface PhysicsConstants {
  k: number;        // Spring stiffness (default: 234)
  b: number;        // Spring damping (default: 18)
  ki: number;       // Interaction force constant (default: 389)
  krandom: number;  // Noise factor (default: 1992700730)
  fcap: number;     // Max force (default: 15036)
}
```

### Default Constants

```javascript
{
  k: 234,           // Spring stiffness
  b: 18,            // Spring damping  
  ki: 389,          // Interaction force constant
  krandom: 1992700730, // Noise
  fcap: 15036       // Max force
}
```

## Advanced Usage

### Custom Physics Parameters

```tsx
import { Logo } from '@kmd/logo';

function CustomPhysicsLogo() {
  const customConstants = {
    k: 300,           // Stiffer springs
    b: 25,            // More damping
    ki: 500,          // Stronger interactions
    krandom: 500000,  // Less noise
    fcap: 20000       // Higher force limit
  };
  
  return (
    <Logo
      width={400}
      text="KUNSTMUSIKKDESIGN"
      mode={[{ start: 5, length: 6 }]} // Emphasize MUSIKK visually
      mode={[{ start: 5, length: 6 }]}  // Make MUSIKK a physics anchor
      constants={customConstants}
      style={{ border: '1px solid #ccc', padding: '20px' }}
    />
  );
}
```

### Text Variants with Anchoring

```tsx
import { Logo } from '@kmd/logo';

function TextVariants() {
  return (
    <div>
      {/* KMD variant with KMD as anchor */}
      <Logo
        width={300}
        text="KMDEXIT▝"
        mode={[{ start: 0, length: 3 }]}
        mode={[{ start: 0, length: 3 }]}
      />
      
      {/* EXIT variant with EXIT as anchor */}
      <Logo
        width={300}
        text="KMDEXIT▝"
        mode={[{ start: 3, length: 4 }]}
        mode={[{ start: 3, length: 4 }]}
      />
    </div>
  );
}
```

### As a Link

```tsx
import { Logo } from '@kmd/logo';

function LinkedLogo() {
  return (
    <Logo
      width={350}
      text="KUNSTMUSIKKDESIGN"
      mode={[{ start: 0, length: 5 }]} // Emphasize KUNST
      mainPage="https://kmd.ac"
      style={{ cursor: 'pointer' }}
    />
  );
}
```

### Responsive Logo

```tsx
import { useState, useEffect } from 'react';
import { Logo } from '@kmd/logo';

function ResponsiveLogo() {
  const [width, setWidth] = useState(400);
  
  useEffect(() => {
    const handleResize = () => {
      setWidth(Math.min(window.innerWidth * 0.8, 600));
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Logo 
      width={width} 
      text="KUNSTMUSIKKDESIGN" 
      mode={[{ start: 11, length: 6 }]} // Emphasize DESIGN
    />
  );
}
```

## Individual Letter Components

You can also import and use individual letter components:

```tsx
import { K, U, N, S, T } from '@kmd/logo';

function CustomLayout() {
  return (
    <div style={{ position: 'relative', height: '100px' }}>
      <K style={{ position: 'absolute', left: 0 }} />
      <U style={{ position: 'absolute', left: 50 }} />
      <N style={{ position: 'absolute', left: 100 }} />
      <S style={{ position: 'absolute', left: 150 }} />
      <T style={{ position: 'absolute', left: 200 }} />
    </div>
  );
}
```

Available letter components: `D`, `E`, `G`, `I`, `K`, `M`, `N`, `S`, `T`, `U`, `X`, `Block` (▝ symbol)

## Styling

The logo inherits styles and can be customized:

```css
/* Custom styles */
.my-logo {
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  transition: opacity 0.3s ease;
}

.my-logo:hover {
  opacity: 0.8;
}
```

```tsx
<Logo 
  width={400}
  text="KUNSTMUSIKKDESIGN"
  mode={[]}
  style={{ className: 'my-logo' }}
/>
```

## Browser Support

- Modern browsers with ES2018+ support
- Chrome/Edge 63+, Firefox 58+, Safari 11.1+
- Node.js 14+ for SSR

## Development

To work on this package:

1. **Install dependencies**: `npm install` / `yarn` / `pnpm install`
2. **Start development server**: `npm run dev`
3. **Build library**: `npm run build:lib`
4. **Build demo**: `npm run build`
5. **Lint code**: `npm run lint`

## License

Proprietary © Frithjof Nerdrum, Ole Christian Rynning

## Contributing

Issues and pull requests are welcome! Please ensure tests pass and code follows the existing style.

## Demo

[View live demo](https://your-username.github.io/kmd-logo)
