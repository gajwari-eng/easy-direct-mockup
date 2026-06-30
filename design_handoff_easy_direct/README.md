# Handoff: Easy-Direct (이지다이렉트) — 통합 다이렉트 보험몰

## Overview

**Easy-Direct**는 (주)이지인슈의 "착·착·착 AI 보험금 조회 플랫폼" 사업의 하위 서비스로, **국내 모든 보험사의 다이렉트 보험 상품을 하나의 통일된 UI에서 비교·가입할 수 있도록 하는 통합 다이렉트몰**입니다.

핵심 가치제안:
- 겉으로는 EasyDirect 다이렉트몰에서 가입하는 것처럼 보이지만, 백엔드에서는 **고도화된 스크래핑 기술**로 각 보험사의 실제 다이렉트 청약 프로세스를 그대로 활용합니다.
- 고객은 보험사마다 다른 디자인·가입절차·상품구조에 적응할 필요 없이 **한 곳에서 여러 회사 상품을 가입**할 수 있습니다.
- AI가 보장·보험료·가입한도·갱신구조 4축으로 분석해 최적 상품을 추천합니다.

본 핸드오프는 **데스크탑(8화면) + 모바일(8화면) 총 16개 화면**의 디자인 레퍼런스를 담고 있습니다.

---

## About the Design Files

이 번들에 포함된 HTML 파일들은 **HTML로 제작된 디자인 레퍼런스(프로토타입)**이며, 의도된 룩앤필과 동작을 보여주기 위한 것이지 그대로 프로덕션에 복사해서 쓰는 코드가 아닙니다.

개발 시 권장 사항:
- **타겟 코드베이스가 있는 경우** (React / Vue / SwiftUI / Flutter / 네이티브 등): 해당 환경의 기존 패턴·라이브러리·디자인 시스템을 사용하여 이 HTML 디자인을 재구현하세요.
- **신규 프로젝트인 경우**: 프로젝트 성격에 가장 적합한 프레임워크를 선택하여 구현하세요. 권장: **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Zustand**. 모바일은 **React Native + Expo** 또는 별도 반응형 처리.

스크래핑 백엔드는 별도 영역으로, 본 핸드오프 범위에서는 다루지 않습니다. (각 보험사 다이렉트몰 OAuth/세션 관리, 데이터 매핑 레이어, 청약 트랜잭션 미러링 등은 별도 백엔드 설계 필요.)

---

## Fidelity

**High-fidelity (hifi)**

본 디자인은 픽셀 수준에 가까운 hi-fi 목업입니다:
- 최종 컬러 팔레트 (Primary `#0052cc`, Accent `#00c7ae` 등) 확정
- 타이포그래피 (Pretendard Variable) 확정
- 컴포넌트별 스페이싱·라운드·그림자 명시
- 인터랙션(모달, 로딩, 단계 진행, 저장/삭제) 동작 명시

개발자는 정의된 디자인 토큰을 그대로 사용하여 **타겟 코드베이스의 컴포넌트 라이브러리로 픽셀 퍼펙트하게 재구현**해야 합니다.

---

## Screens / Views

### 데스크탑 화면 (8개) — 1280px max-width

#### 01. 메인 (`desktop/01-home.html`)
- **Purpose**: 8개 카테고리 진입, 30초 통합 보험료 조회, 추천 상품 노출, AI 추천 유도
- **Layout**:
  - 상단 토픽바 (높이 40px) + GNB (높이 72px, sticky)
  - Hero 섹션: 좌(헤드라인+CTA) + 우(통합조회 카드, 4필드 폼) 2-column grid (1.1fr 1fr)
  - 8개 카테고리 그리드 (4×2, gap 16px, 패딩 28px의 흰색 카드 안에)
  - 다크 배너 (1fr auto): 통합조회 안내 + CTA 버튼
  - 추천 상품 4-column grid
  - AI Callout (1.3fr 1fr): 좌측 텍스트, 우측 stat cards 2×2
  - Trust 4-column grid (배경 `--surface-2`)
  - 뉴스 + 후기 2-column (1.4fr 1fr)
  - 푸터 (다크 `#0f172a`, 4-column)
- **Key Components**:
  - **Hero 헤드라인**: 50px / weight 900 / line-height 1.15, "다이렉트 보험,/한 곳에서 비교하고/한 번에 가입하세요." (밑줄 강조 부분은 `linear-gradient(transparent 60%, rgba(0,199,174,0.45) 60%)` 형광펜 효과)
  - **Quote Card**: 흰 배경 / radius 20px / box-shadow `0 30px 60px rgba(0,0,0,0.25)` / 패딩 32px. 필드: 생년월일, 성별, 직업, 거주지. CTA 풀폭 primary 버튼.
  - **카테고리 아이템**: 호버 시 translateY(-4px) + 아이콘 박스가 primary 배경으로 전환
  - **AI Callout**: 그라데이션 `linear-gradient(125deg, #0f172a, #1e1b4b)`, 우측 stat card 2×2

