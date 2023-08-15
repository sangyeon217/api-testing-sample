API 테스팅 실습 예제 프로젝트 입니다.

# Installation

```bash
$ npm install  # package.json에 포함된 의존성 패키지 설치
$ npx playwright install  # playwright에서 지원하는 브라우저 설치
```

# Test Execution

```bash
$ npx playwright test  # 전체 테스트 수행
$ npx playwright test --grep @post  # post 어노테이션이 포함된 테스트 수행
$ npx playwright test --grep @comment  # comment 어노테이션이 포함된 테스트 수행
$ npx playwright show-report  # 가장 최근에 수행된 테스트 결과 리포트 출력
```
