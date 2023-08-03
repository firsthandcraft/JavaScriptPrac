//모듈문법
//이름 바꾸기  as
// import { title as printerTitle,print } from "./printer.js";
// import * as printerJs from "./printer.js";
import printerJs from "./printer.js";
import {
    default as a,
    title as memDataTitle, data as members} from './members.js';
    //또는 중괄호 밖에 사용해도 된다. 
    // import a,{
    //     title as memDataTitle, data as members} from './members.js';
const title="yeah"
console.log(printerJS.title);
printerJS.print(memDataTitle);
print(members);