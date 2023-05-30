function meeting(inputData) {

    let meetings = {};

    for (let key of inputData) {
        let [day, name] = key.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}
meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
// meeting(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']);