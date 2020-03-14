const pool = require(__basedir + "/config/database.js");

const getLeaderboard = async function (req, res) {

    res.json({
        status: 'success'
    });
}

module.exports = getLeaderboard;