// Exercice:Looping a triangle
    //first solution
    function myTriangle(linenumber){
        let linePrinter="";
        for (let i = 0; i < linenumber; i++) {
            linePrinter+= "#";
            console.log(linePrinter);
        }
        
    }    
    myTriangle(7);

    //second solution: from niko
    for (let i = 0; i <=7; i++) {
        console.log("#".repeat(i));
    }

//document.getElementById("p1").innerHTML = myTriangle;

// Exercice: FizzBuzz
    function fuzzbuzz(num){
        let printer = "";
        for (let i = 1; i <= num; i++) {
            //printer+= (isDivisibleBy3(i) && isDivisibleBy5(i))?
            if (i%3? false:true && i%5? false:true){printer+="FizzBuzz\n"; }
            else if(i%3? false:true){printer+="Fizz\n";}
            else if(i%5? false:true){printer+="Buzz\n";}
            else{printer+= i+"\n";}
        }
        console.log(printer);
    }
fuzzbuzz(100);
//document.getElementById("p2").innerHTML = printer;


// Exercice: Chessboard
function cheeseBoard(width, height){
    let printer  ="";
    for (var i = 1; i <= width; i++) {
        for (var j = 1; j <= height; j++) {
            if( (i%2) === 0)printer+= j%2 ? "#" : "*";           
            else printer+= j%2 ? "*" : "#";       
        }
        printer+="\n";
     }
    return printer
}
console.log(cheeseBoard(8,8));
//document.getElementById("p3").innerHTML = cheeseBoard(10,8);


// Exercice: 
let min = (arg1, arg2)=> arg1 < arg2 ? arg1:arg2 ;
let max = (arg1, arg2)=> arg1 > arg2 ? arg1:arg2 ;
console.log("min(9,5):", min(9,5));
console.log("max(9,5):", max(9,5));
//document.getElementById("p4").innerHTML ="max of 9 and 5 is: " + max(9,5) + "<br> minimum is: " + min(9,5);

// Exercice: Recursion
//--recursive method:
function isEven(n){
    if(n===0){return true}
    if(n===1){return false}
    if(n<0){return isEven(-n)}
    return isEven(n-2);

}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

//document.getElementById("p5").innerHTML = " 50:" + (isEven(50) && isEven(50-2)) ;


// Exercice 6
const countBs = function(myStr){
    let bcounter=0;
    myStr.split('').forEach(function(elm){
        bcounter+= elm==="B"? 1:0;
    });
    return bcounter;
}

let countChar = function(myStr, mychar, isSensitive){
    bcount=0;
    let uppStr = isSensitive? myStr:myStr.toUpperCase();
    let uppChar= isSensitive? mychar:mychar.toUpperCase();

    uppStr.split('').forEach(function(elm){
        bcount+= elm===uppChar? 1:0;
    });
    return bcount;
}

console.log("BBbBC:",countBs("BBbBC"));

console.log("AAAfghAa:",countChar("AAAfghAa","A",false));

console.log("AAAfghAa:",countChar("AAAfghAa","A",true));


//document.getElementById("p6").innerHTML ="uppercas B in thi string BBC:" +  countBs("BBC")   ;
//document.getElementById("p7").innerHTML ="uppercas S in thi string kakkKKerlak:" +  countChar("kakkKKerlak", "k");

// Exercice: The sum of a range
let range = function(start, end, step){    
    let tab=[];
    let isIncrement= start>end? false:end;
    let stopper=false;
    
    if(step=== undefined || step===null){step=1;}
    if( (start>end && step>0) || (start<end && step<0) ) step*=-1;
    if(start===end) return tab[start];

    while (!stopper) {
        tab.push(start);       
        start+=step;
        if( (isIncrement && start>end) ||(!isIncrement && start<end) ) stopper=true;
    }

    return tab;
}

let sum = function(tab){
    const reducer = (accum, initVal) => accum + initVal;
    return tab.reduce(reducer);
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(7,1,1));
// → [7, 6, 5, 4, 3, 2, 1]
console.log(sum(range(1, 10)));
// → 55
console.log(sum(range(5, 2, -1)));
// → 14

