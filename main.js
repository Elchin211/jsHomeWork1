// var cariYas=27;
// var olumYasi=90;
// var qidalanmaSayi=2;

// var qalanOmur=olumYasi-cariYas;
// var umumiEhtiyac=qalanOmur*365*qidalanmaSayi;


// console.log('You will need'+" "+ umumiEhtiyac+" "+'to last you until the ripe old age of'+olumYasi);


// var language="az";



// if (language=="en") {
//     console.log("Hello World");
// }
// else if(language=="ru"){
//     console.log('Привет, мир')
// }
// else if(language=="az"){
//     console.log("Salam Dunya")
// }


// var point=81;

// if(point>=81){
//     console.log("A");
// }
// else if (point>70 && point<=80) {
//     console.log("B")
// }
// else if (point>60 && point<=70) {
//     console.log("C");
// }

// else if (point>50 && point<=60) {
//     console.log("D");
// }

// else if (point>30 && point<=50) {
//     console.log("E");
// }



// var noun="Cat"
// var number=2;

// if (number>1)
// {
//     console.log(number+""+noun+"s");
// }
// else if (number<2) {
//      console.log(number+""+noun)
// }


// var person=prompt("Who's there")

// if (person=="Cancel") 
//     {
//      console.log("canceld")
//     }
// else if(person=="Admin")
//     {

//         var password=prompt("Enter Passwor")

//         if (password=="cancel") {
//             console.log("Cancelled");
//         }
//         else if(password=="1234")
//         {
//             console.log("Hello Admin");
//         }
//         else{
//             console.log("Wrong Passwor");
//         }
//     }

// else
// {
//     console.log("i don't know you");
// }


// var arr1=[1,2,3]
// var arr2=[4,5,6]

// var arr3=arr1.concat(arr2)

// console.log(arr3);



// var elementCount=4;
// var element =11;


// var result = new Array(elementCount).fill(element);

// console.log(result);


 
// var elementCount=4;
// var element =11;

// var newArray=[];

// newArray.push(element);
// newArray.push(element);
// newArray.push(element);
// newArray.push(element);

// console.log(newArray);


// var arry=[1,2,3,[4],[5],6,[7]]

// var newArray=arry.flat(3)


// console.log(newArray);


// var list1=[7,9,1,3];
// var list2=[[1],3]


// console.log(list1.slice(0,1)[0]);

// console.log(list2.slice(0,1)[0]);


// var  studentList=["John","Marry","Ali","Sphia"]
// var studentName="John"
// if (studentList.includes(studentName)) {
//     console.log($(studentName)+" is Student");
// }
// else
// {
//       console.log($(studentName)+" is not Student");
// }



// var list=[9,9,9,4,6,2];
// console.log(list.join('-'));

// let name="John Doe"
// let bigger=name.toUpperCase()
// console.log(bigger);

// let greeting="Hello,how are you?";
// let greetingLength=greeting.length;
// console.log(greetingLength);


// let weather="Today is a sunny day"
// let result=weather.replace("sunny","rainy")
// console.log(result);

// let message="Hello world!";
// let messageSplit=message.split(" ");
// let result=messageSplit[1].slice(0,-1);
// console.log(result);\


// let fruits=["appple","banana","mango"]
// fruits.push("grape");
// console.log(fruits);


// let colors=["red","blue","yellow"];
// let result=colors.includes("green");
// console.log(result);

// let firstName=["Nurlan","Elcin"]
// let lastName=["Shukurov","Nuriyev"]
// let ArrayJoin=firstName.concat(lastName);
// console.log(ArrayJoin);

// let fruits=["appple","banana","mango"];
// let result=fruits.indexOf("banana");
// console.log(result);


// let Name="Javacript";
// let Namereverse=Name.split('').reverse().join("");
// console.log(Namereverse);
// let numbers=[1,2,3,4]


// function sumArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// console.log(sumArray[1,2,3,4]);

// function muqayiseEt(params) {
//     let arrMax=params[0];
//     for (let i = 0; i < params.length; i++) {
//         if (params[i]>arrMax) {
//             arrMax=params[i]
//         }
//     }

//     return arrMax;
// }

// console.log(muqayiseEt([1,3,5,8]))

// function reverse(x) {

//     let ters="";

//     for (let i = x.length-1; i >=0; i--) {

