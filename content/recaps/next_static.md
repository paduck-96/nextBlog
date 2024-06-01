---
title: "Next.js Static"
date: "2024-05-31"
image: "/images/nextjs.png"
---

__Next.js__ 에 대한 기록 정리

## install
- cli 설치도 있지만, 필요한 dependency 를 통해 직접 적용 가능
```shell
pnpm install next react react-dom
```

- 이후 직접 app 폴더 내에 layout 과 page 에 대한 직접 명시로 생성 가능

### Typescript 설정
- 필요 dependency 설치
```shell
pnpm install @types/node @types/react typescript
```

- 필요에 따른 tsconfig.json 파일 설정

---

## PreRendering

## RUN DEV vs RUN START

## Link Component

## PreFetching

## CSS Style
- app 내 css 파일을 통해 global 한 스타일 적용이 가능

## Tailwind  CSS
```shell
pnpm install autoprefixer postcss tailwindcss
```
```css
# global css 파일
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- postcss.config.js, tailwind.config.js 설정 필요
- className 속성에 명시해서 사용

## Children Props
```javascript
export default funciton Heading({ children }: HeadingProps) {}
//
//
<Heading>TEXT</Heading>
```

## Alias
- typescript 에서 paths 를 통해 경로를 alias 로 바꿔줄 수 있음

## Static Assets
- public 폴더에 넣어두고, 절대 경로로 가져옴

## Fonts
- next/font/google 에 googleFont 등이 사전에 담겨있어서 가져와서 사용하면 됌
```javascript
export const orbitron = Orbitron({
  subsets: ['latin'],
});
//
//
<h1 className={`font-bold pb-3 text-2xl ${orbitron.className}`}></h1>
```

- font 명시할 때 variable 옵션을 통해 custom 하게 사용 가능
```javascript
...,
theme: {
    extend: {
        fontFamily: {
            orbitron: ['var(--font-orbitron)', 'sans-serif'],
        },
    },
},
//
//
<h2 className="font-orbitron font-semibold py-1 text-center"></h2>
```

## Static File 읽기
- readFile 을 통해 실제 블로그에 임의 작성되는 .md 파일 읽기
- 다만, marked 라이브러리를 통해 rendering 을 해줘야 함
```shell
pnpm install marked
```

## Matter library
- .md 파일을 형태에 갖춰서 출력하기 위해 사용하는 라이브러리
```markdown
---
title: "Next.js Recaps"
date: "2024-05-31"
image: "/images/nextjs.png"
---
```

## Dynamic Route
- app route 안에 [ ] 를 통해 dynamic route 설정 가능
```shell
- app
  ㄴ [dynamic]
    - page.tsx
```
- dynamic route 경로 안에 명시한 이름을 props 로 받아올 수 있음
```typescript
interface Props {
    params: { dynamic: string }
}

export default function Page({ params }: Props) {
  return <div>My Post: {params.dynamic}</div>
}
```

## Listing Contents
- export js function 으로 분류해서 거기에서 해당 함수를 import 하는 형태로 작업 가능
- 이를 통해 화면 출력 시 { } 안에 js 문법으로 동작 가능
```typescript
export function Test() {
    
}
//
//
export default function TestPage() {
    const result = Test();
    ...
    <ul>
        {result.map()}
    </ul>
}
```

## Static Generation Params
[//]: # (https://nextjs.org/docs/app/api-reference/functions/generate-static-params)
- generateStaticParams 라는 함수를 통해 어떤 동적 route 의 값에 접근할 수 있음
- route 를 빌드 시간에 정적으로 생성 가능하게 함

## Metadata
- Next 의 Metadata 형식을 통해서 html 의 meta data 대체 가능

## Client Components
```typescript
'use client'
```
- 서버에서 prerender 된 page 에 interactive 한 작용이 가능 
  - e.g. 상태 관리, js code 등
- browser api 접근 가능 
  - e.g. localStorage, geoLocation 등

## Static Exports
- static site 나 SPA 로 사용하기 위해서 동작
```shell
next build ...
```
- 명령어를 통해 route 별로 정적 페이지 생성 후 빠르게 적은 용량으로 page load
- Image 에 대한 optimize 도 주료 이용
