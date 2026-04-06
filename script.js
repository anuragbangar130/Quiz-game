

// LOGIN
function startQuiz() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let level = document.getElementById("level")?.value;

  if(name === "" || age === "") {
    document.getElementById("error").innerText = "Fill all fields!";
    return;
  }

  // 🔒 Level lock check
  if(level === "medium" && !localStorage.getItem("mediumUnlocked")){
    alert("Complete Easy first!");
    return;
  }

  if(level === "hard" && !localStorage.getItem("hardUnlocked")){
    alert("Complete Medium first!");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  localStorage.setItem("level", level);

  window.location.href = "quiz.html";
}


// QUIZ
if(document.getElementById("question")) {

  let name = localStorage.getItem("name");
  let level = localStorage.getItem("level");

  if(!name){
    window.location.href = "login.html";
  }

  document.getElementById("welcome").innerText =
    "Welcome " + name + " (" + level + ")";



  // 🔥 LEVEL QUESTIONS
  let easy = [
  {
    q: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"],
    answer: "B"
  },
  {
    q: "What is RAM?",
    options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "None"],
    answer: "B"
  },
  {
    q: "What is the brain of computer?",
    options: ["RAM", "CPU", "Hard Disk", "Monitor"],
    answer: "B"
  },
  {
    q: "Which device is used to input data?",
    options: ["Monitor", "Keyboard", "Printer", "Speaker"],
    answer: "B"
  },
  {
    q: "Which is an output device?",
    options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
    answer: "C"
  },
  {
    q: "Which language is used for web pages?",
    options: ["C", "Java", "HTML", "Python"],
    answer: "C"
  },
  {
    q: "Which is a storage device?",
    options: ["Keyboard", "Mouse", "Hard Disk", "Monitor"],
    answer: "C"
  },
  {
    q: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Resource Link", "Unit Resource Link", "None"],
    answer: "A"
  },
  {
    q: "Which key is used to refresh?",
    options: ["F1", "F5", "F10", "F12"],
    answer: "B"
  },
  {
    q: "Which is an operating system?",
    options: ["Windows", "MS Word", "Excel", "PowerPoint"],
    answer: "A"
  },
  {
    q: "Which is used for typing?",
    options: ["Mouse", "Keyboard", "Monitor", "Printer"],
    answer: "B"
  },
  {
    q: "Which is a programming language?",
    options: ["HTML", "CSS", "Java", "XML"],
    answer: "C"
  },
  {
    q: "Which is used to click?",
    options: ["Keyboard", "Mouse", "Monitor", "CPU"],
    answer: "B"
  },
  {
    q: "Which is permanent memory?",
    options: ["RAM", "ROM", "Cache", "Register"],
    answer: "B"
  },
  {
    q: "Which is used to print?",
    options: ["Monitor", "Printer", "Keyboard", "Mouse"],
    answer: "B"
  },
  {
    q: "Which is used to store data?",
    options: ["CPU", "Hard Disk", "Mouse", "Keyboard"],
    answer: "B"
  },
  {
    q: "Which is an input device?",
    options: ["Scanner", "Monitor", "Speaker", "Printer"],
    answer: "A"
  },
  {
    q: "Which is used for internet?",
    options: ["Router", "Keyboard", "Mouse", "Monitor"],
    answer: "A"
  },
  {
    q: "Which symbol is used in HTML tag?",
    options: ["()", "< >", "{}", "[]"],
    answer: "B"
  },
  {
    q: "Which is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "C"
  }  
  ];

  let medium = [
    {
    q: "What is the full form of ALU?",
    options: ["Arithmetic Logic Unit", "Array Logic Unit", "Application Logic Unit", "None"],
    answer: "A"
  },
  {
    q: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Array", "Tree"],
    answer: "B"
  },
  {
    q: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "B"
  },
  {
    q: "Which is not an operating system?",
    options: ["Linux", "Windows", "Oracle", "MacOS"],
    answer: "C"
  },
  {
    q: "What is the extension of Java files?",
    options: [".js", ".java", ".class", ".py"],
    answer: "B"
  },
  {
    q: "Which is a relational database?",
    options: ["MySQL", "MongoDB", "Firebase", "Redis"],
    answer: "A"
  },
  {
    q: "Which keyword is used to define a function in C?",
    options: ["function", "def", "void", "func"],
    answer: "C"
  },
  {
    q: "Which protocol is used to transfer web pages?",
    options: ["FTP", "HTTP", "SMTP", "TCP"],
    answer: "B"
  },
  {
    q: "Which of the following is a compiler?",
    options: ["GCC", "Chrome", "Windows", "MySQL"],
    answer: "A"
  },
  {
    q: "Which language is used for Android development?",
    options: ["Swift", "Java", "C#", "Ruby"],
    answer: "B"
  },
  {
    q: "Which of the following is not a loop?",
    options: ["for", "while", "do-while", "repeat"],
    answer: "D"
  },
  {
    q: "Which operator is used for comparison?",
    options: ["=", "==", "+", "*"],
    answer: "B"
  },
  {
    q: "Which sorting algorithm is fastest (average)?",
    options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
    answer: "B"
  },
  {
    q: "Which is not a primitive data type in Java?",
    options: ["int", "float", "String", "char"],
    answer: "C"
  },
  {
    q: "Which symbol is used for pointer in C?",
    options: ["&", "*", "%", "#"],
    answer: "B"
  },
  {
    q: "Which normal form removes transitive dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "C"
  },
  {
    q: "Which of the following is a NoSQL database?",
    options: ["MySQL", "Oracle", "MongoDB", "SQL Server"],
    answer: "C"
  },
  {
    q: "Which HTML tag is used for hyperlink?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "B"
  },
  {
    q: "Which of the following is not a programming paradigm?",
    options: ["Object-Oriented", "Functional", "Procedural", "Circular"],
    answer: "D"
  },
  {
    q: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "B"
  }

  ];

  let hard = [
    {
    q: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "B"
  },
  {
    q: "Which traversal uses recursion most naturally?",
    options: ["Level Order", "Preorder", "Inorder", "Postorder"],
    answer: "C"
  },
  {
    q: "Which data structure is used for BFS?",
    options: ["Stack", "Queue", "Heap", "Tree"],
    answer: "B"
  },
  {
    q: "Which data structure is used for DFS?",
    options: ["Queue", "Stack", "Array", "Graph"],
    answer: "B"
  },
  {
    q: "Which algorithm is used to find shortest path?",
    options: ["Kruskal", "Dijkstra", "Prim", "DFS"],
    answer: "B"
  },
  {
    q: "What is the worst-case time complexity of quicksort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    answer: "C"
  },
  {
    q: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "B"
  },
  {
    q: "Which protocol works at transport layer?",
    options: ["HTTP", "FTP", "TCP", "IP"],
    answer: "C"
  },
  {
    q: "Which scheduling algorithm may cause starvation?",
    options: ["FCFS", "Round Robin", "Priority", "FIFO"],
    answer: "C"
  },
  {
    q: "Which memory is fastest?",
    options: ["RAM", "Cache", "Hard Disk", "ROM"],
    answer: "B"
  },
  {
    q: "Which join returns all matching records?",
    options: ["Left Join", "Right Join", "Inner Join", "Outer Join"],
    answer: "C"
  },
  {
    q: "Which of the following is NP-complete?",
    options: ["Sorting", "Searching", "Travelling Salesman", "Binary Search"],
    answer: "C"
  },
  {
    q: "Which tree is balanced automatically?",
    options: ["Binary Tree", "AVL Tree", "BST", "Heap"],
    answer: "B"
  },
  {
    q: "Which algorithm is used in Minimum Spanning Tree?",
    options: ["Dijkstra", "Prim", "Binary Search", "DFS"],
    answer: "B"
  },
  {
    q: "Which addressing mode uses pointer?",
    options: ["Immediate", "Direct", "Indirect", "Indexed"],
    answer: "C"
  },
  {
    q: "Which language is used for system programming?",
    options: ["Python", "Java", "C", "HTML"],
    answer: "C"
  },
  {
    q: "Which technique avoids deadlock?",
    options: ["Paging", "Scheduling", "Banker's Algorithm", "Segmentation"],
    answer: "C"
  },
  {
    q: "Which SQL clause is used to filter groups?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: "C"
  },
  {
    q: "Which concept provides data hiding?",
    options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    answer: "B"
  },
  {
    q: "Which hashing technique resolves collision?",
    options: ["Chaining", "Sorting", "Searching", "Traversal"],
    answer: "A"
  }
  ];

  // 👉 Select level questions
  let questions;
  if(level === "easy") questions = easy;
  else if(level === "medium") questions = medium;
  else questions = hard;

  let current = 0;
  let score = 0;
  let time = 20;
  let timer;

  function loadQuestion() {
    clearInterval(timer);
    time = 20;
    document.getElementById("timer").innerText = "Time: " + time;

    let q = questions[current];

    document.getElementById("question").innerText = q.q;
    document.getElementById("A").innerText = q.options[0];
    document.getElementById("B").innerText = q.options[1];
    document.getElementById("C").innerText = q.options[2];
    document.getElementById("D").innerText = q.options[3];

    // Reset colors
    let buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.style.background = "#333");

    timer = setInterval(() => {
      time--;
      document.getElementById("timer").innerText = "Time: " + time;

      if(time === 0){
        nextQuestion();
      }
    }, 1000);
  }

  window.checkAnswer = function(ans) {
    let correct = questions[current].answer;

    let buttons = document.querySelectorAll(".options button");

    buttons.forEach(btn => {
      if(btn.id === correct){
        btn.style.background = "green";
      } else if(btn.id === ans){
        btn.style.background = "red";
      }
    });

    if(ans === correct){
      score++;
    }

    setTimeout(nextQuestion, 1000);
  }

  function nextQuestion() {
    current++;

    if(current < questions.length) {
      loadQuestion();
    } else {

      let users = JSON.parse(localStorage.getItem("users")) || [];

users.push({
  name: name,
  age: localStorage.getItem("age"),
  level: level,
  score: score
});

localStorage.setItem("users", JSON.stringify(users));


      // 🔓 Unlock system
      if(level === "easy"){
        localStorage.setItem("mediumUnlocked", true);
      }

      if(level === "medium"){
        localStorage.setItem("hardUnlocked", true);
      }

      document.body.innerHTML = `
        <div class="quiz-box">
          <h2>${name}, Your Score: ${score}/${questions.length}</h2>
          <button onclick="location.href='login.html'">Play Again</button>
        </div>
      `;
    }
  }

  loadQuestion();
}


// 🔥 Unlock text update (login page)
window.onload = function() {
  if(document.getElementById("level")){
    if(localStorage.getItem("mediumUnlocked")){
      document.getElementById("medium").innerText = "Medium";
    }
    if(localStorage.getItem("hardUnlocked")){
      document.getElementById("hard").innerText = "Hard";
    }
  }
}

function logout() {
  if(confirm("Are you sure you want to logout?")){
    localStorage.clear();
    window.location.href = "login.html";
  }
}