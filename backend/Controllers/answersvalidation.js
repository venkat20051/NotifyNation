const express = require('express');
const app = express();
app.use(express.json());
const { fun } = require('./emailsender');
const { ind } = require("./english"); // Assuming ind contains correct answer indices

const correctAnswers = {
  maths: ["154 sq cm", "5", "5 cm", "120 km", "25", "50 sq cm", "12", "$5", "25 sq cm", "24 cm","3", "$6.75", "60 sq cm", "120 km", "40", "81 sq cm", "300", "47", "60 km/h", "28","180°", "80 km/h", "225", "$100", "74", "7 cm", "64 sq cm", "3", "$0.50", "15","512", "$30", "44 cm", "13", "96 sq cm", "75 km/h", "30", "9 cm", "14", "6 cm" ,"125 cubic cm", "90 km/h", "16", "36 sq cm", "$250", "16", "35", "31.4 cm", "27", "10 cm","30 cm", "80 km/h", "30", "616 sq cm", "125", "113.04 cubic cm", "$320", "144", "60 cm", "41","$300", "11", "81", "5 cm", "19", "37.68 cm", "144 sq cm", "4 cm", "50", "30","750", "6 days", "42", "8 cm", "120", "0", "Right-angled", "60", "28.26 sq cm", "120",  "42",
    "25 sq cm",
    "80",
    "120 km/h",
    "75 sq cm",
    "$400",
    "15",
    "$1200",
    "16",
    "64 cubic cm",
    "28.26 sq cm",
    "9",
    "360°",
    "$12",
    "33",
    "15 sq cm",
    "132",
    "50 sq cm",
    "$6",
    "6"],
  science:[
    "154 sq cm",
    "5",
    "225 km",
    "7/12",
    "32",
    "8 cm",
    "5",
    "30",
    "52.5°",
    "12",
    "10 days",
    "3",
    "80 km/h",
    "7",
    "6",
    "90°",
    "80",
    "4",
"5/12",
    "12 sq cm",
    "240 km",
    "22",
    "It doubles",
    "$100",
    "$31.25",
    "15",
    "5 hours",
    "75 km/h",
    "25%",
    "52.5°",
    "135 km",
    "28",
    "$50",
    "45",
    "60°",
    "0%",
    "75%",
    "5 days",
"12",
    "30 km/h",
    "90 km/h",
    "$3.00",
    "20%",
    "7",
    "25%",
    "240 minutes",
    "80",
    "300 km",
    "6",
    "2 days",
    "$10",
    "35%",
    "30 cm",
    "$60",
    "$13.50",
    "$8,000",
    "$28",
    "3/10",
"2 m/s",
    "120 km",
    "$20",
    "12",
    "62.5",
    "$6.00",
    "30",
    "5 cm",
    "80 km/h",
    "8",
    "3",
    "20 liters",
    "5",
    "$12.50",
    "60 sq cm",
    "1/6",
    "$1000",
    "$30",
    "2 hours",
    "6",
"20",
    "400",
    "75 km/h",
    "8",
    "3 hours",
    "$100",
    "28 cm",
    "21",
    "60 km/h",
    "5 days",
    "8",
    "25 sq cm",
    "12.5 liters",
    "6",
    "5",
    "200",
    "144",
    "2/3",
    "21 km",
    "$60"
  ]
,
  english: [
    "Joyful",
    "Accommodate",
    "Easy",
    "Went",
    "Kind",
    "He goes to school.",
    "Careful",
    "Challenging",
    "Quiet",
    "Complex",
    "went",
    "Courageous",
    "Sad",
    "They are playing.",
    "Honest",
    "Fast",
    "Definitely",
    "Poor",
    "Hard",
    "Hardworking",
 "Pretty",
    "Occasion",
    "Pessimistic",
    "went",
    "Fearless",
    "She doesn't like ice cream.",
    "Accidental",
    "Furious",
    "Late",
    "Calm",
    "go",
    "Renowned",
    "Short",
    "He has a car.",
    "Sociable",
    "Prudent",
    "Acquaintance",
    "Soft",
    "Detailed",
    "Calm",
 "Joyful",
    "Easy",
    "She goes to the store.",
    "Accommodate",
    "Ran",
    "Dark",
    "Children",
    "The primary point",
    "Kind",
    "Is she going to the park?",
    "Fast",
    "He is happy.",
    "To understand",
    "I like apples, and I like oranges.",
    "Quiet",
    "To summarize",
    "Mice",
    "Challenging",
    "Let's eat, Grandma.",
    "Careful",
"Joyful",
    "Hardworking",
    "He doesn't like ice cream.",
    "Occasion",
    "Ate",
    "Dim",
    "Teeth",
    "The primary point",
    "Careful",
    "Is she happy?",
    "Quick",
    "They are friends.",
    "To think about",
    "I like tea, and I like coffee.",
    "Dirty",
    "To introduce the topic",
    "Geese",
    "Challenging",
    "Let's go home.",
    "Uncertain",
"Start",
    "They go to school.",
    "Easy",
    "Kind",
    "Saw",
    "To make young again",
    "Pretty",
    "The primary focus",
    "It's a nice day.",
    "Children",
    "Temporary",
    "Acomodate",
    "Shrink",
    "They have a car.",
    "Perfect",
    "Courageous",
    "Went",
    "Please sit down.",
    "Puzzle",
    "Joyful"
  ]
,
  general_awareness:["Joe Biden", "Tokyo", "1945", "Rabindranath Tagore", "Asia", "Pound", "Neil Armstrong", "Pacific Ocean", "Mahatma Gandhi", "1947","Lotus", "Mars", "Thomas Edison", "Nile", "1912", "Alexander Fleming", "Japan", "Vatican City", "Leonardo da Vinci", "Jupiter","Camel", "Indira Gandhi", "H2O", "Mercury", "Alexander Graham Bell", "Blue Whale", "Sahara", "Paris", "Peacock", "Canberra","Ice Hockey", "Nitrogen", "Euclid", "Venus", "China", "Ottawa", "Oxygen", "Barometer", "Isaac Newton", "Stapes","Sardar Patel", "Diamond", "Earth", "Nepal", "Mango", "Sarojini Naidu", "Lake Superior", "Femur", "George Washington", "Greenland","Thailand", "Yangtze", "Albert Einstein", "Liver", "Moscow", "Venus", "Mercury", "Tooth Enamel", "France", "Nitrogen","Cherry Blossom", "Gautama Buddha", "Canada", "100°C", "Mars", "Valentina Tereshkova", "Mandarin Chinese", "Asia", "Sumo Wrestling", "Michelangelo","Pacific Ocean", "Harper Lee", "Canberra", "Egypt", "Nile", "Vatican City", "Nitrogen", "Marie Curie", "Africa", "Avocado","Carbon Dioxide",
    "Elephant",
    "Rome",
    "William Shakespeare",
    "Pacific Ocean",
    "Yuri Gagarin",
    "Au",
    "Saturn",
    "Paris",
    "Australia",
    "Yen",
    "Charles Babbage",
    "Japan",
    "Michelangelo",
    "Blue Whale",
    "Cheetah",
    "Mandarin Chinese",
    "Australia",
    "Avocado",
    "Vatican City"]

};

