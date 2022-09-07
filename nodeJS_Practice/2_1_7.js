const condition = true;
const promise = new Promise((resolve, reject) => {
                            //resolve, reject는 반환값을 의미 
    if(condition)
    {
        resolve('성공'); //성공한 경우 출력
    }else
    {
        reject('실패'); //실패한 경우 출력
    }
});

//promise는 실행은 바로 하되 결과값은 나중에 받는 객체이다.
//결과값은 then이나 catch메서드를 통해 받는다.
//결과값은 then을 붙였을때 받게된다.
promise
.then((message) => {
    return new Promise((resolve, reject) => {
        resolve(message);
    });
})
.then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
        resolve(message2);
    });
})
.then((message3) => {
    console.log(message3);
})
.catch((error) => {

    console.log(error);
})
.finally(() => {
    console.log('무조건');
});




function findAndSaveUser2(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({gender: 'm'});
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}