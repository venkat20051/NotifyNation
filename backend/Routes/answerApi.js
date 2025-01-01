// const express = require('express');
// const { validateAnswers } = require('./schema'); // Import schema functions

// const router = express.Router();

// // Route to validate answers
// router.post('/validate-answers', validateAnswers);

// module.exports = router;

const express = require('express');
const app = express();
app.use(express.json());
const correctAnswers = {
    maths: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  // Correct indexes for maths questions
    science: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    english: [0, 1, 2, 0, 2, 2, 2, 0, 1, 1],
    general_awareness: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
 
app.post('/validate-answers', (req, res) => {
    const { maths, science, english, general_awareness } = req.body;
  
    // const validationResults = {
    //   maths: [],
    //   science: [],
    //   english: [],
    //   general_awareness: []
    // };
  
    // Validate Maths section
    maths.forEach((selectedIndex, questionIndex) => {
      // validationResults.maths.push(selectedIndex === correctAnswers.maths[questionIndex]);
      
    });
  
    // Validate Science section
    science.forEach((selectedIndex, questionIndex) => {
      // validationResults.science.push(selectedIndex === correctAnswers.science[questionIndex]);
      
    });
  
    // Validate English section
    english.forEach((selectedIndex, questionIndex) => {
      // validationResults.english.push(selectedIndex === correctAnswers.english[questionIndex]);
      
    });
  
    // Validate General Awareness section
    general_awareness.forEach((selectedIndex, questionIndex) => {
      // validationResults.general_awareness.push(selectedIndex === correctAnswers.general_awareness[questionIndex]);
     
    });
  
    // Return the validation result (true if correct, false if incorrect)
    
    return res.json(validationResults);
  });
  