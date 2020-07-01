/*const fs = require('fs');

for (let i = 0; i < 20; i++) {
    fs.readFile('codecamp.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  
    fs.readFile('codecamp1.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  }
console.log("Reading file...")
////////////////////////////////////
function addSync(a, b) {
  return a + b;
}
function add(a, b, callbackFunction) {
  callbackFunction( null, a + b );
}

let sum2;
add(1, 2, (err, returnValue) => {
  sum2 = returnValue;
});
let sum = addSync(1,2);
console.log(sum,"addsync");
console.log(sum2,"add");
///////////////////////////////////////
function add(a, b, callbackFunction) {
  callbackFunction( null, a + b );
  return true;
}
let sum2;
let result = add(1, 2, function(err, returnValue){
  sum2 = returnValue;
});
////////////await//////////////////////////////////

function setTimeoutAndLog(input, millisec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(input)
      resolve()
    }, millisec)
  }).then(() => {
    if(input == "c")
    console.log("ccc");
  });
}
async function setTimeoutABCD() { //ถ้าไม่ใส่ async จะทำพร้อมกัน
  await setTimeoutAndLog('a', 1000)
  await setTimeoutAndLog('b', 1000)
  await setTimeoutAndLog('c', 1000)
  await setTimeoutAndLog('d', 1000)
  // Promise.all([setTimeoutAndLog('a', 1000), setTimeoutAndLog('a', 1000)]); ทำพร้อมกัน
}
setTimeoutABCD()
////////////////////////////////
const fetch = require('node-fetch');
async function getUser () {
  try {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    console.log(response.status)
    console.log(data)
  } catch (err) {
    console.log(err)
  }
 }
 (async() => {
   getUser()
 })();*/