//          ters+=x[i];        
//     }
//     return ters
// }

// console.log(reverse("Azerbaycan"));


// function countVowels(params) {
//     let count=0;
//     Vowels="aıoueəiöü"

//     for (let i = 0; i < params.length; i++) {
//        if (Vowels.includes(params[i].toLowerCase())) 
//        {
//             count++;
//        }
        
//     }
//     return count;
    
// }

// console.log(countVowels('ülviyyə'));




// function PrintOdd(params) {
//     let PrintOdd="";
//   for (let i = 1; i <= params; i++) {
//       if (i%2==0) {
//         PrintOdd=PrintOdd+"  "+i;
//       }
//   }
//   return PrintOdd;
// }

// console.log(PrintOdd(50));


// function Sum(params) {
//     let sum=0;
//     let str=params.toString();
//  for (let i=0; i<str.length; i++) 
//      {
//         sum+=Number(str[i]);
//      }
//    return sum ;   
// }

// console.log(Sum(157));


// function multiplicationTable (params) {
//     for (let i = 1; i <=10; i++) {
      
//        console.log( params+"*"+ i+ "="+(params*i));
       
//     }
// }
// multiplicationTable(5);


// function fizbuzz(p) {
//     for (let i = 1; i<= p; i++) {
//         if (i%3==0 && i%5==0 ) {
//             console.log("FizzBuzz")
//         }
        
//        else if (i%3==0) {
//             console.log("Fizz");
//         }

//         else if (i%5==0) {
//             console.log("Buzz")
//         }

//         else{
//             console.log(i);
            
//         }
        
//     }
// }

// fizbuzz(15);


// function calculateAvarage(params){
//     let sum=0;
//    for (let i = 0; i<params.length; i++) {
//       sum+=params[i];
//     }
//     let average=sum/params.length;
//     console.log(average);
// }
// console.log(calculateAvarage([2,4,6,9]));


// function  check(params){
//  if (params%2==0) {
//    console.log("Daxil etdiyiniz eded ve ya reqem cutdur");
//    return true
       
//  }
//  else { 
//     if (params%2 !==0)
//       console.log("Daxil etdiyiniz eded ve ya reqem Tekdir");
//       return false 
//  }
  
// }

// console.log(check(12));



// function celsiustoFahrenheit(params){
//    let fahrenHeit=(params*9/5)+32;
//    return fahrenHeit;
   
// }

// console.log(celsiustoFahrenheit(100));


// function findmin(params) {
//     let min=params[0];
//     for (let i = 0; i < params.length; i++) {
//         if (min>params[i]) {
//             min=params[i]
//         }
        
//     }
//     return min
// }

// console.log(findmin([4,2,6,5,1,10,20]));


// function findmax(params) {
//     let max=params[0];
//     for (let i = 0; i < params.length; i++) {
//         if (max<params[i]) {
//             max=params[i]
//         }
        
//     }
//     return max
// }

// console.log(findmax([4,2,6,5,1,10,20]));

// function removeDuplicates(params) { 
//     let newArray=[];
//     for (let i = 0; i < params.length; i++) {
//       if (!newArray.includes(params[i]))

//          {         
//             newArray.push(params[i])
//          }
       
// }

//   return newArray
// }
// console.log(removeDuplicates([2,2,1,4,5,6,7,8,4,9,0]));

// function countChar(str,symbol) {
//     let  count =0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i]==symbol) {
//         count++
//       }
//     }
//     return count;
// }

// console.log(countChar('Azerbyacan','A'));


// function printRevers(params) {
//     for (let i = params; i>=1; i-- ){
//        console.log(i);
//     }
// }


// console.log(printRevers(10));


// function findIndexs(array,index) {
//     for (let i=0; i <array.length; i++) {
//         if (array[i]===index){
//             return i;
//         }
//         return -1
//     }
// }


// console.log(findIndexs([1,2,3,4,5],5));


// function getrandomElement(array) {
//     let randoNum =Math.floor(Math.random())*array.length;
//     return  array[randoNum]

// }

// console.log(getrandomElement(["alma","armud","nar"]));



// function square(params) {

//     let result=Math.sqrt(params);
//     return result
    
// }


// console.log(square(25))


// function power(a,b) {
//   let result=Math.pow(a,b)
//   return result
// }


// console.log(power(5,2));


// function A(){
//         console.log("Salam A");

