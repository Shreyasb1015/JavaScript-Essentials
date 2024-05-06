
let myDate=new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);  //object


let myCreatedDate=new Date( 2020,6,18);
console.log(myCreatedDate,toString());
// or
let myCreatedDate2=new Date( 2020,6,18, 11, 30, 25);
console.log(myCreatedDate2.toLocaleString());

//or 
let myCreatedDate3=new Date('2020-06-18');
console.log(myCreatedDate3.toLocaleString());

//or

let myCreatedDate4=new Date('4-14-2024');;
console.log(myCreatedDate4.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);  // 1614291740133

console.log(myCreatedDate.getTime());

//To convert the milliseconds to seconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);

//We can extract the month , year, day, hours, minutes, seconds from the date object

console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

newDate.toLocaleString('default',{

    weekday:"long",
    timeZone:'UTC'
})




