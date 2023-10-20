let weight = 54; // kg
let height = 1.63; // meter

// calculate BMI
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = "Healthy Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = "Overweight";
} else {
  weightStatus = "Obesity";
}

console.log(weightStatus);
