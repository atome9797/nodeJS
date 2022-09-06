var sayNode = function()
{
    console.log('Node');
};

var es = "ES";
var oldObject = {

    sayJS : function(){

        console.log('JS');
    },
    sayNode : sayNode,
}

oldObject[es + 6] = 'Fantastic';

//출력 부분
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

//다른 방법

const newObject = {

    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]: "Fantastic",
};

//출력 부분
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);