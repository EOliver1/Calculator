/*var saySomething = function(whatToSay){
alert(whatToSay);
}

var add=function(n1,n2){
return n1+n2;
}

saySomething("Today is weird");
var result=add(3,5);
var outputText="The sum is " + result + ".";


saySomething(outputText);

var username=prompt("hello what's your name");
alert(username);
var greeting="How confused are you "+username+"?";
alert(greeting);

var threex=function(n1,n2,n3){
return n1*n2*n3;
}
var result=threex(17,3,2);
alert(result);
alert(result);

var remainder=function(n1,n2){
return n1%n2;
}
var result=remainder(37,8);
alert(result);


var age=prompt("How old are you?");
var name=prompt("What's your name?");
var food=prompt("What's your favorite food?");

var sentence=age+"year old"+ name + "likes to eat" + food + ".";
alert(sentence);

*/
var add = function(number1, number2) {
  return number1 + number2;
};


var number1 = parseInt(prompt("We will add 2 numbers. Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract=function(number1,number2){
  return number1 - number2;
}
var number1 = parseInt(prompt("We will subtract 2 numbers. Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);
//

var multiply = function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("We will multiply 2 numbers. Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result =multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("We will divide 2 numbers. Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);

var BMI=function(a,b){
  return (703*a)/(b*b);
}

var a = parseInt(prompt("Now let's calculate your BMI. How much do you weigh in pounds?"));
var b = parseInt(prompt("Enter your height in inches"));
var result=BMI(a, b);
alert(result);

//the actual function
var ftocconversion=function(a){

  return (a-32)*(5/9);

}

var ctofconv=function(b){
  return ((b*5)/9)+32;
}
var a=parseInt(prompt("Let's convert a temperature in Fahrenheit to Celsius"));
var b=parseInt(prompt("Celsisu to fahrenheit time!"));

//we call the function to do its thing to A and then store as "result"
var result=ftocconversion(a);
//display result
alert(result);

var result=ctofconv(b);

alert(result);
