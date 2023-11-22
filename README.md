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
1. button에 `onClick={handleLoadaMore}`를 사용
2. const = 

## Suspense, lazy

## SEO

## 검색
