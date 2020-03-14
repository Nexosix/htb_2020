const pool = require(__basedir + "/config/database.js");

const getViruses = async function (req, res) {

    try {
        let viruses = await pool.query("SELECT username FROM leaderboard");

        res.json({
            status: 'success',
            content: {
                viruses: viruses
            }
        });
    } catch(error){

        res.json({
            status: 'error',
            status: error
        });
    }

}

module.exports = getViruses;