#### 02. 회원가입 / 로그인 (`desktop/02-auth.html`)
- **Purpose**: 구글·카카오 간편 로그인 + 착·착·착 플랫폼 연동
- **Layout**: 좌우 분할 (1fr 1fr, 풀 뷰포트)
  - 좌측: `linear-gradient(135deg, #0052cc, #00c7ae)` 배경, 패딩 80px, 로고/헤드라인/3개 불릿 포인트
  - 우측: 폼 영역 (max-width 420px, 중앙 정렬)
- **Components**:
  - **소셜 로그인 버튼**: 풀폭, 패딩 16px, radius 12px, weight 700 / 15px
    - Google: 흰 배경 + SVG 로고 22×22
    - Kakao: `#FEE500` 배경, `#181600` 텍스트
  - **착·착·착 연동 카드**: gradient 배경, 아이콘 박스 44×44 (primary 배경, 흰 화살표)
  - 호버 시 translateY(-2px) + shadow

#### 03. 카테고리 상품 리스트 (`desktop/03-category.html?cat=cancer`)
- **Purpose**: 5개사 비교 + 보험료 일괄조회 + 가입가능여부 + AI 추천 진입 + 플랜 텍스트 리스트
- **Layout**:
  - 카테고리 탭 (가로 8개, 라운드 24px, 활성 시 primary 배경)
  - 사용자 조회 정보 바 (gradient `#0052cc → #1e6ddb`, 가로 4개 필드 + 수정 버튼)
  - 정렬·일괄 액션 툴바
  - 상품 행 (grid 60px 1fr 1.2fr 1fr 180px) × 5개
  - 플랜 텍스트 리스트 카드 (2-column grid)
  - 비교 CTA 배너 (gradient `#00c7ae → #0052cc`)
- **Product Row 구성** (각 행):
  - 체크박스 (22px, accent-color primary)
  - 보험사 영역: 손보/생보 뱃지 + 보험사명 + 상품명 + 태그 (plan/renew/가입가능 chip)
  - 주요 보장: 라벨 + 큰 값
  - 핵심 특약 3개 (불릿)
  - 우측 액션: 가격(26px / 900) + 상세보기/가입가능/가입 버튼 3개 (세로 스택)
  - 선택 시 border `var(--primary)` + box-shadow `0 0 0 3px rgba(0,82,204,0.12)`
- **모달**:
  - 실명인증 모달: 이름·주민번호·휴대폰·인증번호 입력
  - 가입가능 결과 모달: 상단 아이콘(✅/⚠️) + 5개사 결과 행
  - 플랜 저장 모달: 이름·메모·요약·저장 버튼
- **플랜 텍스트 리스트**: 클릭 시 첫 2개 상품 자동 선택 + 저장 모달 오픈

#### 04. 상품 상세 (`desktop/04-product-detail.html`)
- **Purpose**: 약관 원문 그대로 보장내용 전수 표기
- **Layout**:
  - 브레드크럼
  - 상품 헤더 카드 (보험사/상품명/태그/메타정보 5개)
  - 본문 grid (1fr 360px): 좌측 약관표, 우측 sticky 청약 카드
- **약관 표** (`.terms-table`):
  - `border-collapse: collapse`, primary 색 2px 외곽 border 카드 안
  - th 28% width / `var(--surface-2)` 배경 / right border
  - td 패딩 18px 22px / line-height 1.7
  - category-row: primary-light 배경, primary 색, weight 800, letter-spacing 0.5px
  - `<b>` 태그: 보장금액·기간 강조 (primary 색, weight 800)
  - 3개 그룹으로 자동 분할 (전체 terms 길이 / 3): "1. 주계약·진단비 보장", "2. 치료·입원 관련 특약", "3. 면책 및 부가 규정"
- **Sticky 청약 카드** (top: 100px):
  - 큰 가격 (42px / 900 / primary 색)
  - 4행 정보 (주계약/특약/갱신/납입면제)
  - CTA 3개 (지금 가입, 가입가능 체크, 플랜에 담기)
  - 하단 AI 적합도 분석 (4축 점수 막대)

