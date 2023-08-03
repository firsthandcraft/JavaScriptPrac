//coderunner // ctr+alt+n
//------------------ 
//fetch는 비동기로 네트워크를 할떄 하는데
//예전에는 원격api로 할때 jquery, request,axois 썼지만 최근에는fetch로 한다. 
//node.js에서는 fetch 함수를 사용할수 없다. explore 에서도 fetch함수를 지원하지 않는다.그리만explore는 망함
fetch
window.fetch
//=>ƒ fetch() { [native code] } 라고 크롬 콘솔에 나온다.
//------------------
window.fetch('API')
/*Promise {<pending>}
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
Response * 가 나온다.*/
//------------------
//반환된 promise 객체를 얻는다. then메소드로 부터 응답 객체를 얻을 수 있다.
fetch('API').then(res => console.log(res))
/**Response {type: 'basic', url: 'https://www.daleseo.com/js-window-fetch/API', redirected: false, status: 404, ok: false, …}body: (...)bodyUsed: falseheaders: Headers {}ok: falseredirected: falsestatus: 404statusText: ""type: "basic"url: "https://www.daleseo.com/js-window-fetch/API"[[Prototype]]: Response */
// fetch 안에 'API'는 인터넷에 없어서 404not found가 나온다.
//------------------
//get 방식 api 호출
fetch('https://jsonplaceholder.typicode.com/posts/1')
//fetch 함수는 defalut get 방식으로 요청된다.
//------------------
//then 으로 응답 객체 접근하기
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res))
//Promise {<pending>}
/**Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts/1', redirected: false, status: 200, ok: true, …}
body 바디속성은 문자열이 아닌 스트링객체로 나온다. 
: 
ReadableStream
locked
: 
false
[[Prototype]]
: 
ReadableStream
bodyUsed
: 
false
headers
: 
Headers {}
ok
: 
true
redirected
: 
false
status
: 
200
statusText
: 
""
type
: 
"cors"
url
: 
"https://jsonplaceholder.typicode.com/posts/1"
[[Prototype]]
: 
Response */
//------------------
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res.body))
// Promise {<pending>}
// VM798:2 ReadableStream {locked: false}
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res.json()))
// Promise {<pending>} 프로미스 객체를 반환한다.
//ReadableStream {locked: false} body 속성은 문자열이 아닌 스트림 객체이다. 
//------------------스트림 객체를 json으로 볼수잇게 하기 
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json()) 
  .then(data => console.log(data))
// 프로미스 객체와 data를 보여주는 데이터를 볼수 있다.
//json 반환할때 는 promise로 반환이 되어 .then(data => console.log(data))를 써야한다.
/** Promise {<pending>}
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
undefined

그레고 도 나온 결과 홤녀 
{userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
body
: 
"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
id
: 
1
title
: 
"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
userId
: 
1
[[Prototype]]
: 
Object
*/

//post 방식으로 api 호출하기 
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body : JSON.stringify({
        title:'foo',
        body :'bar',
        userId:1,
    })
})
//지금 새데이터를 넣었다. 데이터는 반드시 문자열로 변환후 넣기 ''안에 넣기
.then(res => console.log(res))
/**Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
undefined
VM1097:12 
Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/posts', redirected: false, status: 201, ok: true, …}
body
: 
(...)
bodyUsed
: 
false
headers
: 
Headers {}
ok
: 
true
redirected
: 
false
status
: 
201
statusText
: 
""
type
: 
"cors"
url
: 
"https://jsonplaceholder.typicode.com/posts"
[[Prototype]]
: 
Response */





  //하면 fetch가 실행되고 request를 보내고 객체를 리턴한다 그객체의then을 가져온다. ((response) => response.text())는 콜백인데 서버로부터 response를 받았을때 실행된다.
  //=------------------
  //json으로 보기 
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {'Content-Type':'application/json'},
    body : JSON.stringify({
        title:'foo',
        body :'bar',
        userId:1,
    })
})
.then(res => res.json())
.then(data => console.log(data))
/**
 * Promise {<pending>}
[[Prototype]]
: 
Promise
catch
: 
ƒ catch()
constructor
: 
ƒ Promise()
finally
: 
ƒ finally()
then
: 
ƒ then()
Symbol(Symbol.toStringTag)
: 
"Promise"
[[Prototype]]
: 
Object
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
Object
body
: 
"bar"
id
: 
101
title
: 
"foo"
userId
: 
1
[[Prototype]]
: 
Object
 */
/**{title: 'foo', body: 'bar', userId: 1, id: 101}
body
: 
"bar"
id
: 
101
title
: 
"foo"
userId
: 
1
[[Prototype]]
: 
Object */

//fetch 함수에 대해 
console.log('start');//1번으로 실행되고 
fetch('https;//jsonplacehilder.typicode.com/users')//3번째로 실행된다. - 비동기 실행이다.
.then((response) => response.text())
.then((result) => {console.log(result);});
console.log('End');//2번째로 실행되고

