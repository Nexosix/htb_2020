const pool = require(__basedir + "/config/database.js");

const setScore = async function (req, res) {

    try {

        let username = req.body.username;
        let new_score = req.body.score;

        let dbResult = await pool.query(`SELECT score FROM leaderboard WHERE username = '${username}'`);
        let score = dbResult[0]["score"];

        if(new_score > score) {
            
            let dbUpdate = await pool.query(`UPDATE leaderboard SET score = ${new_score} WHERE username = '${username}'`);
        }

        res.json({
            status: 'success'
        });
    } catch(error) {
        res.json({
            status: 'error',
            content: error
        });

        console.log(error);
    }


}

module.exports = setScore;