#### 05. 가입가능여부 체크 (`desktop/05-eligibility.html`)
- **Purpose**: 실명인증 후 5개사 실시간 인수 결과
- **Layout**:
  - Hero: 다크 그라데이션 (`#0f172a → #1e1b4b`) 배경, 중앙 정렬, 패딩 50px, radius 24px
  - KYC 카드: hero 위로 -50px 겹쳐서 위치 (z-index 2)
  - Step indicator (4단계): flex 1 각 단계, active 시 primary 배경
  - 폼 영역: 2-column grid (이름/주민/통신사/번호/인증번호)
  - 결과 영역: 4-column 통계 카드 + 결과 테이블
- **결과 테이블**:
  - thead: surface-2 배경, weight 700
  - 각 행: 상태 아이콘 (✓/!/✕) + 보험사·상품명 + 인수 결과 chip + 사유 + 보험료 + 액션
  - chip 컬러: ok `#d1fae5/#065f46`, warn `#fef3c7/#92400e`, no `#fee2e2/#991b1b`

#### 06. AI 추천 (`desktop/06-ai-recommend.html`)
- **Purpose**: 가중치 기반 1등 추천 + 항목별 점수 비교
- **Layout**:
  - AI Hero (그라데이션 `#1e1b4b → #0052cc → #00c7ae`, radius 24px, 패딩 50px)
    - 좌(헤드라인+메타 chip 3개) / 우(가중치 조절 슬라이더 4개)
  - **TOP1 카드**: hero 위로 -30px / accent 3px border / 큰 그림자
    - 좌측 그리드 (1.4fr 1fr):
      - 좌: 인서러 헤더 → 상품명(36px/900) → 태그 → 핵심 특약 2×2 그리드 → 추천 이유 박스
      - 우: 가격(48px/900) + 보장 가치 + 가입 CTA
  - 점수 비교 표: header(200px repeat(4, 1fr) 100px) + 5개 상품 행, no.1은 노란 배경
  - Runner up 2-column (2위·3위 카드)
  - AI 챗 reasoning (사용자/AI 버블 4개)
  - 비교 CTA 풋터
- **점수 계산**: `total = coverage*0.4 + price*0.25 + limit*0.20 + renewal*0.15` (가중치 조절 가능하게 구현 권장)
- **점수 막대**: 8px height, surface-2 배경, fill은 `linear-gradient(90deg, primary, accent)`, transition 0.6s

#### 07. 가입 프로세스 (`desktop/07-subscribe.html?cat=cancer&id=c4`)
- **Purpose**: 표준 7단계 다이렉트 청약 프로세스 (스크래핑 기반이지만 동일 UI)
- **Layout**:
  - 상품 헤더 (sticky top:72px): 아이콘 + 보험사·상품명 + 월 보험료 + 중단 버튼
  - 스텝 바 (surface-2 배경, 패딩 30px):
    - 7개 노드를 grid로 배치, 가운데 가로선 3px (`--border` → `--accent`로 진행률 fill)
    - 각 노드: 44×44 원 + 라벨
    - 상태: 미진행(연한 회색) / active(primary + 5px 외곽 shadow) / done(accent)
  - 본문 (1fr 360px): 좌 step content / 우 sticky 요약 카드
- **7단계 내용**:
  1. **약관 동의**: 전체동의 박스 + 5개 약관 row (필수 4 + 선택 1)
  2. **본인 인증**: 4-option 그리드(휴대폰/간편/신분증/금융인증서) + 폼 5필드
  3. **계약자 정보**: 2-column 폼 (성명/생년월일/이메일/휴대폰/주소/직업/운전여부)
  4. **피보험자 정보**: "계약자와 동일" 체크 + 키/몸무게/흡연/음주
  5. **건강 고지**: 5개 질문 (각 질문 = num/q/yn 가로 배치, 라디오 라벨 토글)
  6. **보장 설계**: 6개 특약 카드 (이름/설명/금액 선택 버튼들/실시간 보험료)
  7. **결제**: 납입주기/납입일/카드/계좌이체 옵션 + 카드정보
  8. **완료**: 큰 ✓ 아이콘 + 증권번호 등 6행 요약 + 마이페이지/추가가입 CTA

#### 08. 마이페이지 / 내 플랜 (`desktop/08-myplans.html`)
- **Purpose**: 저장 플랜 + 가입 보험 + 조회 내역 + 회원 설정
- **Layout**:
  - 다크 hero (1fr 360px): 좌(인사+4 stat 카드) / 우(프로필 카드)
  - 탭 4개 (저장 플랜 / 가입 보험 / 조회 내역 / 설정)
  - 각 탭 콘텐츠
