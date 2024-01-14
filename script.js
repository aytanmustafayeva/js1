var customerName = 'Aytan';
var customerLastName = 'Mustafayeva';
var customerId = '1235215457';
var total = 205.6;
var customerGender = true; // man true, woman false
var address = 'kocaeli izmit';
var address = {
    city:'kocaeli',
    district: 'izmit',

}


var hoppies = ['cinema', 'book', 'sport'];


var order1 = Number ('100');
var order2 = Number ('150');

var total = order1 + order2;
console.log(total);



var yearOfBirth = 1969;
console.log(new Date().getFullYear()-yearOfBirth);



var course = 'Modern javascript Kursu';
console.log(course.length);


var can = {
    height: '1.80',
    weight: '90'
}


var Ada = {
    height: '1.65',
    weight: '64'
}


let IndexCan;
let IndexAda;


console.log(adaheight + adaheight);
console.log(canheight + canheight);


var adaheight = 1.50;
var canheight = 1.70;


let kgCan= 60;
let kgAda = 40;

IndexAda = (kgAda) / (adaheight*adaheight);
IndexCan = (kgCan) / (canheight*canheight );
console.log(IndexCan, IndexAda);


let adaHigherIndex = IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("ada's weight is higher than can's weight  "+adaHigherIndex);
console.log("can's weight is higher than ada's weight  " + canHigherIndex);







var date = new Date();

console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getDay());





var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);
console.log(dtC);


var birthday = new Date('8/1/1985');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);


var motherDay = new Date();
motherDay.setHours(0,0,0,0);
motherDay.setFullYear(2019);
motherDay.setDate(1);
motherDay.setMonth(4);


while(motherDay.getDay() != 0) {
    motherDay.setDate(motherDay.getDate()+1);
}

motherDay.setDate(motherDay.getDate()+7);
console.log(motherDay);


val = isNaN('a10');
var bum = 10.25645899;
val = bum.toPrecision(5);
val = bum.toFixed(4);


val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.7);
val = Math.ceil(2.4);
val= Math.floor(2.5);
val = Math.sqrt(64);
val = Math.pow(2,4);   
val = Math.abs(-100);
val = math.min(2, 4, 8, 6, 2, 4);
val = math.max(2, 4, 8, 6, 2, 4);
val = math.random();
val = math.floor(math.random()*100+1);



test = Math.min(1, 2, 10, 56, 20);
test = Math.max(1, 2, 10, 56, 20);


var num = 15.4256425624556;
console.log(num.toPrecision(3));
console.log(num.toFixed(4));
console.log(math.round(num));
console.log(math.ceil(num));
console.log(math.floor(num));


var min = 50;
var max = 100;

console.log(Math.floor(min+math.random()*(max-min)));


var brutmaas = 3700;
var brutmesai = 10.3;
var mesaisuresi = 42;

var total = brutmaas + (brutmesai*mesaisuresi);



var total2 = (brutmaas - ((brutmaas*25)/100));
console.log(total.toFixed(2), total2.toFixed(2));



var sentence = " Template literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern javascript KURSU sifirdan ileri seviye";


console.log(sentence.length);
console.log(url.length);

console.log(sentence.trim().split(' ').length);


console.log(sentence.toLowerCase());
console.log(url.toLowerCase());



console.log(sentence.trim());


console.log(sentence.replace('-', ''));
var str = 'http://';
console.log(url.substr(str.length));

console.log(url.slice(str.length));

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));


console.log(url.toLowerCase()
    .replace(/ /g, '-')
    .replace(/ /g, '-')
    .replace(/ /g, '-')
    .replace(/ /g, '-')
)



// ternary operator
const fullName = 'Aytan';
const city = 'Baku';
const yearOfBirth = 2002;


let val;


val = `my name is ${fullName} I am ${2024-yearOfBirth>=18?'over 18':'under 18'} and I live in ${city}`;


console.log(val);


let names = ['cinar', 'sena', 'ada', 'rasad'];
let years = [2017, 1999, 2012, 2010];
let mix = ['sadik', 'turan', 1983, null, undefined, ['cinema', 'book']];


console.log(names[0]);

names[names.length] = 'emel';

years.push(1986);
years.unshift(1986);


// reverse
names.reverse();

// sort
years.sort();

// concat
let sp = years.concat(names);
console.log(sp);

console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years);
console.log(mix);



var numbers = [1, 2, 5, 80, 15, 8];

function compare(a,b) {
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;

}

console.log(numbers.sort(compare));



console.log(arr.indexOf('opel'));
console.log(arr.includes('opel'));


var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2);


var arr3 = arr.concat(arr2);
console.log(arr3);

console.log(arr3.splice(6,2));

console(arr3);


var studentA = ['Yigit', 'bilgi', 2010];
var studentB = ['Sena', 'Turan', 1999];
var studentC = ['Ahmet', 'Turan', 1998];

var students = [studentA, studentB, studentC];

console.log(students);

console.log(students[0][0]);




var arr = {
    id: 'bmw116d_1234',
    model: '116d',
    year: 2015,
    colour: 'white',
    serviceId: [{
        id: 'bmw116d_1234_1',
        date: '30.01.2016',
        km: 13000,
        totalFee: 900,
        detailsOfService: [{
            id: 1,
            process: 'changeOil',
            fee: 300
        },
        {
            id: 2,
            process: 'changeOil',
            fee: 300
        },
        {
            id: 3,
            process: 'changeOil',
            fee: 300
        }]
    },
    {
        id: 'bmw116d_1234_1',
        date: '30.01.2016',
        km: 13000,
        totalFee: 900,
        detailsOfService: [{
            id: 1,
            process: 'changeOil',
            fee: 300
        },
        {
            id: 2,
            process: 'changeOil',
            fee: 300
        },
        {
            id: 3,
            process: 'changeOil',
            fee: 300
        }]
    }


    ]


}


console.log(arr);