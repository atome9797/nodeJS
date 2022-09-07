
//이벤트를 할당하면서 실행함 
const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);


const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다.');
} , 3000);

setTimeout(() => {
    clearTimeout(timeout2);  //2.5초에 삭제했기 때문에 실행안함
    clearInterval(interval); //2.5초에 삭제하기 때문에 2번실행함
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});


clearImmediate(immediate2);