// document.getElementById("p8").innerHTML ="range(1, 10):" + range(1, 10);
// document.getElementById("p9").innerHTML ="range(1,5,-2):" + range(1,5,-2);
// document.getElementById("p10").innerHTML ="sum(range(1, 10)):" + sum(range(1, 10));
// document.getElementById("p10").innerHTML ="";


// Exercice: Reversing an array
function reverseArray(myArray){
    const revArray=[];
    myArray.forEach(function(item, index) {        
            revArray[(myArray.length-1)-index]=item;          
    });
    return revArray;
}

var reverseArrayInPlace = function (array) {
    //var arrLength = array.length;
    for (let i = 0; i < array.length; i++) {
        array.splice(i, 0, array.pop());
    }
    return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// document.getElementById("p11").innerHTML =reverseArray(["A", "B", "C"]);
// document.getElementById("p12").innerHTML =reverseArrayInPlace(arrayValue);


// Exercice 9: List
const arrayToList = function (myArray){
    const list= myArray.reverse().reduce(function(acc, item) {
        return {value:item, rest:acc};   
   }, null);
   
   return list;
}
    
const listToArray = function (list){
    let  myArray=[];
    while(typeof list === 'object'){
        myArray.push(list.value);   
        if(list.rest===null){
            break;
        }
        else{    
            list=list.rest;
        }
    }
   return myArray.reverse();
}

const prepend = function (element, list){
    
    let arr = listToArray(list);
    arr.push(element);
    return arrayToList(arr.reverse());
 }

 const nth = function (list, num){
    
    let arr = listToArray(list);
    let result = "not found";
    arr.forEach(function(element, index) {
         if(index===num){
             result=element;
         }
      });
      return result;
 }


const arr = [10, 20, 30];
console.log( arrayToList(arr));
console.log( listToArray( arrayToList(arr)));
console.log( prepend(500, arrayToList(arr)) );
console.log( nth(arrayToList(arr), 0) );


// document.getElementById("p13").innerHTML =arrayToList(arr);


// Exercice 10: Deep Comparison
let objectEquals = (val1, val2)=>{  

    //----if obj1 and obj 2 are of type Object
    if(val1 && val2 && typeof val1 === 'object' && typeof val2 === 'object'){

        // check length of key arrays
        if(Object.keys(val1).length!== Object.keys(val2).length) return false;   

        // check if keys names are same or not
        for(key in val1){
            if(key in val2){
                if( !objectEquals(val1[key], val2[key]) ){
                    return false;
                }
            }
            else return false;
        }

        return true;
    }
    
    else if(typeof val1 === "function" && typeof val2 === "function"){
        if(val1.toString() !== val2.toString()) return false;
        //else return true;
    }
    //----if obj1 and obj2 are different type Object    
    else if(val1 !== val2) return false;
    
    //---- if obj1 and obj2 are equal
    return true;   
};




let assert = {
    isTrue: function(x) {
      console.log("isTrue:",x);
    },
    isFalse: function(x) {
      console.log("isFalse:",!x);
    }
  }
  assert.isTrue(objectEquals(null,null));
  assert.isFalse(objectEquals(null,undefined));
  assert.isTrue(objectEquals({},{}));
  assert.isTrue(objectEquals({a:1,b:2},{a:1,b:2}));
  assert.isTrue(objectEquals({a:1,b:2},{b:2,a:1}));
  assert.isFalse(objectEquals({a:1,b:2},{a:1,b:3}));
  assert.isTrue(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:26}}));
  assert.isFalse(objectEquals({1:{name:"mhc",age:28}, 2:{name:"arb",age:26}},{1:{name:"mhc",age:28}, 2:{name:"arb",age:27}}));
  assert.isTrue(objectEquals({a:1,b:2,f:function(ele){}},{a:1,b:2,f:function(ele){}}));  
  assert.isFalse(objectEquals({a:1,b:2,f:function(){}},{a:1,b:2}));

// let obj1 = {here1: {is: "ani"}, here2:{is: "anii"}, object: 2};
// let obj2 = {here1: {is: "ani"}, here2:{is: "anii"}, object: 2};
//console.log(deepEqual(obj1,obj2));
// → true
// console.log(deepEqual(obj1, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj1, obj2));

