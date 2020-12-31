function vacation (destination,length) {
    this.destination = destination;
    this.length = length
}

vacation.prototype.print = function () {
    console.log(this.destination + " " +
    this.length)
}

const maui = new vacation("maui,7")

maui.print();


class Vacation {
    constructor(destination, length) {
    this.destination = destination;
    this.length = length;
    }
    print() {
    console.log(`${this.destination} will take
    ${this.length} days.`);
    }
    }

    const trip = new Vacation("Santiago, Chile", 7);
    trip.print(); // Chile will take 7 days.

    class Expedition extends Vacation {
        constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
        }
        print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your")}`);
        }
        }

        const trip1 = new Expedition("Mt. Whitney", 3, [
            "sunglasses",
            "prayer flags",
            "camera"
            ]);
            trip.print();

let message = {
    id: "1",
    message: "hola",
    nombre: "daniel"
}

const createScream = function (logger) {
    return function (message) {
        logger(message.toUpperCase() + "!");
    }
}

const scream = createScream(message => console.log(message));

scream("hola mundo");

const string = "Restaurants in hana";
let urlFriendly = "";

for (var i = 0; i < string.length; i++) {
    if (string[i] === "") {
        urlFriendly += "-";
    } else {
        urlFriendly += string[i]
    }
}

/*
const loadAndMapMembers = compose(
    combineWith(sessionStorage, "members"),
    save(sessionStorage, "members"),
    scopeMembers (window),
    logMemberInfoToConsole,
    logFieldsToConsole("name.first"),
    countMembersBy("location.state"),

)
*/





// mutable data
let color_lawn = {
    title: "lawn",
    color: "00FF00",
    rating: 0
}

function rateColor(color, rating) {
    color.rating = rating;
    return color;
}

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);


//inmmutable copy 
//the color into new object

const rateColor1 = (color, rating) => {
    return Object.assign({}, color, { rating: rating });
}


console.log(rateColor1(color_lawn, 5).rating);
console.log(color_lawn.rating);

const rateColor3 = (color, rating) => ({
    ...color,
    rating
});

let list = [{ title: "red" }, { title: "blue" }, { title: "pink" }];

const addColor = (title, colors) => {
    colors.push({ title: title });
    return colors;
}

console.log(addColor("glam green", list).length);

const addColor2 = (title, array) => array.concat({ title });

console.log(addColor2("glam", list).length);
console.log(list.length);


// copia la lista original y le agrega un objeto en este caso
//title

const addColor3 = (title, list) => [...list, { title }];

const frederick = {
    name: "johns",
    canRead: false,
    canWrite: false
}

function selfEducate() {
    frederick.canRead = true;
    frederick.canWrite = true;
    return frederick
}

selfEducate();

//funciones puras

const selfEducate1 = person => ({
    ...person,
    canRead: true,
    canWrite: true
});

console.log(selfEducate1(frederick));
console.log(frederick)

//impure function 
/*
 const Header = (text)=> {
   let h1 = document.createElement("h1");
   h1.innerText = text;
   document.body.appendChild(h1);
 }

  Header("caused side effects");

*/
const school = ["yorktown", "washington", "wakefield"];

console.log(school.join(", "));

const wschools = school.filter(school => school[0] === "w");

console.log(wschools);



const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("washington & liberty",
    school).join(","));

console.log(school.join("\n"));



const highSchools = school.map(school => `${school} High
School`);

console.log(highSchools.join("\n"));

const highSchools1 = school.map(school => ({ name: school }));



const editName = (oldName, name, arr) =>
    arr.map(item => {
        if (item.name === oldName) {
            return {
                ...item,
                name
            };
        } else {
            return item;
        }
    });

const editName1 = (oldName, name1, arr) =>
    arr.map(item => (item.name === oldname
        ? { ...item, name1 } : item))


const ages = [21, 32, 12, 32, 43, 23];

const maxAge = ages.reduce((max, age) => {
    console.log(`${age} > ${max} = {age > max}`)
    if (age > max) {
        return age;
    }
    else {
        return max;
    }

}, 0);

console.log("maxage", maxAge);

