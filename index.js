
const btnE1=document.getElementById("bmi-results");
const weightConditionEl=document.getElementById("bmiResult")
// btnE1.addEventListener((click),()=>{
//     calculateBmi();
// });


btnE1.addEventListener("click", calculateBMI);
function calculateBMI(){
var bmiResult;
var weightE1=document.getElementById("weight").value;
var heightE1=document.getElementById("height").value/100;
const BMI=(weightE1/(heightE1*heightE1));
document.getElementById(
    "bmi-value"
  ).innerHTML = `Youe BMI is: ${BMI}`;
  
if (BMI <= 18.4) {
    bmiResultMessage = "Under weight";
  } else if (BMI >= 18.5 && BMI <= 25) {
    bmiResultMessage = "Normal weight";
  } else if (BMI >= 25 && BMI <= 30.9) {
    bmiResultMessage = "Overweight";
  }
  else if(BMI>=30&&BMI<=35){
    bmiResultMessage="obese class 1"
  }
  else if(BMI>=35&&BMI<=40){
    bmiResultMessage="obese class 2"
}
    else if (BMI>= 40) {
    bmiResultMessage = "Obese class 3";
  }
document.getElementById(
    "bmiResult"
  ).innerHTML = `Youe BMI Result was : ${bmiResultMessage}`;

}



