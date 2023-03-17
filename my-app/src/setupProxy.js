const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
     // proxy가 필요한 path prameter를 입력
     ['/api2', '/api'],
    createProxyMiddleware({
      target: 'http://localhost:3070', // 타겟이 되는 api url를 입력
      changeOrigin: true, // 대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정
      router: {
        'api' : 'http://localhost:3080'
      }
    })
  );
};