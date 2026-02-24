function calculate() {
  let s1 = parseInt(document.getElementById("sub1").value) || 0;
  let s2 = parseInt(document.getElementById("sub2").value) || 0;
  let s3 = parseInt(document.getElementById("sub3").value) || 0;
  let s4 = parseInt(document.getElementById("sub4").value) || 0;
  let s5 = parseInt(document.getElementById("sub5").value) || 0;

  let total = s1 + s2 + s3 + s4 + s5;
  let average = total / 5;

  let grade;
  let status;

  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "F";

  status = average >= 50 ? "Pass" : "Fail";

  document.getElementById("result").innerHTML = `Total: ${total} <br>
         Average: ${average.toFixed(2)} <br>
         Grade: ${grade} <br>
         Result: ${status}`;
}
