const pool = require(__basedir + "/config/database.js");

const getLeaderboard = async function (req, res) {

    try{
        let Leaderboard = await pool.query("SELECT * FROM leaderboard");

        res.json({
            status: 'success',
            content: {
                players: Leaderboard
            }
        });
    } catch(error) {
        res.json({
            status: 'error',
            content: error
        })
    }
    
}

module.exports = getLeaderboard;