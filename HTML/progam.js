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
