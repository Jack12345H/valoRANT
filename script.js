document.getElementById("submit").addEventListener("click", checkScore);

function checkScore() {
  let answerOne = document.getElementById("answer1").value;
  let answerTwo = document.getElementById("answer2").value.toLowerCase();
  let answerThree = document.getElementById("answer3").value.toLowerCase();
  let answerFour = document.getElementById("answer4").value.toLowerCase();
  //question 1
  if (answerOne == 2024) {
    document.getElementById("s1").innerHTML = "CORRECT!";
    document.getElementById("s1").style.color = "green";
    scoreCount1 = +1;
  } else {
    document.getElementById("s1").innerHTML =
      "Incorrect: The Outlaw was released to Valorant on January 9, 2024";
    document.getElementById("s1").style.color = "red";
    scoreCount1 = 0;
  } //Question 2
  if (answerTwo === "fracture") {
    document.getElementById("s2").innerHTML = "CORRECT!";
    document.getElementById("s2").style.color = "green";
    scoreCount2 = +1;
  } else {
    document.getElementById("s2").innerHTML =
      "Incorrect: The map is called Fracture, playable in competitive, swiftplay, casual, or custom servers";
    document.getElementById("s2").style.color = "red";
    scoreCount2 = 0;
  } //Question 3
  if (answerThree == 1 || answerThree === "one") {
    document.getElementById("s3").innerHTML = "CORRECT!";
    document.getElementById("s3").style.color = "green";
    scoreCount3 = +1;
  } else if (
    answerThree == 2 ||
    answerThree == 3 ||
    answerThree === "two" ||
    answerThree === "three"
  ) {
    document.getElementById("s3").innerHTML =
      "Incorrect: The highest headshot damage dealt is the Operator at 255 hp (regardless of range)";
    document.getElementById("s3").style.color = "red";
    scoreCount3 = 0;
  } else {
    document.getElementById("s3").innerHTML =
      "Invalid option: please type 1, 2, or 3";
    document.getElementById("s3").style.color = "red";
    scoreCount3 = 0;
  }
  //Question 4
  if (
    answerFour === "smokes" ||
    answerFour === "controller" ||
    answerFour === "controllers"
  ) {
    document.getElementById("s4").innerHTML = "CORRECT!";
    document.getElementById("s4").style.color = "green";
    scoreCount4 = +1;
  } else {
    document.getElementById("s4").innerHTML =
      "Incorrect: The role that fits the description would be the controller/smokes role (3rd symbol from the left)";
    document.getElementById("s4").style.color = "red";
    scoreCount4 = 0;
    //score
  }
  let Total = scoreCount1 + scoreCount2 + scoreCount3 + scoreCount4;
  if (Total == 1) {
    document.getElementById("score2").innerHTML =
      "25% - Better luck next time. Play more Valorant!";
    document.getElementById("score").innerHTML = "1/4:";
  } else if (Total == 2) {
    document.getElementById("score2").innerHTML =
      "50% - You got half of the questions right!";
    document.getElementById("score").innerHTML = "2/4:";
  } else if (Total == 3) {
    document.getElementById("score2").innerHTML =
      "75% - Good job! you got most of the questions right!";
    document.getElementById("score").innerHTML = "3/4:";
  } else if (Total == 4) {
    document.getElementById("score2").innerHTML =
      "100!% - Amazing work! you know a great amount of Valorant!";
    document.getElementById("score").innerHTML = "4/4:";
  } else if (Total == 0) {
    document.getElementById("score2").innerHTML =
      "0% - Unlucky, but you'll get better next time!";
    document.getElementById("score").innerHTML = "0/4:";
  }
}