- **저장 플랜 카드** (3-column grid):
  - 상단: 카테고리 chip + 삭제 아이콘
  - 상품명 (18px / 800)
  - 상품 리스트 (점선 위아래 border)
  - 메모 (노란 배경)
  - 하단: 큰 보험료 + 저장일 + 불러오기/가입 버튼

---

### 모바일 화면 (8개) — 390px 폭 기준

데스크탑과 동일한 8개 화면을 모바일에 최적화. 주요 변환 규칙:

- **2-column → 1-column**: 모든 grid 단순화
- **GNB → App Bar** (높이 60px): 뒤로가기/제목/액션 아이콘
- **카테고리 탭 → 가로 스크롤** (`overflow-x: auto`)
- **고정 하단 CTA 바**: 가입/저장/이전·다음 등 주요 액션
- **Tab Bar 하단** (5-column, 홈/상품/AI추천/내플랜/My): 메인·마이페이지 등 주요 페이지에 표시
- **모달**: 좁은 폭(340px max), 패딩 24px
- **사이즈 축소**: 헤드라인 50px → 26px, 가격 48px → 30px 등 70% 수준
- **iOS 안전 영역 고려**: 하단 padding 18px 추가 (`padding: 8px 0 18px`)

---

## Interactions & Behavior

### 글로벌 인터랙션

**카드 호버 효과**
```css
transition: 0.18~0.25s;
/* 호버 시 */
transform: translateY(-2~6px);
box-shadow: var(--shadow-md);
border-color: var(--primary-light or primary);
```

**버튼 호버**
- Primary/Accent: `transform: translateY(-1px)` + 색 진해짐 + colored shadow
- 액티브: `transform: scale(0.96~0.98)` (모바일)

**전환 애니메이션**
```css
@keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:none; } }
.fade-in { animation: fadeIn 0.4s ease-out; }

@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width:18px; height:18px; border:2.5px solid var(--border);
  border-top-color: var(--primary); border-radius:50%; animation: spin 0.8s linear infinite; }
```

### 화면별 핵심 인터랙션

**01. 메인 — 통합조회**
- "30초 통합 보험료 조회" 폼 → `localStorage`에 저장 → 카테고리 페이지로 이동

**02. 로그인**
- 소셜 버튼 클릭 → 로딩 오버레이 (1.4초) → 로그인 처리 → 홈으로 리다이렉트
- 착·착·착 연동: "기존 회원정보를 불러오는 중..." 메시지

**03. 카테고리 리스트 — 핵심 인터랙션**
- **체크박스 토글**: 선택 카드는 border `var(--primary)` + 0.12 opacity primary glow
- **정렬 버튼**: 보험료↓ / 보장넓은순 / 보험사순
- **가입가능 일괄 체크**:
  1. 실명인증 모달 (이름·주민번호·휴대폰·인증번호)
  2. 로딩 오버레이 ("5개 보험사에 가입가능 여부 조회 중...") 2.4초
  3. 각 상품의 chip이 ok/warn으로 갱신 (시뮬: 인덱스 1번만 warn)
  4. 결과 모달 표시 (전체 가입 가능 / N/M개사 가입 가능)
- **플랜 텍스트 리스트 클릭**: 첫 2개 상품 자동 선택 + 저장 모달 오픈
- **플랜 저장 모달**: 이름·메모·요약 → localStorage `easydirect_plans` 추가 → 마이페이지 리다이렉트 confirm

**04. 상품 상세**
- 약관 본문 자동 그룹화: terms 길이 / 3씩 분할 → "1. 주계약·진단비 보장" / "2. 치료·입원 관련 특약" / "3. 면책 및 부가 규정" 카테고리 헤더 자동 삽입
- 약관 값 정규식 강조: `(\d[\d,]*만원|\d+%|\d+일|...)` → `<b>` 태그로 primary 색 강조
- 우측 카드 sticky (top: 100px), scroll 따라가도록

**05. 가입가능여부**
- 진행: 폼 입력 → s1 done, s2 active → 로딩 오버레이 (KCB 인증 1.5초 → 5개사 조회 1.5초) → s3 done, s4 active → 결과 표시
- 결과 시뮬레이션: 인덱스 1번만 warn (간편형 전환 필요), 나머지 ok

**06. AI 추천**
- 가중치 슬라이더 4개 (range input, accent-color: var(--accent))
- 점수 계산: `coverage*0.4 + price*0.25 + limit*0.2 + renewal*0.15`
- 정렬 후 [0]이 TOP1, [1][2]가 runner-up
- TOP1 카드는 -30px overlap, 3px accent border, 큰 shadow