// }

// var elements=[1,2,3,4,"bro",5,"student",[1,2,5],null,undefined,A]

// var arraydakiFn=elements[10]

// arraydakiFn();

// function  printNumber(x) {
//    console.log(x) 
// }

// function performation(number,callback)
// {
//     callback(number)
// }

// performation(5,printNumber)

// function doubleNumbers(x) {
//     return x*2
// }
// function transformArray(array,callback) {
//     let newArray=[];
//     for (let i = 0; i < array.length; i++) {
//        newArray.push(callback(array[i]));
//     }
//  return  newArray
// } 



// let result=transformArray([1,2,3,4],doubleNumbers);

// console.log(result);




// function odd(x) {
//    return x % 2 ===0
// }
// function filterArray(arr,callback) {
//     let newArray=[];
//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i])) {
            
//             newArray.push((arr[i]));
//         }
//     }
//  return  newArray
// } 



// let result=filterArray([1,2,3,4],odd);

// console.log(result);


// function dvide(num1,num2) {
//     if (num1%num2===0) {
//         return true
//     }

//     else
//     {
//         return false
//     }
// }

// function divideNumbers(num1,num2,callback) {

//   return callback(num1,num2);
 
// }


// let result=divideNumbers(5,10,dvide)

// console.log(result)

// let list=[2,4,6,8]

// let result=list.map(function(e) {
//     return e*e
// })

// console.log(result);

// let list=[2,4,6,8]


// let mulitiple=list.forEach(function(num) {
//     console.log(num*2)
// })


// let list=[2,4,5,7,9,6,8]

// let evenNumber=list.filter(function(num) {
    
//     return num%2==0
// })

// console.log(evenNumber);


// let list=[2,4,5,7,9,6,8];


// let sum =list.reduce(function (num,sum) {
//     return num+sum
// },0)

// console.log(sum);


// let list=[2,-4,5,-7,9,6,8];


//  let result=list.some(function(num) {
//     return num<0
//  })


//  console.log(result);
 

//   let result1=list.every(function(num) {
//     return num<0
//  })


//  console.log(result1)

// function boolToWord(bool){
//    if(bool)
//    {
//     return "Yes"
//    }

//    else{
//     return "No"
//    }
// }

// console.log(boolToWord(false));



