const questions = [
  {
    question: "What is the primary habitat of the Komodo dragon?",
    answers: [
      { text: "Sumatra", correct: false },
      { text: "Java", correct: false },
      { text: "Komodo Island", correct: true },
      { text: "Borneo", correct: false }
    ]
  },
  {
    question: "Which Indonesian island is home to the critically endangered Javan rhinoceros?",
    answers: [
      { text: "Sumatra", correct: false },
      { text: "Java", correct: true },
      { text: "Bali", correct: false },
      { text: "Sulawesi", correct: false }
    ]
  },
  {
    question: "What is the biggest threat to Sumatran tigers?",
    answers: [
      { text: "Habitat destruction", correct: true },
      { text: "Poaching", correct: false },
      { text: "Climate change", correct: false },
      { text: "Natural predators", correct: false }
    ]
  },
  {
    question: "Why are orangutans endangered?",
    answers: [
      { text: "Illegal hunting", correct: false },
      { text: "Deforestation", correct: true },
      { text: "Competition with other primates", correct: false },
      { text: "Water pollution", correct: false }
    ]
  },
  {
    question: "What conservation status does the Bawean deer currently hold?",
    answers: [
      { text: "Extinct", correct: false },
      { text: "Critically Endangered", correct: true },
      { text: "Vulnerable", correct: false },
      { text: "Least Concern", correct: false }
    ]
  },
  {
    question: "What is the natural habitat of the Anoa?",
    answers: [
      { text: "Mangroves", correct: false },
      { text: "Rainforests", correct: true },
      { text: "Grasslands", correct: false },
      { text: "Deserts", correct: false }
    ]
  },
  {
    question: "Which of these is a major threat to the Tarsius population?",
    answers: [
      { text: "Deforestation", correct: true },
      { text: "Overfishing", correct: false },
      { text: "Urbanization", correct: false },
      { text: "Climate Change", correct: false }
    ]
  },
  {
    question: "Where can you find the Celebes Crested Macaque in the wild?",
    answers: [
      { text: "Java", correct: false },
      { text: "Sumatra", correct: false },
      { text: "Sulawesi", correct: true },
      { text: "Bali", correct: false }
    ]
  },
  {
    question: "What is the primary reason for the decline of Sumatran elephants?",
    answers: [
      { text: "Poaching for ivory", correct: false },
      { text: "Habitat loss", correct: true },
      { text: "Diseases", correct: false },
      { text: "Predation", correct: false }
    ]
  },
  {
    question: "How does the Komodo dragon kill its prey?",
    answers: [
      { text: "Poisonous bite", correct: false },
      { text: "Bacteria in saliva", correct: true },
      { text: "Constriction", correct: false },
      { text: "Drowning", correct: false }
    ]
  },
  {
    question: "How many Javan rhinoceroses are estimated to remain in the wild?",
    answers: [
      { text: "Less than 100", correct: true },
      { text: "Around 500", correct: false },
      { text: "Over 1,000", correct: false },
      { text: "More than 5,000", correct: false }
    ]
  },
  {
    question: "Which national park is the last refuge of the Javan rhinoceros?",
    answers: [
      { text: "Way Kambas National Park", correct: false },
      { text: "Ujung Kulon National Park", correct: true },
      { text: "Gunung Leuser National Park", correct: false },
      { text: "Kerinci Seblat National Park", correct: false }
    ]
  },
  {
    question: "What is the primary diet of the Sumatran elephant?",
    answers: [
      { text: "Meat", correct: false },
      { text: "Fish", correct: false },
      { text: "Fruits and plants", correct: true },
      { text: "Insects", correct: false }
    ]
  },
  {
    question: "Which conservation organization works to protect orangutans in Indonesia?",
    answers: [
      { text: "WWF", correct: true },
      { text: "Greenpeace", correct: false },
      { text: "PETA", correct: false },
      { text: "Sea Shepherd", correct: false }
    ]
  },
  {
    question: "Why are Celebes Crested Macaques often hunted?",
    answers: [
      { text: "For their fur", correct: false },
      { text: "For food", correct: true },
      { text: "For traditional medicine", correct: false },
      { text: "For religious rituals", correct: false }
    ]
  },
  {
    question: "What is the primary diet of Tarsius?",
    answers: [
      { text: "Fruits", correct: false },
      { text: "Insects and small animals", correct: true },
      { text: "Leaves", correct: false },
      { text: "Seeds", correct: false }
    ]
  },
  {
  question: "Which conservation strategy is most effective for protecting the Javan rhinoceros?",
  answers: [
    { text: "Captive breeding programs", correct: false },
    { text: "Strict habitat protection", correct: true },
    { text: "Introducing them to zoos worldwide", correct: false },
    { text: "Releasing them into urban areas", correct: false }
  ]
},
{
  question: "What adaptation helps the Tarsius leap great distances?",
  answers: [
    { text: "Large eyes", correct: false },
    { text: "Strong hind legs", correct: true },
    { text: "Prehensile tail", correct: false },
    { text: "Webbed feet", correct: false }
  ]
},
{
  question: "Which illegal activity threatens the survival of Sumatran tigers the most?",
  answers: [
    { text: "Overfishing", correct: false },
    { text: "Logging", correct: false },
    { text: "Poaching", correct: true },
    { text: "Overgrazing", correct: false }
  ]
},
{
  question: "What unique feature distinguishes the Bawean deer from other deer species?",
  answers: [
    { text: "They have a golden mane", correct: false },
    { text: "Males do not grow antlers", correct: false },
    { text: "They are nocturnal and secretive", correct: true },
    { text: "They hibernate during winter", correct: false }
  ]
},
{
  question: "How do Komodo dragons regulate their body temperature?",
  answers: [
    { text: "By burrowing underground", correct: false },
    { text: "By basking in the sun", correct: true },
    { text: "By sweating", correct: false },
    { text: "By growing fur", correct: false }
  ]
},
{
  question: "What type of ecosystem is most crucial for the survival of the Anoa?",
  answers: [
    { text: "Coral reefs", correct: false },
    { text: "Mountainous rainforests", correct: true },
    { text: "Mangrove swamps", correct: false },
    { text: "Grassland savannas", correct: false }
  ]
},
{
  question: "Which law in Indonesia helps protect endangered species like the Sumatran elephant?",
  answers: [
    { text: "Wildlife Protection Act 1990", correct: false },
    { text: "Conservation Law No. 5/1990", correct: true },
    { text: "Endangered Species Act 2000", correct: false },
    { text: "Forest Protection Bill 2015", correct: false }
  ]
},
{
  question: "Why is habitat fragmentation dangerous for the Celebes Crested Macaque?",
  answers: [
    { text: "It forces them into urban areas", correct: false },
    { text: "It isolates populations, reducing genetic diversity", correct: true },
    { text: "It increases their food sources", correct: false },
    { text: "It helps control their population", correct: false }
  ]
},
{
  question: "How do conservationists track Javan rhinoceroses in the wild?",
  answers: [
    { text: "Using drones and camera traps", correct: true },
    { text: "By following their footprints", correct: false },
    { text: "By attaching GPS collars", correct: false },
    { text: "By radio communication with them", correct: false }
  ]
},
{
  question: "What is a major reason for the decline of wild orangutan populations?",
  answers: [
    { text: "Excessive rainfall", correct: false },
    { text: "Palm oil plantations replacing forests", correct: true },
    { text: "Overfishing of their food sources", correct: false },
    { text: "Increased urbanization in Java", correct: false }
  ]
},
{
  question: "What is the primary role of the Sumatran elephant in its ecosystem?",
  answers: [
    { text: "Hunting smaller animals", correct: false },
    { text: "Spreading seeds and maintaining forest health", correct: true },
    { text: "Building dams", correct: false },
    { text: "Controlling rodent populations", correct: false }
  ]
},
{
  question: "How do Komodo dragons detect their prey from long distances?",
  answers: [
    { text: "Excellent vision", correct: false },
    { text: "Powerful sense of smell", correct: false },
    { text: "Using their forked tongue to sense chemicals in the air", correct: true },
    { text: "By hearing ultrasonic sounds", correct: false }
  ]
},
{
  question: "Which human activity poses the greatest threat to the Bawean deer?",
  answers: [
    { text: "Overfishing", correct: false },
    { text: "Illegal pet trade", correct: false },
    { text: "Deforestation for agriculture", correct: true },
    { text: "Pollution in rivers", correct: false }
  ]
},
{
  question: "Why is the Anoa population decreasing in Indonesia?",
  answers: [
    { text: "Climate change", correct: false },
    { text: "Predation by tigers", correct: false },
    { text: "Hunting and habitat loss", correct: true },
    { text: "Competition with livestock", correct: false }
  ]
},
{
  question: "What is the primary conservation challenge for the Javan rhinoceros?",
  answers: [
    { text: "Lack of breeding pairs", correct: true },
    { text: "Predation by large carnivores", correct: false },
    { text: "Overpopulation in the wild", correct: false },
    { text: "Increased competition with Komodo dragons", correct: false }
  ]
},
{
  question: "What type of diet do Celebes Crested Macaques primarily have?",
  answers: [
    { text: "Carnivorous", correct: false },
    { text: "Herbivorous", correct: false },
    { text: "Omnivorous", correct: true },
    { text: "Strictly frugivorous", correct: false }
  ]
},
{
  question: "Which of these factors contributes most to the endangerment of Tarsius?",
  answers: [
    { text: "Poaching for their fur", correct: false },
    { text: "Competition with monkeys", correct: false },
    { text: "Deforestation and habitat destruction", correct: true },
    { text: "Overpopulation", correct: false }
  ]
},
{
  question: "How do Sumatran tigers hunt their prey?",
  answers: [
    { text: "By chasing them in packs", correct: false },
    { text: "By stalking and ambushing them", correct: true },
    { text: "By setting traps", correct: false },
    { text: "By luring prey with their scent", correct: false }
  ]
},
{
  question: "Which national park serves as a key sanctuary for the Sumatran elephant?",
  answers: [
    { text: "Tanjung Puting National Park", correct: false },
    { text: "Gunung Leuser National Park", correct: true },
    { text: "Komodo National Park", correct: false },
    { text: "Ujung Kulon National Park", correct: false }
  ]
},
{
  question: "What is the estimated lifespan of a wild orangutan?",
  answers: [
    { text: "10-15 years", correct: false },
    { text: "20-30 years", correct: false },
    { text: "35-45 years", correct: true },
    { text: "50-60 years", correct: false }
  ]
},
{
  question: "What is the biggest threat to the Javan rhinoceros?",
  answers: [
    { text: "Poaching for their horns", correct: false },
    { text: "Habitat loss and limited population", correct: true },
    { text: "Predation by large cats", correct: false },
    { text: "Climate change", correct: false }
  ]
},
{
  question: "Which island is home to the majority of Komodo dragons?",
  answers: [
    { text: "Sumatra", correct: false },
    { text: "Borneo", correct: false },
    { text: "Komodo Island", correct: true },
    { text: "Java", correct: false }
  ]
},
{
  question: "What is the main reason Celebes Crested Macaques are critically endangered?",
  answers: [
    { text: "Overhunting for meat", correct: false },
    { text: "Habitat destruction and hunting", correct: true },
    { text: "Climate change", correct: false },
    { text: "Competition with other primates", correct: false }
  ]
},
{
  question: "Which organization plays a major role in protecting Sumatran tigers?",
  answers: [
    { text: "WWF (World Wildlife Fund)", correct: true },
    { text: "NASA", correct: false },
    { text: "Google", correct: false },
    { text: "National Geographic", correct: false }
  ]
},
{
  question: "Why do orangutans play an important role in their ecosystem?",
  answers: [
    { text: "They hunt invasive species", correct: false },
    { text: "They disperse seeds and help forests regenerate", correct: true },
    { text: "They dig water holes", correct: false },
    { text: "They act as natural predators", correct: false }
  ]
},
{
  question: "What is the main reason for the decline of Bawean deer populations?",
  answers: [
    { text: "Overhunting", correct: false },
    { text: "Deforestation and habitat fragmentation", correct: true },
    { text: "Competition with livestock", correct: false },
    { text: "Drought", correct: false }
  ]
},
{
  question: "Which conservation method is most effective for protecting the Anoa?",
  answers: [
    { text: "Captive breeding programs", correct: false },
    { text: "Strict habitat protection and anti-poaching laws", correct: true },
    { text: "Introduction to new environments", correct: false },
    { text: "Releasing them into cities", correct: false }
  ]
},
{
  question: "How do Tarsius primates communicate at night?",
  answers: [
    { text: "Through loud calls", correct: false },
    { text: "Using ultrasonic vocalizations", correct: true },
    { text: "By stomping on trees", correct: false },
    { text: "By flashing their eyes", correct: false }
  ]
},
{
  question: "Which factor makes Sumatran elephants vulnerable to extinction?",
  answers: [
    { text: "Large-scale deforestation", correct: true },
    { text: "Competition with tigers", correct: false },
    { text: "Cold weather", correct: false },
    { text: "Excessive breeding", correct: false }
  ]
},
{
  question: "Which of the following is a major threat to Komodo dragon populations?",
  answers: [
    { text: "Urban development and climate change", correct: true },
    { text: "Predation by larger reptiles", correct: false },
    { text: "Poaching for their fur", correct: false },
    { text: "Water pollution", correct: false }
  ]
}
]; //list of questions

const questionElement = document.getElementById("questionElem");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = Math.floor(Math.random() * questions.length);
let score = 0;
let questionNumber = 1;
let totalQuestion = 8

function startQuiz(){
  currentQuestionIndex = Math.floor(Math.random() * (questions.length + 1));
  score = 0
  nextButton.innerHTML = "Next"
  ShowQuestion();
}

function ShowQuestion(){
  let currentQuestion = questions[currentQuestionIndex]
  questionElement.innerHTML = (questionNumber) + "." + currentQuestion.question;
  
  nextButton.style.display = "none";
  answerButton.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("ans");
    answerButton.appendChild(button)
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  answerButton.innerHTML = "";
  questionNumber = 0
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) { 
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = "You have scored " + score + " of " + totalQuestion + "!!!";
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  questionNumber++;
  currentQuestionIndex = Math.floor(Math.random() * questions.length);
  if(questionNumber <= totalQuestion) {
    ShowQuestion()
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", ()=> {
  if (questionNumber <= totalQuestion) {
    handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();