**07. 가입 프로세스**
- step 변수 (1~8) 기반 화면 전환
- step 1 다음 → 필수 약관 4개 체크 검증
- 진행 라인: `width: ${(step-1)/6 * 90}%` (가운데 가로선 fill)
- 우측 sticky 요약 카드: 보험사/상품/플랜/갱신/피보험자/합계
- 보장 설계 (step 6): 각 amount-select 버튼 그룹은 단일 선택 (one .sel 만)
- step 8 (완료): 네비게이션 버튼 hide

**08. 마이페이지**
- 탭 클릭: `data-tab` 기반 표시 토글
- 플랜 카드 삭제: confirm → `window.ED.removePlan(id)` → 재렌더
- 플랜 카드 불러오기: 해당 카테고리로 이동
- 플랜 카드 가입하기: 첫번째 상품의 가입 페이지로

### 로딩 오버레이 패턴 (재사용)

```js
const ov = document.createElement('div');
ov.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.7);' +
                   'display:flex;align-items:center;justify-content:center;' +
                   'z-index:9999;backdrop-filter:blur(6px);';
ov.innerHTML = `<div style="background:#fff;padding:36px 44px;border-radius:20px;text-align:center;">
  <div class="spinner" style="width:32px;height:32px;border-width:3px;margin:0 auto 16px;"></div>
  <div style="font-weight:700;font-size:16px;">${메시지}</div>
</div>`;
document.body.appendChild(ov);
setTimeout(() => { ov.remove(); /* 다음 단계 */ }, 1500~3000);
```

---

## State Management

### localStorage 키 4개

```ts
type StoredKey =
  | 'easydirect_plans'   // SavedPlan[]
  | 'easydirect_user'    // UserProfile
  | 'easydirect_quote'   // QuoteInput
  | 'easydirect_cart';   // CartItem[]
```

### 데이터 모델

```ts
interface SavedPlan {
  id: string;                  // 'plan_' + Date.now()
  name: string;                // 플랜 이름
  category: CategoryId;        // 'health'|'medical'|'cancer'|...
  productIds: string[];        // 상품 ID 배열
  productNames: string[];      // 보험사+상품명 합쳐진 표시용 문자열 배열
  premium: number;             // 월 합계 보험료
  memo: string;                // 사용자 메모
  createdAt: string;           // ISO date
}

interface UserProfile {
  name: string; birth: string; gender: 'M'|'F'; phone: string;
  job: string; address: string;
  loggedIn: boolean;
  provider: 'google'|'kakao'|'chacha'|null;
}

interface QuoteInput {
  birth: string; gender: 'M'|'F'; job: string;
  isSmoker: boolean; drivingYears: number; hasChild: boolean;
  address: string;
}

interface Product {
  id: string;
  insurer: string;             // '삼성화재'|'DB손해보험'|'KB손해보험'|...
  type: '생보'|'손보';
  name: string;
  premium: number;             // 월 보험료
  plan: string;                // '100세/20년납'
  renew: string;               // '비갱신'|'1년 갱신'|...
  cancer_main: string;         // 주요 보장 (필드명은 카테고리에 따라 의미 다름)
  cancer_minor: string;        // 보조 보장
  feat: string[];              // 핵심 특약 2~4개
  terms: Record<string, string>; // 약관 항목명 → 본문 (전수 표기)
  scores: {
    coverage: number;          // 0~100
    price: number;
    limit: number;
    renewal: number;
  };
}

interface Category {
  id: 'health'|'medical'|'cancer'|'driver'|'life'|'fire'|'pet'|'car';
  name: string;                // '실손보험'|'건강보험'|...
  icon: string;                // 'fa-stethoscope' 등 fontawesome 클래스
  desc: string;
  tagline: string;
}
```

### 주요 트랜잭션

1. **로그인**: `setUser({ loggedIn: true, provider })`
2. **조회 입력**: `setQuote({ birth, gender, job, address })`
3. **플랜 저장**: `savePlan({ name, category, productIds, productNames, premium, memo })` → `{ id, createdAt, ...input }` 으로 unshift
4. **플랜 삭제**: `removePlan(id)` → filter
5. **가입 시작**: `addToCart({ id, catId })` → cart에 push (중복 방지)

### 데이터 페칭 / API 인터페이스 (백엔드 구현 시)

스크래핑 컨셉이므로 백엔드는 다음 엔드포인트를 제공해야 함:

