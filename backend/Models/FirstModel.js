const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kotanagavenkatateja:sct01jeePkocRrx2@tejacluster.tvwdw.mongodb.net/quizApp'; // Updated to include db name
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to get correct answers from the database
async function getCorrectAnswers() {
    try {
        await client.connect();
        const db = client.db('quizApp'); // Ensure this matches your actual database name
        const collection = db.collection('questions'); // Use the correct collection name
        return await collection.findOne({ quiz: 'basic-quiz' });
    } finally {
        await client.close(); // Ensure you close the connection after use
    }
}

module.exports = { getCorrectAnswers };
