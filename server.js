// 필요한 모듈 가져오기
const express = require('express');
const app = express();
const port = 3000;

// 정적 파일을 서비스하기 위한 미들웨어 설정
app.use(express.static('public'));

// POST 요청의 본문 파싱을 위한 미들웨어 설정
app.use(express.urlencoded({ extended: true }));

// GET 요청 처리
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// POST 요청 처리
app.post('/submit', (req, res) => {
  const userInput = req.body.userInput;
  console.log('사용자 입력:', userInput);
  res.send('입력한 내용은 콘솔에 출력되었습니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