const colors = [
    {
        id: "sd",
        title: "red",
        rating: 3
    },
    {
        id: "jbwsof",
        title: "big blue",
        rating: 2
    },
    {
        id: "prigbj",
        title: "grizzly grey",
        rating: 5
    },
    {
        id: "ryhbhsl",
        title: "banana",
    }
]

const hashColors = colors.reduce((hash, {id,title,rating}) => {
    hash[id] = {title,rating};
    return hash;
},{ });

console.log(hashColors);

añadirrating = ()=> {
   if(colors.id === "ryhbbhsl")
    Object.push(colors.rating = 4)
}


console.log(hashColors);

// Curring 

const userLogs = userName => message => console.log(`${userName} -> ${message}`);

const log  = userLogs("g1");
log("20 fake logs")

userfake = { "1": "3","3": "20"};

const getFakeMembers = (userfake)=>{
         this.userfake = userfake
};




    const countdown = (value, fn) => {
        fn(value);
        return value > 0 ? countdown (value - 1, fn) : value;

    };

    countdown(10,value => console.log(value))
    const dan = {
        type: "person",
        data: {
        gender: "male",
        info: {
        id: 22,
        fullname: {
        first: "Dan",
        last: "Deacon"
        }
        }
        }
        };

    const deepPick = (fields, object = {}) => {
        const [first, ...remaining] = fields.split(".");
        return remaining.length
        ? deepPick(remaining.join("."), object[first])
        : object[first]; }
        

        deepPick("data.info.fullname.first", dan);


        const template = "hh:mm:ss tt";
const clockTime = template
.replace("hh", "03")
.replace("mm", "33")
.replace("ss", "33")
.replace("tt", "PM");
console.log(clockTime);

const both = date => appendAMPM(civilianHours(date));

// componer un aglomerado de funciones
const both = compose(
    civilianHours,
    appendAMPM
    );
    both(new Date());

    //agrega las funciones con ...fns y luego hace un curring 
    // para sacarlas como una unica funcion

    const compose = (...fns) => arg =>
fns.reduce((composed, f) => f(composed), arg);

 // Complex to give manteinance

setInterval(logClockTime, 1000);
function logClockTime() {
// Get Time string as civilian time
let time = getClockTime();
// Clear the Console and log the time
console.clear();
console.log(time);
}
function getClockTime() {
// Get the Current Time
let date = new Date();
let time = "";
// Serialize clock time
let time = {
hours: date.getHours(),
minutes: date.getMinutes(),
seconds: date.getSeconds(),
ampm: "AM"
};

if (time.hours == 12) {
    time.ampm = "PM";
    } else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
    }
    // Prepend a 0 on the hours to make double digits
    if (time.hours < 10) {
    time.hours = "0" + time.hours;
    }
    // prepend a 0 on the minutes to make double digits
    if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
    }
    // prepend a 0 on the seconds to make double digits
    if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
    }
    // Format the clock time as a string "hh:mm:ss tt"
    return time.hours + ":" + time.minutes + ":" +
    time.seconds + " " + time.ampm;
    }

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);
const serializeClocktime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});


const civilianHours = clockTime => ({
    ...clockTime,
    hours: clockTime.hours > 12 ? clockTime.hours - 12 :
    clockTime.hours
    });
    const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM" });


const display = target => time => target(time);
const formatClock = format => time =>
format
.replace("hh", time.hours)
.replace("mm", time.minutes)
.replace("ss", time.seconds)
.replace("tt", time.ampm);
const prependZero = key => clockTime => ({
...clockTime,
key: clockTime[key] < 10 ? "0" + clockTime[key] :
clockTime[key]
});

const convertToCivilianTime = clockTime =>
compose(
appendAMPM,
civilianHours
)(clockTime);
const doubleDigits = civilianTime =>
compose(
prependZero("hours"),
prependZero("minutes"),
prependZero("seconds")
)(civilianTime);
const startTicking = () =>
setInterval(
compose(
clear,
getCurrentTime,
serializeClockTime,
convertToCivilianTime,
doubleDigits,
formatClock("hh:mm:ss tt"),
display(log)
),
oneSecond()
);