const condition = true;
const promise = new Promise((resolve, reject) => {

    if(condition)
    {
        resolve('성공'); //성공한 경우 출력
    }else
    {
        reject('실패'); //실패한 경우 출력
    }
});

promise
.then((message) => {

    console.log(message);
})
.catch((error) => {

    console.log(error);
})
.finally(() => {
    console.log('무조건');
});