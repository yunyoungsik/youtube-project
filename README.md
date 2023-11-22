# 나만의 몰아보기 유튜브 사이트 만들기
유튜브 API를 이용해서 몰아보기 사이트를 만들었습니다.

## 설치
- react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper 설치   
`npm install react-router-dom axios react-icons react-player sass react-helmet-async swiper`

## 유튜브 API
1. 유튜브 API사이트에서 API KEY를 받은 후 폴더 최상위에 .env를 만든후 API KEY를 저장한다.
2. .gitignore에 .env를 업로드 못하게 추가한다

## RAPID API
1. RAPID API사이트에 접속하여 YouTube v3에서 API를 받은 후 .env파일에 API KEY를 저장한다.
2. api.js에서 BASE_URL을 생성하여 fetchFromAPI와 options에서 간단하게 수정하여 API 이용 사이트를 바꿀 수 있도록 처리함

## postman
Postman은 API 개발을 위한 협업 및 테스트 도구 중 하나입니다. 주로 웹 API를 개발하고 테스트하는 데 사용됩니다. 이 도구를 사용하면 API 요청을 만들고 보내고, 응답을 확인하며, 테스트를 수행하고, API 문서를 작성하고 공유하는 등의 작업을 수행할 수 있습니다.
   
1. postman에 주소를 입력 `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=gmovie&key=[API_KEY]`
2. Code snippet에서 Javascript-Fetch로 코드를 받아 가공하여 api.js에 추가


## 더보기 기능
페이지 로딩 시 채널의 정보와 초기 비디오 목록을 가져옵니다. 그리고 '더보기' 버튼을 클릭하면 다음 페이지의 비디오 목록을 불러와 기존 목록에 추가하는 기능을 구현했습니다.
여러 페이지에서 채널의 비디오를 표시하기 위해 nextPageToken을 사용하고 이 토큰은 API 요청 시 다음 페이지의 데이터를 가져오는 데 사용됩니다.
   
loadMoreVideos 함수는 nextPageToken이 있을 때만 새로운 비디오 데이터를 불러와 기존 목록에 추가합니다. fetchFromAPI를 사용하여 다음 페이지의 비디오를 가져온 후 이를 기존 비디오 목록과 병합합니다.
   
이렇게 하면 사용자가 '더보기' 버튼을 클릭할 때마다 새로운 페이지의 비디오가 로드되어 화면에 추가되며, 사용자는 끊김없이 콘텐츠를 둘러볼 수 있게 됩니다.

## Suspense, lazy
Suspense와 lazy는 React의 두 가지 기능으로, 코드 스플리팅을 통해 애플리케이션의 성능을 향상시키는 데 도움을 주는 기능입니다.
   
- Suspense: 이 기능은 React에서 비동기적으로 렌더링된 컴포넌트의 로딩 상태를 관리하는 데 사용됩니다. Suspense 컴포넌트는 로딩 중인 컴포넌트가 준비될 때까지 대체 콘텐츠를 표시합니다. 이것은 특히 lazy와 함께 사용될 때 비동기적으로 불러오는 컴포넌트의 로딩을 처리하는 데 유용합니다.
   
- lazy: 이 기능은 동적 import()를 통해 코드 스플리팅을 가능하게 합니다. 즉, 애플리케이션의 크기를 줄이고 초기 로딩 시간을 단축하기 위해 컴포넌트를 필요한 시점에 로드합니다. lazy 함수는 동적으로 import된 컴포넌트를 반환하며, 이는 Suspense와 함께 사용될 때 비동기적 로딩을 처리하는 데 도움이 됩니다.
   
App.js에 lazy 함수를 사용하여 각 페이지 컴포넌트를 비동기적으로 불러오고, Suspense 컴포넌트로 감싸서 이들이 로딩될 때까지 `<Main />` 컴포넌트를 fallback으로 보여줍니다. 이 방식을 통해 초기 로딩 시간을 최적화하고 필요한 페이지 컴포넌트를 필요할 때 로드할 수 있도록 합니다.
   
즉, lazy는 컴포넌트를 동적으로 불러오는 데 사용되고, Suspense는 이러한 비동기적 로딩 상태를 관리하여 사용자 경험을 향상시키는 데 도움을 줍니다.

## SEO
react-helmet-async 라이브러리는 React 애플리케이션에서 동적으로 HTML `<head>` 요소를 관리하기 위한 도구입니다. 이 라이브러리의 HelmetProvider와 Helmet 컴포넌트는 페이지의 `<head>` 내부에 있는 메타데이터를 조작하고 제어하는 데 사용됩니다.
   
- HelmetProvider: HelmetProvider는 react-helmet-async 라이브러리의 컨텍스트를 제공합니다. 이를 통해 Helmet 컴포넌트들이 애플리케이션 내에서 동적으로 `<head>` 요소를 조작할 수 있도록 합니다. 주로 최상위 레벨에서 애플리케이션을 감싸 사용됩니다.

- Helmet: Helmet은 `<head>` 요소 안의 정보를 조작할 수 있게 해주는 컴포넌트입니다. 페이지 제목(title), 메타 태그(meta tags), 스타일시트 링크, 스크립트 등 `<head>` 안의 요소들을 동적으로 변경하거나 추가할 수 있습니다. title, meta, link, script 등을 설정하여 해당 정보를 동적으로 변경할 수 있습니다.

Main.jsx에 적용된 코드에서는 HelmetProvider로 전체 앱을 감싸고 있으며, Helmet 컴포넌트를 사용하여 페이지의 제목, 기본 타이틀, 메타 태그(description) 등을 동적으로 조작하고 있습니다. 또한, props.children을 사용하여 Main 컴포넌트로 전달된 다른 컴포넌트들을 표시하고 있습니다.
   
이렇게 함으로써 각 페이지마다 다른 제목이나 메타데이터를 설정하고, `<head>` 요소를 동적으로 조작하여 SEO 및 페이지의 메타정보를 관리할 수 있습니다.
   
## 검색
Search 컴포넌트를 사용하여 검색을 처리합니다. 사용자가 검색어를 입력하면 그에 따라 URL을 변경하여 새로운 경로로 이동하고 검색 결과를 표시합니다.
   
컴포넌트에서 상태값 searchKeyword를 사용하여 사용자가 입력한 검색어를 추적하고, setSearchKeyword를 통해 이 값을 변경합니다.
   
handleSearch 함수는 검색어가 있을 때만 URL을 변경하도록 구현되어 있습니다. 검색어가 비어 있지 않으면 useNavigate hook을 사용하여 React Router의 navigate 함수를 호출하여 새로운 경로로 이동합니다. 그 후에 검색어 상태를 초기화하여 빈 문자열로 설정하여 사용자가 새로운 검색을 할 수 있도록 합니다.
   
또한, Enter 키를 누르면 검색어를 가지고 handleSearch 함수가 호출되도록 onKeyDown 이벤트도 구현되어 있습니다. 이렇게 하면 사용자가 텍스트 입력 후 엔터를 누르거나 버튼을 클릭하여 검색할 수 있습니다.
   
결론적으로, 사용자가 검색어를 입력하면 해당 검색어로 새로운 경로로 이동하고, 검색 결과를 표시합니다.