// Reset and validate the answers per request
const validateAnswers = (req, res) => {
  var maths_score = 0;
  var science_score = 0;
  var english_score = 0;
  var gk_score = 0;

  const { data } = req.body;
  const { maths, science, english, general_awareness } = data;
  const { maths1, science1, english1, general_awareness1 } = ind; // Assuming ind contains answer indices
  const { email } = req.body;
  console.log(ind);

  // Validate Maths section
  // if (maths && maths1) {
    maths.forEach((selectedAnswer, questionIndex) => {
      const correctAnswer = correctAnswers.maths[maths1[questionIndex]];
      if (selectedAnswer === null) {
        maths_score -= 1;
      } else if (selectedAnswer === correctAnswer) {
        maths_score += 4;
      } else {
        maths_score -= 1;
      }
      console.log(`Maths Q${questionIndex + 1}: Selected=${selectedAnswer}, Correct=${correctAnswer}, Score=${maths_score}`);
    });
  // }

  // Validate Science section
  // if (science && science1) {
    science.forEach((selectedAnswer, questionIndex) => {
      const correctAnswer = correctAnswers.science[science1[questionIndex]];
      if (selectedAnswer === null) {
        science_score -= 1;
      } else if (selectedAnswer === correctAnswer) {
        science_score += 4;
      } else {
        science_score -= 1;
      }
      console.log(`Science Q${questionIndex + 1}: Selected=${selectedAnswer}, Correct=${correctAnswer}, Score=${science_score}`);
    });
  // }

  // Validate English section
  // if (english && english1) {
    english.forEach((selectedAnswer, questionIndex) => {
      const correctAnswer = correctAnswers.english[english1[questionIndex]];
      if (selectedAnswer === null) {
        english_score -= 1;
      } else if (selectedAnswer === correctAnswer) {
        english_score += 4;
      } else {
        english_score -= 1;
      }
      console.log(`English Q${questionIndex + 1}: Selected=${selectedAnswer}, Correct=${correctAnswer}, Score=${english_score}`);
    });
  // }

  // Validate General Awareness section
  // if (general_awareness && general_awareness1) {
    general_awareness.forEach((selectedAnswer, questionIndex) => {
      const correctAnswer = correctAnswers.general_awareness[general_awareness1[questionIndex]];
      if (selectedAnswer === null) {
        gk_score -= 1;
      } else if (selectedAnswer === correctAnswer) {
        gk_score += 4;
      } else {
        gk_score -= 1;
      }
      console.log(`General Awareness Q${questionIndex + 1}: Selected=${selectedAnswer}, Correct=${correctAnswer}, Score=${gk_score}`);
    });
  // }
  const validationResults = {'maths':maths_score, 'english':english_score, 'science':science_score, 'general_awareness':gk_score}
  console.log('Validation results:', validationResults);

  // Sending the result through email
  return fun(req, res, validationResults, email);
};

exports.validateAnswers = validateAnswers;
