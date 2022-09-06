function add1(x,y){
    return x + y;
};

const add2 = (x,y) => {
    return x + y;
};

const add3 = (x , y) => x +y;

const add4 = (x,y) => (x + y);

function not1(x)
{
    return !x;
}

const not2 = x => !x;

//출력 부분

var relationship1 = 
{
    name : 'hero',
    friends : ['nero', 'hero', 'xero'],
    logFriends : function ()
    {
        var that = this; //relationship을 가리키는 this를 that에 저장
        //각 원소들을 출력함
        //friends 의 원소들을 할당함
        this.friends.forEach(function (friend){
            console.log(that.name , friend);
        });
    },
};

relationship1.logFriends();

const relationship2 = {

    name : 'hero',
    friends : ['nero', 'hero', 'xero'],
    logFriends() {

        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
}

relationship2.logFriends();
