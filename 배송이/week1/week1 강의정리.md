# Next.js 개념 정리

## 사전렌더링 (Pre-rendering)

-   **CSR 단점**: 초기 접속 속도가 느려짐
-   **사전렌더링**: 이미 렌더링 된 파일을 서버에서 보내줌 → FCP(First Contentful Paint) 단축
-   **한계**: 렌더링 직후에는 인터랙션 불가 → JS 로딩 필요 → 완전한상태는 아님 → **수화(Hydration, TTI: Time To Interactive)** 필요

------------------------------------------------------------------------

## Page Router

-   **라우팅 방식**: pages 폴더 기반으로 페이지 라우팅
-   **특징**: React와 동일하게 실행/종료 가능, return 안에 작성한
    JSX가 화면에 나타남

### 주요 컴포넌트

-   **App 컴포넌트**
    -   루트 컴포넌트 역할 (모든 페이지의 부모)
    -   Component: 현재 페이지
    -   pageProps: 해당 페이지에 전달되는 props
-   **Document 컴포넌트**
    -   index.html과 유사
    -   모든 페이지에 공통 적용 (메타태그, 폰트, charset 등 설정 가능)

### 설정 파일

-   **next.config.js**
    -   Next.js 전역 설정 담당
    -   실습 단계에서는 꺼두고 진행 가능
