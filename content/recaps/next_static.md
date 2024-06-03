---
title: "Next.js Static"
date: "2024-05-31"
image: "/images/nextjs.png"
---

__Next.js__ 에 대한 기록 정리

## 설치
Next.js를 CLI로 설치할 수 있지만, 필요한 의존성을 통해 직접 설치할 수도 있습니다.

```shell
pnpm install next react react-dom
```

이후 `app` 폴더 내에 `layout`과 `page`를 직접 생성하여 사용할 수 있습니다.

### Typescript 설정
TypeScript는 자바스크립트의 상위 집합으로, 정적 타입 검사를 제공합니다. 이는 코드 작성 시 오류를 미리 발견할 수 있게 도와줍니다.

필요한 의존성을 설치합니다.

```shell
pnpm install @types/node @types/react typescript
```

필요에 따라 `tsconfig.json` 파일을 설정합니다. 이 파일은 TypeScript 컴파일러의 동작을 설정합니다.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

이 설정은 TypeScript 컴파일러가 ESNext 모듈 시스템을 사용하고, JSX를 지원하며, Node.js와 함께 작동하도록 설정합니다.

## PreRendering
Next.js는 두 가지 방식의 프리렌더링을 제공합니다:

1. **정적 생성 (Static Generation, SSG)**: 빌드 시 HTML을 생성하여 빠른 페이지 로딩을 제공합니다. 주로 블로그, 문서 사이트에 사용됩니다.
2. **서버 사이드 렌더링 (Server-side Rendering, SSR)**: 요청 시마다 HTML을 생성하여 항상 최신 데이터를 제공합니다. 주로 실시간 데이터가 필요한 페이지에 사용됩니다.

### 정적 생성 예시
정적 생성은 빌드 시점에 페이지를 미리 생성합니다. 이를 위해 `getStaticProps` 함수를 사용합니다.

```jsx
// pages/index.tsx
import { GetStaticProps } from 'next';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
  return {
    props: {
      posts,
    },
  };
}
```

### 서버 사이드 렌더링 예시
서버 사이드 렌더링은 각 요청마다 페이지를 생성합니다. 이를 위해 `getServerSideProps` 함수를 사용합니다.

```jsx
// pages/index.tsx
import { GetServerSideProps } from 'next';

export default function Home({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  
  return {
    props: {
      posts,
    },
  };
}
```

## RUN DEV vs RUN START
- **`npm run dev`**:
    - 용도: 개발 단계
    - 환경: 개발 서버
    - 특징: 핫 리로딩 지원, 코드 변경 시 즉시 반영
    - 개발 중에 사용하는 명령어로, 코드를 수정하면 자동으로 페이지가 새로고침됩니다. 디버깅과 테스트에 용이합니다.

- **`npm run build && npm run start`**:
    - `npm run build`: 프로덕션용으로 애플리케이션을 빌드
    - `npm start`: 빌드된 애플리케이션을 프로덕션 서버에서 실행
    - 용도: 배포 단계
    - 특징: 최적화된 빌드 결과물 제공, 높은 성능과 안정성
    - 실제 운영 환경에서 사용하는 명령어로, 최적화된 정적 파일을 생성하여 빠른 로딩 속도를 제공합니다.

## Link Component
Next.js의 `<Link>` 컴포넌트는 클라이언트 사이드 네비게이션을 제공합니다. 페이지 간 전환 시 전체 페이지를 다시 로드하지 않고, 필요한 부분만 업데이트하여 빠른 전환을 가능하게 합니다.

```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
}
```

## PreFetching
프리페칭은 사용자가 링크를 클릭하기 전에 필요한 데이터를 미리 가져오는 기술입니다. Next.js의 `<Link>` 컴포넌트는 기본적으로 `prefetch` 속성이 `true`로 설정되어 있어 성능을 향상시킵니다. 프리페칭은 추가 네트워크 트래픽을 발생시킬 수 있지만, 일반적으로 사용자 경험 향상에 기여합니다.

## CSS Style
`app` 디렉토리 내 CSS 파일을 통해 전역 스타일을 적용할 수 있습니다. 예를 들어, `app/globals.css` 파일에 스타일을 정의하고, 이 파일을 `app/layout.tsx`에서 임포트하여 사용합니다.

```css
/* app/globals.css */
body {
  font-family: 'Arial, sans-serif';
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

```jsx
// app/layout.tsx
import '../globals.css';

