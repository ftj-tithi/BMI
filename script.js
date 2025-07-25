function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightFeet = parseFloat(document.getElementById('height').value);

  if (!weight || !heightFeet) {
    document.getElementById('result').textContent = "Please enter valid values.";
    return;
  }

  // Convert height from feet to meters
  const heightMeters = heightFeet * 0.3048;

  // BMI formula
  const bmi = weight / (heightMeters * heightMeters);
  const roundedBMI = bmi.toFixed(2);
  let message = `Your BMI is ${roundedBMI} - `;
  let tip = "";

  if (bmi < 18.5) {
    message += "Underweight";
    tip = "🧃 Tip: Eat more healthy, calorie-rich foods like nuts, milk, eggs, and bananas.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    message += "Normal weight";
    tip = "🏃‍♂️ Tip: Keep it up! Maintain your weight with regular exercise and balanced meals.";
  } else if (bmi >= 25 && bmi < 29.9) {
    message += "Overweight";
    tip = "🥗 Tip: Try reducing sugary foods and increase physical activity daily.";
  } else {
    message += "Obese";
    tip = "💪 Tip: Consult a doctor and follow a structured diet and exercise plan.";
  }

  document.getElementById('result').innerHTML = `${message}<br>${tip}`;
}