| 엔드포인트 | 메서드 | 설명 |
|---|---|---|
| `/api/insurers` | GET | 5개사 상품 카탈로그 (스크래핑 캐시) |
| `/api/products/:category` | GET | 카테고리별 상품 목록 |
| `/api/products/:category/:id/terms` | GET | 약관 본문 (보험사 원문) |
| `/api/quote/batch` | POST | 5개사 보험료 일괄 조회 (Input: 인적사항) |
| `/api/eligibility/:productId` | POST | 실명인증 + 가입가능 조회 |
| `/api/recommend` | POST | AI 점수화·추천 (Input: 가중치) |
| `/api/subscribe/:productId/start` | POST | 청약 세션 시작 → 보험사 다이렉트몰 토큰 발급 |
| `/api/subscribe/:sessionId/step` | POST | 7단계 진행 (서버사이드 보험사 청약 미러링) |

---

## Design Tokens

### Colors

```css
/* Brand */
--primary:        #0052cc;   /* 메인 브랜드, CTA, 강조 */
--primary-dark:   #003d99;   /* hover */
--primary-light:  #e6efff;   /* 배경, 활성 카드 */
--accent:         #00c7ae;   /* 보조 강조, 성공, AI */
--accent-dark:    #00a896;

/* Semantic */
--danger:         #ef4444;
--warn:           #f59e0b;
--success:        #10b981;

/* Text */
--text-1:         #0f172a;   /* 헤드라인 */
--text-2:         #334155;   /* 본문 */
--text-3:         #64748b;   /* 보조 텍스트, 캡션 */
--text-4:         #94a3b8;   /* 비활성, placeholder */

/* Surface */
--bg:             #f4f7fa;   /* 페이지 배경 */
--surface:        #ffffff;   /* 카드 */
--surface-2:      #f8fafc;   /* 카드 내부 영역, hover */
--border:         #e2e8f0;
--border-strong:  #cbd5e1;
```

### Tags / 뱃지 컬러

| 종류 | 배경 | 텍스트 |
|---|---|---|
| `tag-blue` | `#e0e7ff` | `#3730a3` |
| `tag-mint` | `#d1fae5` | `#065f46` |
| `tag-orange` | `#ffedd5` | `#9a3412` |
| `tag-red` | `#fee2e2` | `#991b1b` |
| `tag-gray` | `#f1f5f9` | `#475569` |
| `tag-life` (생보) | `#fee2e2` | `#b91c1c` |
| `tag-nonlife` (손보) | `#dbeafe` | `#1d4ed8` |

### Eligibility chips
- `elig-ok`: bg `#d1fae5` / fg `#065f46`
- `elig-pending`: bg `#fef3c7` / fg `#92400e`
- `elig-no`: bg `#fee2e2` / fg `#991b1b`

### Spacing scale

| 토큰 | 값 |
|---|---|
| xs | 4px |
| sm | 8px |
| md | 12px |
| base | 16px |
| lg | 20px |
| xl | 24px |
| 2xl | 32px |
| 3xl | 40px |
| 4xl | 60px |

컨테이너 max-width:
- 데스크탑: `1280px`
- 모바일: `390px` (디바이스 폭, 좌우 padding 16~20px)

### Typography scale (Pretendard Variable)

| 토큰 | size / weight / line-height | 용도 |
|---|---|---|
| display-1 | 50px / 900 / 1.15 | Hero h1 |
| display-2 | 38~44px / 900 / 1.2 | 페이지 h1 |
| h1 | 32px / 900 / -0.5px tracking | 페이지 타이틀 |
| h2 | 26~28px / 900 | 섹션 헤더 |
| h3 | 20~24px / 800~900 | 카드 헤더 |
| body | 14~15px / 400~500 / 1.55 | 본문 |
| caption | 12~13px / 500 | 보조 |
| micro | 11px / 600~700 | 칩, 뱃지 |
| price-xl | 42~48px / 900 | 메인 가격 |
| price-lg | 22~26px / 900 | 카드 가격 |

폰트 import:
```css
@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/PretendardVariable.woff2') format('woff2-variations');
  font-weight: 45 920;
  font-display: swap;
}
```

### Border radius

| 토큰 | 값 | 용도 |
|---|---|---|
| --r-sm | 8px | 버튼, 작은 인풋 |
| --r-md | 12px | 작은 카드 |
| --r-lg | 16px | 카드 |
| --r-xl | 24px | Hero 박스, 큰 카드 |
| 50% | - | 아이콘 원, 아바타 |
| 20~30px | - | chip / pill |

### Shadows

```css
--shadow-sm: 0 1px 2px rgba(15,23,42,0.04), 0 1px 3px rgba(15,23,42,0.06);
--shadow-md: 0 4px 6px rgba(15,23,42,0.04), 0 10px 15px -3px rgba(15,23,42,0.08);
--shadow-lg: 0 20px 25px -5px rgba(15,23,42,0.10), 0 10px 10px -5px rgba(15,23,42,0.04);

/* Hero overlap, Quote card 등 강조용 */
0 30px 60px rgba(0,0,0,0.25)
0 30px 60px -10px rgba(0,199,174,0.25)  /* TOP1 카드 */
```

