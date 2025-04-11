# 1단계: Build stage
FROM node:18 AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 lock 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 전체 복사
COPY . .

# React 앱 빌드
RUN npm run build

# 2단계: Serve stage (nginx 사용)
FROM nginx:alpine

# 빌드된 정적 파일을 Nginx에 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx 포트 개방
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
