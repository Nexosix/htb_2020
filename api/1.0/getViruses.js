const pool = require(__basedir + "/config/database.js");

const getViruses = async function (req, res) {

    try {
        let viruses = await pool.query("SELECT username FROM leaderboard");
        let names = new Array();

        let x = 0;
        for(let i = 0; i < 7; i++){
            names.push(viruses[x]["username"]);
            x++;

            if(x == viruses.length){
                x = 0;
            }
        }
        
        res.json({
            status: 'success',
            content: {
                viruses: names
            }
        });

    } catch(error){
        console.log(error);
        res.json({
            status: 'error',
            status: error
        });
    }

}

module.exports = getViruses;