function calculateGPA() {
  const subjects = [
    {
      name: "English",
      thCredit: 3,
      prCredit: 1
    },
    {
      name: "Nepali",
      thCredit: 2.25,
      prCredit: 0.75
    },
    {
      name: "Math",
      thCredit: 3.75,
      prCredit: 1.25
    },
    {
      name: "Physics",
      thCredit: 3.75,
      prCredit: 1.25
    },
    {
      name: "Chemistry",
      thCredit: 3.75,
      prCredit: 1.25
    },
    {
      name: "Biology",
      thCredit: 3.75,
      prCredit: 1.25
    }
  ];

  let totalCreditHours = 0;
  let weightedSum = 0;
  let isInputValid = true;

  for (let i = 0; i < subjects.length; i++) {
    const subject = subjects[i];

    const thGrade = parseFloat(document.getElementById(subject.name.toLowerCase() + "-th").value);
    const prGrade = parseFloat(document.getElementById(subject.name.toLowerCase() + "-pr").value);

    if (thGrade > 4 || prGrade > 4) {
      isInputValid = false;
      break;
    }

    totalCreditHours += subject.thCredit + subject.prCredit;
    weightedSum += (subject.thCredit * thGrade) + (subject.prCredit * prGrade);
  }

  if (isInputValid) {
    const gpa = weightedSum / totalCreditHours;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `GPA: ${gpa.toFixed(2)}`;
  } else {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "Invalid input. Grade point should be less than or equal to 4.";
  }
}
