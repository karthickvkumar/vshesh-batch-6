// Number - Any numerical values. It can be Positive, Negative, Fractional, Decimal value

// String - Any Text value. It can be A-Z, a-z, 0-9, special character (@#$%). It should be enclosed in Single or Double Quote ('', "")

// Boolean - Either true or false

// null - Non Existance of value

// undefined - Value is not yet definied. 

// Variable Declaration 
// syntax:
// var variable_name = value; 
// variable_name - we need to provide a meaningful name, It should contains A-Z, a-z, 0-9, _ , $
// value - Number, String, Boolean, null, undefined

var username = "Karthick Kumar";
var user_age = 28;
var result = true;
var futureValue; //A variable has been declared but its value not yet assinged.

console.log(username);
console.log(user_age);
console.log(futureValue);

user_age = 30;

console.log(user_age);

//Student Information 

var first_name = "mr.abc";
var last_name = "xyz";
var email_id = "abc@ymail.com";
var roll_number = 4795854;
var mark = 80;

/*
Object - It is a collection of key and value (collection of property)
syntax
var variable_name = {
  key : value,
  key : value
}

key - It is also similar to variable name and it should be unique inside the Object.
Value - Number, String, Boolean, null, undefined, Object, Array, Function 
*/

var student_information = {
  first_name : "mr.abc",
  last_name : "zyx",
  email_id : "abc@ymail.com",
  roll_number : 457856,
  mark : 80
};

console.log(student_information);

/*
Operations in Object 
1. Read a value from Object
2  Insert a new value to the Object
3. Edit/Update a value from Object
4. Detelte value from Object 

To Read a value from Object
syntax
object_variale_name.key  
*/

console.log(student_information.email_id)

/*
To Insert a new value to the Object
syntax
object_variable_name.newKey = newValue;
*/
student_information.contact_number = 98755465256;
student_information.blood_group = "A +ve";

/*
To Edit/Update a value from Object
syntax
object_variable_name.key = newValue;
*/

student_information.last_name = "kumar";
student_information.email_id = "k@gmail.com";

/*
To Detelte value from Object 
syntax 
delete object_variable_name.key;
*/
delete student_information.blood_group;

// Array - It is list of similar data type
// syntax 
// var variable_name = [value1, value2, ... , valueN];
// Value - Number, String, Boolean, null, undefined, Object, Array, Function 

var list_of_numbers = [1, 2, -20, 2.5, 48, 89, 75, 67, 78];

var list_of_names = ["mr.abc", "mr.cde", "mr.see", "mr.pous"];

var list_student_information = [
  {name : "mr.abc", roll_number : 478569856, email: "abc@gmail.com" },
  {name : "mr.cde", roll_number : 7844946465, email: "cde@gmail.com"},
  {name : "mr.zyx", roll_number : 5852655555, email: "zyx@gmail.com"}
];

console.log(list_of_names);
console.log(list_student_information);
/*
Operations in Array 
1. Read a value from Array
2  Insert a new value to the Array
3. Edit/Update a value from Array
4. Delete value from Array 

To Read a value from Array
syntax 
array_variable_name[index];
*/
console.log(list_student_information[2].email);

/*
To Insert a new value to the Array
syntax - approach 1 - It will insert value at end of the array list
array_variable_name.push(value);
*/
list_student_information.push({name: "karthick", email: "k@gmail.com", roll_number: 689555});

/*
syntax - approach 2 - It will insert value at top of the array list 
array_variable_name.unshift(value);
*/

list_student_information.unshift({name: "zyan", email: "z@gmail.com", roll_number: 984554565});

/*
To Edit/Update a value from Array
syntax
array_variable_name[index] = newValue;
*/
list_student_information[3] = {name: "new user", email: "user@gmail.com", roll_number: 1012122};

list_student_information[2].name = "Updated name";

/*
To Delete value from Array 
syntax 
array_variable_name.splice(index, 1);
*/
list_student_information.splice(3, 1);

/*
Function - It is used to write a block of code 
syntax 
function function_name(){
  code logic
}

function_name - similar to variable name, it should be a meaninful name, it should contians only A-Z, a-z, 0-9, $, _ 
*/

function printWelcomeMessage(){
  var message = "Hello! Good Morning";
  alert(message);
}

function sayGoodbye(){
  var text = "Thank you All! Bye...";
  alert(text);
}

