# Next.js 네비게이션

## 1 기본 개념
- 네비게이션(Navigation): 앱 내에서 페이지 이동을 의미
- Next.js는 클라이언트 사이드 렌더링 방식을 이용해 페이지 이동 처리
- HTML의 a 태그 대신 Link 컴포넌트를 사용해야 효율적

## 2 Link 컴포넌트
- import Link from 'next/link'
- 사용 예시: <Link href="/about">About</Link>
- a 태그와 유사하나 클라이언트 사이드 렌더링으로 동작 → 새로고침 없이 빠른 이동
- 여러 링크 생성 시 href에 경로 지정

## 3 프로그래매틱 네비게이션 (useRouter)
- 버튼 클릭 등 이벤트 기반으로 페이지 이동 가능
- import { useRouter } from 'next/router'
- router.push(): 일반 이동
- router.replace(): 히스토리 기록을 남기지 않음
- router.back(): 브라우저 뒤로 가기

## 4 이벤트 기반 이동
- 특정 조건(useEffect 등) 만족 시 자동으로 이동 처리 가능

## 5 핵심
- 정적 네비게이션: Link 컴포넌트
- 동적 네비게이션: useRouter (push, replace, back)

---

# Next.js 프리패칭

## 1 개념
- 프리패칭(Pre-fetching): 이동 가능성이 있는 페이지의 자바스크립트 코드와 데이터를 미리 가져와 캐시에 저장
- 페이지 이동 시 추가 요청 없이 즉시 화면 표시 → 빠른 사용자 경험 제공

## 2 동작 방식
1. 초기 접속 시 현재 페이지 렌더링과 함께 연결된 다른 페이지 JS 코드 일부를 미리 불러옴  
2. 페이지 이동 시 캐시에 있는 코드로 즉시 이동  
3. 기본적으로 Link로 연결된 페이지가 프리패칭 대상

## 3 장점
- 빠른 FCP(First Contentful Paint) 유지
- CSR의 빠른 페이지 이동 장점 유지
- JS 번들 최적화로 네트워크 효율 증가

## 4 제약
- 개발 모드에서는 동작하지 않음 (npm run dev)  
- 프로덕션 모드(npm run build → npm run start)에서 확인 가능  
- <Link prefetch={false}>로 비활성화 가능  
- router.prefetch('/path') API로 강제 실행 가능

## 5 핵심
- Link로 연결된 페이지는 자동 프리패칭
- 개발 모드에서는 비활성화
- 필요 시 직접 제어 가능

---

# Next.js API Routes

## 1 개념
- Next.js 내부에서 백엔드 API를 쉽게 구축할 수 있는 기능
- 별도 서버 없이 pages/api 경로에 파일 생성만으로 API 엔드포인트 생성
- 프론트와 백엔드를 통합해 개발 가능

## 2 구조
- pages/api 폴더 안의 파일명이 곧 API 경로가 됨
- 예: pages/api/hello.ts → /api/hello

## 3 동작 방식
- req 객체: 요청 정보
- res 객체: 응답 정보
- res.status(200).json({}) 형태로 응답 반환

## 4 특징
- 소규모 프로젝트나 단순 데이터 처리에 적합
- 대규모 백엔드 대체용은 아님, 보조 API 서버로 활용 가능

---

# Next.js 스타일링

## 1 인라인 스타일
- style 속성에 객체 형태로 작성
- 간단한 경우에만 사용

## 2 CSS 파일 분리
- 일반적인 React와 동일하게 CSS 파일 생성 가능
- 단, 글로벌 CSS는 _app.tsx에서만 import 가능
- 개별 컴포넌트에서 글로벌 CSS import 시 에러 발생

## 3 CSS 충돌 문제
- 동일한 클래스명을 여러 CSS 파일에서 사용할 경우 충돌 발생

## 4 CSS Modules
- 권장되는 방식
- 파일명을 module.css로 작성
- import 시 클래스명이 자동으로 유니크하게 변환 → 충돌 방지

## 5 정리
- 소규모 스타일: 인라인
- 전역 스타일: _app.tsx에 글로벌 CSS import
- 컴포넌트별 스타일: CSS Modules 사용 권장

---

# Next.js 글로벌 레이아웃

## 1 필요성
- 모든 페이지에 공통적으로 적용되는 구조(Header, Footer 등)를 효율적으로 관리
- 개별 페이지마다 반복 작성하지 않고 전역에서 한번에 설정

## 2 구조
- Header, Footer, Main Content 영역으로 구분
- 전역에서 불러와 모든 페이지에 동일하게 적용

## 3 적용 방식
- App 컴포넌트에서 글로벌 레이아웃으로 감쌈
- props.children을 통해 각 페이지 콘텐츠 삽입

## 4 스타일링
- 글로벌 레이아웃에도 디자인 적용 필요
- 글로벌 CSS 또는 CSS Modules 활용
- Header, Footer, Main 별도 스타일 지정

## 5 결과
- 페이지 이동 시에도 Header/Footer 유지
- 공통 UI를 한번에 수정 가능
- 개별 페이지는 메인 콘텐츠 작성에만 집중 가능

---

# Next.js 페이지별 레이아웃

## 1 개념
- 글로벌 레이아웃: 모든 페이지 공통 적용
- 페이지별 레이아웃: 특정 페이지만 다른 레이아웃을 적용

## 2 필요성
- 검색 페이지, 상세 페이지 등 특수 구조 필요 시 사용
- 공통 레이아웃을 그대로 쓰면 불필요한 요소가 섞여 UX 저하 → 별도 레이아웃 필요

## 3 구현 방법
1. 레이아웃 컴포넌트 생성 → children을 받아 렌더링  
2. getLayout 패턴  
   - 각 페이지에서 getLayout 메서드 정의  
   - 해당 페이지를 감쌀 레이아웃 반환  
   - App 컴포넌트에서 실행해 페이지별 레이아웃 적용  
3. 타입 처리  
   - NextPageWithLayout 타입 정의 → getLayout을 프로퍼티로 포함  
   - props 확장 가능

## 4 예외 처리
- getLayout이 없는 페이지는 기본 레이아웃만 적용
- undefined 오류 방지를 위해 조건부 처리 필요

## 5 활용 예시
- 검색 페이지: 검색창 + 결과 리스트 포함
- 상세 페이지: 사이드바 없는 단순 구조
- 관리자 페이지: 관리자 전용 레이아웃 적용

## 정리
- getLayout 패턴을 통해 페이지마다 다른 레이아웃 적용 가능
- 글로벌 레이아웃은 공통 구조, 페이지별 레이아웃은 특수 구조를 처리