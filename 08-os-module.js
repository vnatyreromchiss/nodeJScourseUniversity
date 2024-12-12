import {
  userInfo,
  uptime,
  type,
  release as _release,
  totalmem,
  freemem,
} from "os";

const user = userInfo();
console.log(user);

console.log(`The System Uptime is ${uptime()} seconds`);

const currentOS = {
  name: type(),
  release: _release(),
  totalMem: totalmem(),
  freeMem: freemem(),
};
console.log(currentOS);