### Gradients

```css
/* Hero (홈) */
linear-gradient(125deg, #0052cc 0%, #1e6ddb 45%, #00c7ae 100%);

/* AI Callout */
linear-gradient(125deg, #0f172a, #1e1b4b);

/* AI Hero (추천) */
linear-gradient(135deg, #1e1b4b 0%, #0052cc 50%, #00c7ae 100%);

/* 비교 CTA */
linear-gradient(135deg, #00c7ae, #0052cc);

/* 점수 막대 */
linear-gradient(90deg, var(--primary), var(--accent));

/* Hero 형광펜 강조 */
background: linear-gradient(transparent 60%, rgba(0,199,174,0.45) 60%);
```

---

## Assets

### 폰트
- **Pretendard Variable** (오픈소스) — `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/`

### 아이콘
- **Font Awesome 6.4.0 (Free)** — `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- 사용된 주요 아이콘:
  - 카테고리: `fa-stethoscope`, `fa-heartbeat`, `fa-ribbon`, `fa-car-crash`, `fa-cross`, `fa-house-fire`, `fa-paw`, `fa-car`
  - 액션: `fa-wand-magic-sparkles`, `fa-magnifying-glass-chart`, `fa-id-card`, `fa-bookmark`
  - 결제: `fa-credit-card`, `fa-building-columns`, `fa-mobile-screen-button`
  - 상태: `fa-circle-check`, `fa-circle-xmark`, `fa-circle-question`, `fa-shield-halved`

### 로고
- 로고는 텍스트 기반 (`EasyDirect.` + `착·착·착` 뱃지) — 별도 이미지 없음
- 개발 시 정식 SVG/이미지 로고로 교체 권장

### 이미지
- 본 디자인에는 외부 이미지/사진을 사용하지 않음 (스크래핑 컨셉상 보험사 로고는 텍스트로 표기)
- 보험사명: 삼성생명, 한화생명, 교보생명, 신한라이프, 농협생명, 삼성화재, DB손해보험, KB손해보험, 현대해상, 메리츠화재

### 데이터 (목업)
- `shared/data.js`에 5개사 × 8개 카테고리 상품 데이터 포함 (실제 보험사명·상품명 사용)
- 약관 본문도 보험업계 표준 약관 어휘를 그대로 사용 (개발 시 실제 데이터로 교체 필요)

---

## Files

핸드오프 폴더 구성:
```
design_handoff_easy_direct/
├── README.md                        # 본 문서
├── index.html                       # 16개 화면 미리보기 허브
├── shared/
│   ├── styles.css                   # 디자인 시스템 (토큰·버튼·카드·폼·테이블·모달·모바일 컴포넌트)
│   ├── data.js                      # 상품 카탈로그 (5개사 × 8 카테고리)
│   └── plan-storage.js              # localStorage 래퍼 (window.ED 객체)
├── desktop/
│   ├── 01-home.html
│   ├── 02-auth.html
│   ├── 03-category.html             # ?cat=cancer 등 query param 사용
│   ├── 04-product-detail.html       # ?cat=&id=
│   ├── 05-eligibility.html
│   ├── 06-ai-recommend.html         # ?cat=
│   ├── 07-subscribe.html            # ?cat=&id=
│   └── 08-myplans.html
└── mobile/
    ├── 01-home.html
    ├── 02-auth.html
    ├── 03-category.html
    ├── 04-product-detail.html
    ├── 05-eligibility.html
    ├── 06-ai-recommend.html
    ├── 07-subscribe.html
    └── 08-myplans.html