/*
Operators
1. Arithmetic Operator +, -, *, /, %, ++, --
2. Assignemnt Operator =
3. Comparision Operator <, <=, >, >=, ==, !=, ===, !==
4. Logical Operator && (AND), || (OR), ! (NOT)

&& AND 
true && true - true
true && false - false
false && true - false 
false && false - false 

|| OR 
true || true - true 
true || false - true 
false || true - true 
false || false - false 

! NOT 
!true - false 
!false - true 
*/
/*
If Else Condition 
syntax 
if(condition){
  code logic for condition is correct  
}
else{
  code logic for condition is wrong
}
*/

/*
Problem : To check whether a person can Vote or Not ?
Problem Statement:
1. To provide age(Number) as Input to program 
2. If the person age is greater then or equal to 18 -> The person is eligible for Vote 
3. If the person age is less then 18 -> The person is not eligible for Vote
*/

function checkVoteEligible(){
  var age = prompt("Please enter your age");
  if(age >= 18){
    alert("The person is eligible for Vote");
  }
  else{
    alert("The person is NOT eligible for Vote")
  }
}

/*
Multiple IF Else Condition 
syntax 
if(Condition){

}
else if(Condition){
  
}
else{

}
*/

/*
Problem: 
To find age category
If the person is less then 18 - The person is Minor 
If the person is greater then or equal 18 and less then 60 - The person is Major 
If the person is greater then or equal to 60 - The person is senior 
*/

function findAgeCategory(){
  var age = prompt("Enter your age");
  if(age < 18){
    alert("The person is Minor ");
  }
  else if(age >= 18 && age < 60){
    alert("The person is Major.");
  }
  else{
    alert("The person is Senior");
  }
}

/*
for Loop
syntax 
for(intialization; condition; increment/decrement){
  code logic that we need repeat 
}
*/

for(var startCount = 1; startCount <= 10; startCount++){
  console.log("Loop is running on time", startCount);
}

/*
Problem: To find even number list for a given N number
To find the logic for finiding even number 
Logic has to run for mulitipe times 
*/

function findEvenNumbers(){
  var Nth = prompt("Enter the last number");
  for(var startCount = 0; startCount <= Nth; startCount++){
    if(startCount % 2 === 0){
      console.log(startCount, "is a Even Number")
    }
  }
}

/*
While loop - Entry Level Check
syntax 
while(condition){
  code logic that we need repeat
}
*/

var count = 1;
while(count <= 15){
  console.log("Loop is running on time", count);
  count++;
}

/*
Do While - Exit Level Check
syntax 
do{
  code logic that we need repeat
}
while(condition)
*/
var count = 6;
do{
    console.log("The count is", count);
    count++;
}while(count <= 5);

/*
switch case 
syntax 
switch(expression){
  case value:
    code block
    break;
  case value:
    code block
    break;

  default:
}

expression - Directly pass some value or data
*/

function findWeekday(){
  try{
    var day = prompt("Please enter a number 0 - 6");
    var numberConvertedDay = parseInts(day);
    switch(numberConvertedDay){
      case 0:
        alert("It's Sunday");
        break;
      case 1:
        alert("It's Monday");
        break;
      case 2:
        alert("It's Tuesday");
        break;
      case 3:
        alert("It's Wednesday");
        break;
      case 4: 
        alert("It's Thursday");
        break;
      case 5: 
        alert("It's Friday");
        break;
      case 6: 
        alert("It's Saturday");
        break;
      default:
        alert("Plese re-check your Input");
    }
  }
  catch(error){
    console.log(error);
    alert("Some thing went wrong, pls contact admin of this page");
  }
}

/*
Naming Convension 
1. Pascal Case - KarthickKumar (creating classname, component name)
2. Camel Case - karthickKumar (creating function name, variable name, method name)
3. Snake Case - karthick_kumar (creating function name, variable name)
4. Kebab Case - karthick-kumar (creating CSS - class name and id name) 
*/

/*
Class - block of code which will wrappered inside an object 
synax - Creating a class
class ClassName{
  methodName1(){

  }

  methodName2(){

  }
} 

synax for executing a method in the class 
var c = new ClassName();
c.methodName1();
*/

class Authentiation{
  loginPage(){
    alert("This is a Login page");
  } 

  registerPage(){
    alert("This is a Register page");
  }
}

var auth = new Authentiation();
//auth.loginPage();

class Home extends Authentiation{
  landingPage(){
    alert("This is a Landing page");
  }
}

var home = new Home();
//home.registerPage()