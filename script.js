window.addEventListener("load", load);

let answers = [];
let score = 0;

function load() {
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    if(confirm("Voulez-vous confirmer ?")) {
      checkAnswers();
    }
  });
  
  loadJSON("./data.json");
}

function loadJSON(url) {
  fetch(url)
  .then(res => res.json())
  .then(json => {
    document.getElementById("title").textContent = json.title;
    let shuffle = [...json.form].sort(() => Math.random() - 0.5);
    loadForm(shuffle);
  });
}

function loadForm(form) {
  let htmlForm = document.getElementById("form");
  
  form.forEach((question, questionNumber) => {
    answers.push(question.correct);
    
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.textContent = "Question "+(questionNumber+1);
    let hr = document.createElement("hr");
    
    let label = document.createElement("label");
    label.innerHTML = question.question;
    div.append(label);
    
    question.answers.forEach((answer, answerNumber) => {
      let span = document.createElement("span");
      let input = document.createElement("input");
      input.type = "checkbox";
      input.id = "question"+questionNumber+"-answer"+answerNumber;
      input.name = "question"+questionNumber;
      
      label = document.createElement("label");
      label.setAttribute("for", "question"+questionNumber+"-answer"+answerNumber);
      label.textContent = answer;
      
      span.append(input, label);
      div.append(span);
    });
    
    htmlForm.append(hr, h3, div);
  });
}

function checkAnswers() {
  let elements = document.querySelectorAll("#form div");
  elements.forEach((element, index) => {
    let inputs = element.querySelectorAll("input[name*=question]");
    let valid = true;
    answers[index].forEach(correct => {
      if(!inputs[correct].checked) {
        valid = false;
        inputs[correct].parentNode.className = "incorrect";
      } else {
        inputs[correct].parentNode.className = "correct";
      }
    });
    score = score + valid == true ? 1 : 0; 
  });
}
