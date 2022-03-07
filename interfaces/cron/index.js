const cron = require("node-cron");
const timeOptions = {
    everyDayEarlyInTheMorning:"0 2 * * *",
    every2Seconds:"*/2 * * * *",
    every10Seconds:"*/10 * * * *"
}


logger = (f) => async () => {
    try {
        await f()
    } catch (error) {
        console.error(error)
    }
}


module.exports = function (uoc) {
    const events = require('./events')({timeOptions, uoc})
    events.forEach(({time, uoc}) => {
        cron.schedule(time, logger(uoc))    
    });
    
    console.log("Cron started")
} 