export default function Layout({ children }) {
  return (
    <div>
      <header>My Blog</header>
      <main>{children}</main>
      <footer>© 2024 My Blog</footer>
    </div>
  );
}
```

## Tailwind CSS
Tailwind CSS는 유틸리티 기반의 CSS 프레임워크로, 빠르고 쉽게 스타일링을 할 수 있습니다.

### 설치
```shell
pnpm install autoprefixer postcss tailwindcss
```

### 설정
`tailwind.config.js` 및 `postcss.config.js` 파일을 설정합니다:

```js
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### 사용
`globals.css` 파일에 다음 내용을 추가합니다:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

이후, 클래스 속성을 사용하여 스타일을 적용합니다:

```jsx
<h1 className="text-2xl font-bold">Hello, world!</h1>
```

## Children Props
React 컴포넌트에서 `children` props를 사용하는 방법입니다:

```jsx
interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1>{children}</h1>;
}

// 사용 예시
<Heading>TEXT</Heading>
```

## Alias
TypeScript에서 `paths` 옵션을 통해 경로를 alias로 설정할 수 있습니다. `tsconfig.json` 파일에 다음을 추가합니다:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"]
    }
  }
}
```

이를 통해 긴 경로 대신 짧은 경로로 모듈을 임포트할 수 있습니다:

```jsx
import MyComponent from '@components/MyComponent';
```

## Static Assets
정적 파일은 `public` 폴더에 저장하고, 절대 경로를 사용하여 접근할 수 있습니다:

```html
<img src="/images/profile.jpg" alt="Profile" />
```

## Fonts
Next.js의 `next/font/google` 모듈을 사용하여 Google Fonts를 쉽게 사용할 수 있습니다:

```javascript
import { Orbitron } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
});

// 사용 예시
<h1 className={`font-bold pb-3 text-2xl ${orbitron.className}`}></h1>
```

변수 옵션을 통해 커스텀 폰트를 설정할 수 있습니다:

```javascript
import { Orbitron } from 'next/font/google';

export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
};

// 사용 예시
<h2 className="font-orbitron font-semibold py-1 text-center"></h2>
```

## Static File 읽기
블로그 포스트를 작성할 때, 정적 파일을 읽어올 수 있습니다. `marked` 라이브러리를 사용하여 Markdown 파일을 렌더링합니다.

### 설치
```shell
pnpm install marked
```

### 사용
```javascript
import fs from 'fs';
import path from 'path';
import marked from 'marked';

export function getPostContent(slug) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return marked(fileContent);
}
```

이 파일을 통해 Markdown 파일을 HTML로 변환하여 블로그 포스트로 사용할 수 있습니다.

## Matter library
`.md` 파일의 메타데이터를 파싱하기 위해 사용하는 라이브러리입니다. 다음과 같이 설정합니다:

```markdown
---
title: "Next.js Recaps"
date: "2024-05-31"
image: "/images/nextjs.png"
---
```

## Dynamic Route
`app` 디렉토리 안에 `[]`를 사용하여 동적 라우트를 설정할 수 있습니다:

```shell
- app
  ㄴ [dynamic]
    - page.tsx
```

동적 라우트 경로 안에 명시한 이름을 props로 받아올 수 있습니다:

```typescript
interface Props {
  params: { dynamic: string }
}

export default function Page({ params }: Props) {
  return <div>My Post: {params.dynamic}</div>
}
```

## Listing Contents
JavaScript 함수를 내보내서 분류하고, 화면에서 이를 import하여 사용할 수 있습니다:

```typescript
export function Test() {
    // 함수 내용
}

export default function TestPage() {
    const result = Test();
    return (
        <ul>
            {result.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
```

## Static Generation Params
빌드 시간에 동적 라우트의 값을 정적으로 생성하기 위해 `generateStaticParams` 함수를 사용할 수 있습니다.

[site](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

## Metadata
Next.js의 Metadata 형식을 사용하여 HTML의 meta 태그를 대체할 수 있습니다.

## Client Components
클라이언트 컴포넌트를 사용하면 서버에서 프리렌더된 페이지에 상호작용을 추가할 수 있습니다.

```typescript
'use client'
```

이를 통해 상태 관리, 브라우저 API 접근(localStorage, geolocation 등)이 가능합니다.

## Static Exports
정적 사이트나 SPA로 사용하기 위해 빌드할 수 있습니다.

```shell
next build ...
```

이 명령어를 통해 라우트별로 정적 페이지를 생성하여 빠르게 적은 용량으로 페이지를 로드할 수 있습니다. 또한 이미지 최적화 기능도 이용할 수 있습니다.