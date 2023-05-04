### express

express 설치는 --save -dev 가 아니고 --save 만 한다

참고로 이 두가지의 차이는 개발자 디펜던시로 들어가냐 프로덕션 디펜던시에도 넣냐의 차이인데

express 는 응용 프로그램의 필수적인것이라서 그렇게 넣는다고 한다.

알고는 있는데 뭐 아직까지 분리가 원활하지는 않다.

```js
const express = require("express");

const app = express();

const server = http.createServer(app);


app.use() 로 미들웨어 함수를 추가 사용 가능



app.use((req,res,next)=>{
console.log('h1'))

next 는 express.js 에 의해 전달될 함수

app.use((req,res,next)=>{
console.log('h1'))


app.use((req,res,next)=>{
console.log('h2'))


를 실행시키면 h2 는 찍히지않는다 여기서 쓰는게 next()

app.use((req,res,next)=>{
console.log('h1')
next()) // 다음 미들웨어와 연결해준다.


app.use((req,res,next)=>{
console.log('h1')
next()})


app.use((req,res,next)=>{
console.log('h1')
res.send('<h1>Hello from express</h1>')})

예전엔 setHeader / write 등등을 썼다면 이렇게 쉽게 작성이 가능하다

알아서 Content-Type 이 text/html 로 되고


```

### route

```js
app.use('/'(req,res,next)=>{
res.send(<h1>h1</h1>)
})

app.use('/test'(req,res,next)=>{
res.send(<h1>h1</h1>)
})

js 에서라면 이 코드는 둘이상의 응답을 보냄으로 작동하지 않는 오류가 발생하지만

미들웨어의 파워로 그런것은없다

app.listen(3000)
하면 안에 const server 랑 다 들어있음


아 나는 왜 안되나했더니 순서가 틀렸네

경로 순서를 잘 적어야된다.. 꼭 나와야되는것부터 맨위에다가 안그러면 안나옴

위의 경우는 test 먼저 위로 올려야됨 안그러면 잠만 next 쓰면 해결되지않나

아 되네 어제 뭐했던거지 꼭 순서를 맞춰줘야된다고만 생각했네 근데 순서를 맞추는게 맞는게 결국 맨위에 거쳐서 가기때문에 최소한으로 거쳐가려면 맞는것같다




```

### body parsing

이전에는 buffer 라는것을 써서 했었다

```js

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("d");
  next();
});


app.use("/", (req, res, next) => {
  res.send("<form action=url method=POST><input type=text name=url></input><button>click</button></form>");
});

app.use("/url", (req, res, next) => {
console.log(req.body) // undefiend = req 구문 분석을 시도하지않음 파싱해야됨
  res.redirect("/");
});

app.listen(3000);


redirect("/") 로 쉽게 리다이렉트 가능;
아무튼 body parsing 을위해

npm install --save body-parser
를 깔아주고


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //이제 이것은 가능한 모든 종류의 본문, 파일, json 등을 구문 분석하지 않지만 본문을 구문 분석합니다.body-parser 를 플러그인 시켰다고 표현하네

이런식으로 플러그인 시키면 그 뒤로 바디는 알아서 분석되는듯


이제 이전처럼 값을 button 으로 날린 값을 가져올수있음
{key:value}
형태로

```

여기까지의 내가 쓴 전체코드

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
  console.log('d');
  next();
});

app.use('/url', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send(
    '<form action=/url method=POST><input type=text name=url></input><button>click</button></form>',
  );
});

app.listen(3000);
```

뭔가 전에도 느꼈는데 리액트 같은걸로 value 받아올때는

form 태그에 액션이나 인풋타임에 네임 뭐 네임은 나름 활용을 한적이있지만 이런 html 속성들을 사용하는것도 나름 좀 신기했다 감상을 지금 적기엔 이미 몇번 느낌 감상이긴 한데 새삼 기록해본다
