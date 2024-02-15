# weview-review

## 프로젝트 시작 가이드

먼저 `pnpm`과 `docker/docker-compose`를 설치가 선행되어야 합니다.  
알아서 설치하시면 됩니다~

### 1. 패키지 다운로드 및 docker container 띄우기

```
pnpm install

docker-compose up -d --build
```

- `pnpm install`: 패키지를 다운 받습니다.
- `docker-compose up -d --build`: docker를 통해 `nextjs app`과 `postgresql` 컨테이너를 올립니다.

docker로 올린 `nextjs app`은 포트를 4000번으로 열었습니다.(`localhost:4000`)  
가끔 `pnpm dev`를 해야할 필요가 있기 때문에 포트 충돌을 고려해 4000번으로 열었습니다.  
DB 동기화와 같은 문제가 계속 발생하고 해결하기 귀찮다면 `pnpm dev`로 작업해도 됩니다.

> docker로 올린 컨테이너들은 어디에서 작업하든 모든 작업자와 개발환경이 완전히 동일하기 때문에 4000번에서 작업하는 것을 추천합니다~

### 2. DB 기본 셋팅

```
pnpm prisma db push
pnpm prisma db generate
```

- `pnpm prisma db push`: `prisma/schema.prisma` 파일을 토대로 DB 스키마를 만들어줍니다.
- `pnpm prisma db generate`: `prisma/schema.prisma` 파일을 토대로 작업 환경을 만들어줍니다.

```
pnpm prisma db seed
```

해당 옵션은 DB에 dummy data를 넣기 위한 명령어 입니다.  
현재는 옵션이 별로 없지만, 추후에 개발환경을 원할하게 하기 위해 추가 작성할 예정입니다.

> `prisma/seed.ts` 파일 참조

---

## 컴포넌트 생성 가이드

Plopjs 사용하여 Component, Provider, Hook 등 요소들을 자동으로 생성 할 수 있습니다.  
템플릿 양식은 `.plop/templates` 파일을 참고하여 수정하여 사용할 수 있습니다.

### 사용방법

```
pnpm generate
```

이후에 나오는 옵션들을 적절히 선택하여 요소를 `Boilerplate Code`와 `Convention`을 포함하여 생성할 수 있습니다.

> 추후 Store slice, Provider, Hook 등 추가 예정
