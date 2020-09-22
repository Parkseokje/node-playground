# Node.js

## Node란?

Node (또는 더 공식적으로는 Node.js) 는 오픈소스, 크로스 플랫폼이며, 개발자가 모든 종류의 서버 사이드 도구들과 어플리케이션을 JavaScript로 만들수 있도록 해주는 런타임 환경입니다.

### 특징

- Node는 싱글 스레드(서버에 모든 요청이 별도의 프로세스로 생성되지 않고 동일한 스레드에서 실행) 이벤트 기반 환경
- 속도와 서버 리소스 측면에서 아주 효율적이지만, 만약 특정 함수가 완료되는데에 오랜 시간이 걸리는 동기 메서드를 호출하는 함수가 있다면 현재 요청 뿐만 아니라 웹 어플리케이션에서 다른 요청이 처리되는 것도 차단

## Express란?

Express 는 가장 인기있는 Node 웹 프레임워크이며, 다른 많은 인기있는 Node web frameworks의 기본 라이브러리 입니다.

### 특징

- 대부분의 앱은 쿠키, 세션, 사용자 인증, POST요청 및 JSON 데이터 접근, logging 등과 같은 일반적인 웹 개발 작업을 단순화하기 위해서드파티 미들웨어를 사용

## 참고할 문서

- [MDN - Express/Node 소개](https://developer.mozilla.org/ko/docs/Learn/Server-side/Express_Nodejs/Introduction)
- [Express](https://expressjs.com/ko/)
- [Git extension - hub](https://hub.github.com/)