```

### 추천 컴포넌트 분해 (React/Vue 등)

```
components/
├── ui/
│   ├── Button.tsx               (primary | accent | outline | ghost | dark / lg | sm)
│   ├── Card.tsx                 (card-pad, card-pad-lg)
│   ├── Tag.tsx                  (blue|mint|orange|red|gray|life|nonlife)
│   ├── Field.tsx                (label + input/select/textarea)
│   ├── Modal.tsx                (backdrop + close + content)
│   ├── Spinner.tsx
│   ├── EligibilityChip.tsx      (ok|pending|no)
│   └── StepProgress.tsx         (desktop 7-step bar + mobile linear)
├── layout/
│   ├── DesktopTopbar.tsx
│   ├── DesktopGNB.tsx
│   ├── DesktopFooter.tsx
│   ├── MobileAppBar.tsx
│   └── MobileTabBar.tsx
├── home/
│   ├── HeroSection.tsx
│   ├── QuoteCard.tsx
│   ├── CategoryGrid.tsx          (data-driven from categories)
│   ├── RecommendedProductCard.tsx
│   └── AICallout.tsx
├── category/
│   ├── CategoryTabs.tsx          (가로 스크롤 모바일)
│   ├── QuoteSummaryBar.tsx
│   ├── ProductRow.tsx            (desktop) / ProductCard.tsx (mobile)
│   ├── EligibilityModal.tsx
│   ├── KYCModal.tsx
│   ├── SavePlanModal.tsx
│   └── PlanListCard.tsx          (텍스트 플랜 리스트)
├── product/
│   ├── ProductHeader.tsx
│   ├── TermsTable.tsx            (정규식 강조 포함)
│   ├── FeatureCards.tsx
│   ├── BuyCard.tsx               (sticky)
│   └── AIFitScores.tsx           (4 bars)
├── ai/
│   ├── AIHero.tsx                (gradient + weight sliders)
│   ├── Top1Card.tsx
│   ├── ScoreComparisonTable.tsx
│   ├── RunnerUpList.tsx
│   └── AIReasoningChat.tsx       (user/AI bubbles)
├── subscribe/
│   ├── SubscribeHeader.tsx       (sticky product strip)
│   ├── StepIndicator.tsx
│   ├── Step1Terms.tsx ~ Step8Done.tsx
│   ├── HealthDeclaration.tsx     (Q&A list with yes/no toggle)
│   ├── CoverageDesigner.tsx      (amount selectors with realtime premium)
│   └── SubscribeSummary.tsx      (right sticky)
└── my/
    ├── MyHero.tsx                (stats + profile)
    ├── MyTabs.tsx
    ├── SavedPlanCard.tsx
    ├── PolicyRow.tsx
    └── QuoteHistoryRow.tsx
```

### 핵심 비즈니스 로직

```ts
// AI 점수 계산
function calcAIScore(p: Product, weights = { coverage:0.4, price:0.25, limit:0.2, renewal:0.15 }) {
  return Math.round(10 * (
    p.scores.coverage * weights.coverage +
    p.scores.price    * weights.price    +
    p.scores.limit    * weights.limit    +
    p.scores.renewal  * weights.renewal
  )) / 10;
}

// 약관 정규식 강조
function highlightTerms(v: string) {
  return v.replace(
    /(\d[\d,]*만원|\d[\d,]*만|\d+%|\d+일|\d+개월|\d+회|\d+년|무한|연 \d[\d,]*만원)/g,
    '<b>$1</b>'
  );
}
```

---

## 구현 시 주의사항

1. **스크래핑 백엔드 분리**: 본 디자인은 프론트엔드만 다룸. 실제 5개 보험사 다이렉트몰의 OAuth/세션·약관 데이터 매핑·청약 미러링은 별도 백엔드(Node.js + Playwright/Puppeteer 권장) 설계 필요.
2. **약관 원문 무결성**: "한 글자도 다르지 않게 표기" — 약관 데이터는 보험사 원문을 그대로 노출. UI에서 임의로 줄이거나 가공하지 말 것.
3. **금융 규제 준수**: 가입가능여부 체크는 실명인증(KCB/NICE) 필수. 약관 동의 5종(필수 4 + 선택 1)은 금융감독원 가이드 따름.
4. **접근성**: 모든 인터랙티브 요소는 키보드 접근 가능해야 함 (radio yn 토글 등에 적절한 ARIA 속성 추가).
5. **반응형**: 데스크탑은 1280px 최적화. 1024px 이하는 모바일 화면으로 전환 권장 (또는 별도 태블릿 레이아웃 추가).
6. **다크모드**: 본 디자인은 라이트 모드 단일. 추후 다크모드 추가 시 토큰 체계는 그대로 활용 가능.

---

## 다음 단계

1. 본 핸드오프를 검토하여 구현 범위 확정
2. 백엔드 API 스펙 합의 (스크래핑 레이어 별도 작업)
3. 컴포넌트 라이브러리 결정 (예: shadcn/ui + Tailwind / Vuetify / 자체 디자인 시스템)
4. 데스크탑 우선 / 모바일 우선 / 동시 진행 결정
5. 스프린트 분배 (8개 화면 × 2 디바이스 = 16, 또는 화면 기능 단위 8개로 묶기)

문의/추가 자료 요청 시 디자인 원본 HTML 파일을 직접 열어 인스펙터로 정확한 값 확인 가능.
