const MyDB = require("../Models/FirstModel");

// Function to test API and insert data
const Testing = async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        await MyDB.insertMany(data);
        return res.status(200).json("Successfully added");
    } catch (err) {
        return res.status(404).json(err);
    }
};

// Function to validate answers
const validateAnswers = async (req, res) => {
    const userAnswers = req.body.answers; // User's submitted answers
    
    // Mock data for correct answers (you can replace this with a database call)
    const correctAnswers = {
        maths: ["A", "C", "B", "D", "A", "B", "C", "A", "D", "B"],
        science: ["B", "A", "D", "C", "B", "C", "A", "D", "B", "C"],
        english: ["C", "D", "A", "B", "C", "A", "D", "B", "A", "C"],
        general_awareness: ["A", "B", "C", "D", "A", "B", "D", "C", "A", "B"],
    };

    let score = 0;
    const results = {};

    try {
        // Loop through each section and compare answers
        Object.keys(userAnswers).forEach((section) => {
            const sectionAnswers = userAnswers[section] || [];
            const correctSectionAnswers = correctAnswers[section] || [];

            results[section] = {
                correct: [],
                incorrect: [],
            };

            sectionAnswers.forEach((answer, index) => {
                if (answer === correctSectionAnswers[index]) {
                    score++; // Increase score if answer is correct
                    results[section].correct.push(index); // Store correct answer index
                } else {
                    results[section].incorrect.push(index); // Store incorrect answer index
                }
            });
        });

        // Return the score and result
        res.json({
            score,
            results,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function for checking user (currently incomplete)
// const Checking_user = async (req, res) => {
//     const a = req.body;
//     console.log(a);
//     // Add logic here for checking user
// };

// Exports
module.exports = {
    DSP: Testing,
    Questions: validateAnswers,
    // Checking_user, // Uncomment if implemented
};