// function findNeedle(params) {
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] === "needle") {
//             return "found the neddle at position"+ " " + i 
//         }
//     }

// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


// function foo(){
//     console.log("Foo");
//     function bar() {
//         console.log("Bar")
//     }

//     return bar
// }

// let netice= foo()

// netice()

// function arrayplusArray(arr1,arr2)
// {  

//     let sum=0;

//     for (let i = 0; i < arr1.length; i++) {

//         for (let j = 0; j < arr2.length; j++) {

//             if (i==j) {
//                 sum+=arr1[i]+arr2[j]
//             }
            
//         }
//     }
//        return sum
// }


// function getAverage(marks){
//    let total=0
//     for (let i = 0; i < marks.length; i++) {
//        total+= marks[i];
//     }

//     return Math.floor(total/marks.length)
// }




// const reverseSeq = n => {
//   let newArray=[];
//   for (let i =n ; i >=1; i--) {
//        newArray.push(i)    
//   }
//   return newArray
// };

// console.log(reverseSeq(5));




// function getDrinkByProfession(param){
//     const jobs = [
//   ["Jabroni", "Patron Tequila"],
//   ["School Counselor", "Anything with Alcohol"],
//   ["Programmer", "Hipster Craft Beer"],
//   ["Bike Gang Member", "Moonshine"],
//   ["Politician", "Your tax dollars"],
//   ["Rapper", "Cristal"]
// ];
//     let newText=param.toLowerCase();

//   for (let i = 0; i < jobs.length; i++) {
//     for (let j= 0; j< jobs[i].length; j++) {
//         if (jobs[i][0].toLowerCase()==newText) {
//             return jobs[i][1]
//         }
//     }
//   }

//   return "Beer"
// }


// console.log(getDrinkByProfession("Jabroni"));



// let num=[1,3,2,4,1,6,8,4];
// console.log(num.lastindexOf(1));
// let result=[];
// for (let i = 0; i < num.length; i++) {
//     if (result.indexOf(num[i]) === -1) {
//         result.push(num[i]);
//     }
// }

// console.log(result)


// function correct(str)
// {
       
//     return str
//     .replaceAll("5","S")
//     .replaceAll("0","o")
//     .replaceAll("1","I")
// }


// console.log(correct("5al0n1"));



// function guessBlue(blueStart,redStart,bluePulled,redPulled) {
//     let remainingBlue = blueStart - bluePulled;
//     let remainingRed = redStart - redPulled;
//     let totalRemaining = remainingBlue + remainingRed;
//     let result=remainingBlue/totalRemaining;

//     return result

// }



// function Greet(name)
// {
//    return  function () {
//         return "salam"+" "+ name
//     }
// }

// let result=Greet("Elcin");
// console.log(result());

// function CreateCounter() {

//     let Count=0;
 
//     return function Counter() {
//         return Count+=1
//     }
// }

// let result= CreateCounter()

// console.log(result());


// const car = { make: "Toyota", model: "Camry", year: 2020, color: "blue" };


// const make=car.make;
// const model=car.model;
// const year=car.year;


// console.log(`"i have a car ${make},${model} and ${year}"`);


// let car1={
//     brand:"Toyota",
//     describe:function (speed,color) {
//         console.log(`${this.brand} is going ${speed} km/h and it is ${color}`)
//     }
// }

// let car2={brand:"Honde"}

//  car1.describe.apply(person2,['120','red']);


// const newfunction=function multiply(a,b) {
//     return a*b
// }

// let result=newfunction.bind(null,3,5);

// result();

// let person = {
//   name: "John",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// }

// let person1={name:"Bob"}

// let result=person.greet.bind(person1);
// result();


// let calculator = {
//   multiply: function(num1, num2) {
//     console.log(num1 * num2);
//   }
// };

// let numbers = {
//   num1: 3,
//   num2: 5
// };


// calculator.multiply.call(null,numbers.num1,numbers.num2)



// let calculator = {
//   add: function(a, b) {
//     console.log(a + b);
//   }
// };

// let nums = [4, 7];

//  calculator.add.apply(null,nums);

// let user1 = {
//   age: 25
// };

// let user2 = {
//   age: 30
// };

// function getAge() {
//   console.log(this.age);
// }

// let result1=getAge.bind(user1)
// let result2=getAge.bind(user2)
// result1();
// result2();


// function introduce() {
//   console.log(`Hi, I'm ${this.name}`);
// }

// let person1 = { name: "Alice" };
// let person2 = { name: "Bob" };

// introduce.call(person1)
// introduce.call(person2)

// function add(a, b) {
//   console.log(a + b);
// }

// add.call(null, 1, 2);    
// add.apply(null, [3, 4]);

// let addFive = add.bind(null, 5);
// addFive(6)


// let names=["elcin","nUrlan","asIf"]
// let newName=[];
// for (let i = 0; i < names.length; i++) {
//    let result=names[i].toLowerCase();
//    let resultNew=result[0].toUpperCase()+result.slice(1).toLowerCase();
//    newName.push(resultNew);
      
// }
// console.log(newName);


// let name="elcin"

// let newName=name.split("");
// let newName1="";
// let firstSymbol=newName[0].toUpperCase();

// for (let i = 1; i < newName.length; i++) {
//      newName1+=newName[i]
// }
// let result=firstSymbol+`${newName1}`
// console.log(result);



// function squareOrSquareRoot(array) {
//      let newNumbers=[];
//     for (let i = 0; i < array.length; i++) {
        
//         if (Math.sqrt(array[i])%1==0) {
//         newNumbers.push(Math.sqrt(array[i]))
//     }
        
//     else
//         {
//              newNumbers.push(array[i]*array[i])
//          }
        
//     }

//     return newNumbers
// }


// function all( arr, fun ){

//         for (let i = 0; i < arr.length; i++) {
            
//             if (!fun(arr[i])) 
//             {
//                return false
//             }
        
//         }
//   return true
// }


// for (let i = 0; i < numbers.length; i++) {


// }

// console.log(newNumbers)






// function stringToArray(string){
//   let newArr=[];
//   let newMessage=string.split(" ");
//   for (let i = 0; i < newMessage.length; i++) {
//         newArr.push(newMessage[i])    
//     }
//   return newArr
// }





function squareSum(numbers){
  sum=0;
  for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i]**2
  }
  return sum
}

console.log(squareSum([3,4,5]));