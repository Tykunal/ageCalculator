const button = document.getElementById("Submit");
const inValue = document.getElementById("birthday");

function calculateAge() {
    const birthdayVal = inValue.value;
    console.log(birthdayVal);
    if (birthdayVal === "") {
        alert("Please enter your birthday");
        return; // Return early if no birthday is entered
    }

    const age = getAge(birthdayVal);
    document.getElementById("result").innerHTML = "Your age is " + age;
}

button.addEventListener("click", calculateAge); // Remove the parentheses after calculateAge, else immediate return 

function getAge(birthdayVal) {
    const curDate = new Date();
    const birthDate = new Date(birthdayVal);
    const birthYear = birthDate.getFullYear();
    const curYear = curDate.getFullYear();
    let age = curYear - birthYear;
    const curMonth = curDate.getMonth();
    const birthMonth = birthDate.getMonth();
    const curDay = curDate.getDate();
    const birthDay = birthDate.getDate();
    if(birthMonth > curMonth){
            age--;
    }
    else if (birthMonth == curMonth){
        if(birthDay > curDay){
            age --;
        }
        else{
            return age;
        }
    }
    return age; // Return the calculated age
}
