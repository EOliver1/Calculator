var saySomething = function(whatToSay){
alert(whatToSay);
}

var add=function(n1,n2){
return n1+n2;
}

saySomething("jsfiddle");
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
