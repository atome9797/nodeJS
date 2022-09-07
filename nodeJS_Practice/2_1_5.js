var candyMachine2 = {

    status :{
        name : 'node',
        count : 5,
    },
    getCandy : function ()
    {
        this.status.count--;
        return this.status.count;
    },
};

candyMachine2.getCandy();
var count2 = candyMachine2.status.count;
console.log(count2);

var candyMachine = {
	status : {
    	name : 'node',
        count : 5,
    },
    getCandy() {
    	this.status.count--;
    	return this.status.count;
    },
}

const { getCandy, status: { count } } = candyMachine;
console.log(count); // 여전히 4가 된다.
getCandy.call(candyMachine); //이렇게 호출하면 this를 찾지 못한다


