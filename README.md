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
import { KMDLogo, KMDExitLogo } from '@kmd/logo';

function App() {
  return (
    <div>
      <KMDLogo width={400} mode="KUNST" />
      <KMDExitLogo width={400} mode="EXIT" />
    </div>
  );
}

export default App;
```

### TypeScript

```tsx
import React from 'react';
import { KMDLogo, KMDExitLogo } from '@kmd/logo';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <KMDLogo 
        width={400}
        mode="DESIGN"
        constants={{
          k: 234,
          b: 18,
          ki: 389,
          krandom: 1992700730,
          fcap: 15036
        }}
      />
      <KMDExitLogo width={400} mode="EXIT" />
    </div>
  );
};

export default App;
```

## Framework Examples

### Next.js (App Router)

```tsx
// app/page.tsx
import { KMDLogo } from '@kmd/logo';

export default function Home() {
  return (
    <main>
      <h1>My App</h1>
      <KMDLogo width={600} mode="DESIGN" />
    </main>
  );
}
```

### Next.js (Pages Router)

```tsx
// pages/index.tsx
import { KMDLogo } from '@kmd/logo';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>My App</h1>
      <KMDLogo width={600} mode="DESIGN" />
    </div>
  );
};

export default Home;
```

### Vite + React

```tsx
// src/App.tsx
import { useState } from 'react';
import { KMDLogo, KMDExitLogo } from '@kmd/logo';

function App() {
  const [logoType, setLogoType] = useState<'KMD' | 'EXIT'>('KMD');
  const [mode, setMode] = useState('DEFAULT');
  
  const kmdModes = ['KUNST', 'MUSIKK', 'DESIGN', 'DEFAULT'];
  const exitModes = ['K', 'M', 'D', 'EXIT', 'DEFAULT'];
  
  return (
    <div className="App">
      <div>
        <button onClick={() => setLogoType('KMD')}>KMD Logo</button>
        <button onClick={() => setLogoType('EXIT')}>Exit Logo</button>
      </div>
      
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        {(logoType === 'KMD' ? kmdModes : exitModes).map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      
      {logoType === 'KMD' ? (
        <KMDLogo width={500} mode={mode} />
      ) : (
        <KMDExitLogo width={500} mode={mode} />
      )}
    </div>
  );
}

export default App;
```

## Components

### KMDLogo

Displays "KUNSTMUSIKKDESIGN" with physics-based letter animation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `420` | Width of the logo in pixels |
| `mode` | `'KUNST' \| 'MUSIKK' \| 'DESIGN' \| 'DEFAULT'` | `'DEFAULT'` | Emphasis mode for letter positioning |
| `constants` | `PhysicsConstants` | See below | Physics simulation parameters |
| `style` | `React.CSSProperties` | `{}` | Additional CSS styles |
| `mainPage` | `string` | `undefined` | URL for the logo link |

### KMDExitLogo

Displays "KMDEXIT▝" with physics-based letter animation.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `420` | Width of the logo in pixels |
| `mode` | `'K' \| 'M' \| 'D' \| 'EXIT' \| 'DEFAULT'` | `'DEFAULT'` | Emphasis mode for letter positioning |
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
import { KMDLogo } from '@kmd/logo';

function CustomPhysicsLogo() {
  const customConstants = {
    k: 300,           // Stiffer springs
    b: 25,            // More damping
    ki: 500,          // Stronger interactions
    krandom: 500000,  // Less noise
    fcap: 20000       // Higher force limit
  };
  
  return (
    <KMDLogo
      width={400}
      mode="MUSIKK"
      constants={customConstants}
      style={{ border: '1px solid #ccc', padding: '20px' }}
    />
  );
}
```

### Multiple Logo Components

```tsx
import { KMDLogo, KMDExitLogo } from '@kmd/logo';

function MultipleLogos() {
  return (
    <div>
      {/* Main KMD logo with KUNST emphasis */}
      <KMDLogo width={400} mode="KUNST" />
      
      {/* Exit logo with EXIT emphasis */}
      <KMDExitLogo width={300} mode="EXIT" />
      
      {/* Design emphasis */}
      <KMDLogo width={500} mode="DESIGN" />
    </div>
  );
}
```

### As a Link

```tsx
import { KMDLogo } from '@kmd/logo';

function LinkedLogo() {
  return (
    <KMDLogo
      width={350}
      mode="KUNST"
      mainPage="https://kmd.ac"
      style={{ cursor: 'pointer' }}
    />
  );
}
```

### Responsive Logo

```tsx
import { useState, useEffect } from 'react';
import { KMDLogo } from '@kmd/logo';

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
    <KMDLogo width={width} mode="DESIGN" />
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
<KMDLogo 
  width={400}
  mode="DEFAULT"
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

[View live demo](https://kmd-uib.github.io/kmd-logo)
