const pool = require(__basedir + "/config/database.js");

const setScore = async function (req, res) {

    try {

        let username = req.body.username;
        let score = req.body.score;

        let LeaderboardResult = await pool.query(`SELECT * FROM leaderboard WHERE username = '${username}'`);

        res.json({
            status: 'success',
            content: LeaderboardResult
        })


    } catch(error) {
        res.json({
            status: 'error',
            content: error
        });

        console.log(error);
    }


}

module.exports = setScore;