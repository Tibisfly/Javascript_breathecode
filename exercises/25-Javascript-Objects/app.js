var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers
  
  return sumOfAllLuckyNumbers;
}
//Instruction 1
function changeLuckyNumberJhonDoeInPostion(position, newNumber){
    person.lucky_numbers[position] = newNumber  
    return (person);
}

//Instruction 2
function addNewMemberToFamily(name, age, gender, luckyNumbers, significantOther){
    var newMember = {
            name: name,
            lastname: family.lastname,
            age: age,
            gender: gender,
            lucky_numbers: luckyNumbers,
            significant_other: significantOther
        };

    family.members.push(newMember);
  
  return (family);
}

//Instruction 3
function SumOfFamilyLuckyNumbers(){
  var sum = 0;
    for (var i = 0; i < family.members.length; i++) {
        for (var j = 0; j < family.members[i].lucky_numbers.length; j++) {
                sum = sum + family.members[i].lucky_numbers[j]
        }  
    }
  return (sum);
}


//Enter all your code here:


//Do not make changes below:
// console.log(addAllFamilyLuckyNumbers(family.members)); 


// console.log("Instruction 1"); 
changeLuckyNumberJhonDoeInPostion(3, 33)

// console.log("Instruction 2"); 
addNewMemberToFamily("Jimmy", "13", "male", [1, 2, 3, 4], null) 
// console.log("Instruction 3"); 
console.log(SumOfFamilyLuckyNumbers()); 
