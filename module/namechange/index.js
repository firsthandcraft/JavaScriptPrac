//모듈문법
//이름 바꾸기  as
import { title as printerTitle,print } from "./printer.js";
import {title as memDataTitle, data as members} from './members.js';
const title="yeah"
print(title);
print(memDataTitle);
print(members);