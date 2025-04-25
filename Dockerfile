# 1단계: Build stage
FROM node:18-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package.json package-lock.json* ./

# 의존성 설치
RUN npm install

# 앱 소스 복사
COPY . .

# React 앱 빌드
RUN npm run build

# 2단계: Serve stage (nginx 사용)
FROM nginx:alpine

# Nginx 설정 파일 덮어쓰기 (선택적)
# COPY nginx.conf /etc/nginx/nginx.conf

# 정적 파일 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 개방
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
