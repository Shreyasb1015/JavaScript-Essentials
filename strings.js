//In javascript strings can be created using single quotes, double quotes or backticks.
const name="Shreyas"
const count=10

console.log(name+count+"Value") //Shreyas10

//Instead of using + operator we can use backticks to create a string and use ${} to include variables in the string.

console.log(`Hello,I am ${name} and the count contains ${count}`)

//The above method is best way to deal with strings.

//Another way to create a string is using String constructor.

const gamename=new String("Cricket")

console.log(gamename) //String {"Cricket"};

//We can use different methods to get the len ,charaters of above created string.

console.log(typeof gamename) //object
console.log(gamename.length) //7
console.log(gamename[0])//C
console.log(gamename.charAt(2))//i
console.log(gamename.toUpperCase())//CRICKET
console.log(gamename.indexOf('i'))//2

const newString=gamename.substring(0,3)
console.log(newString)//Cri;

const anotherString=gamename.slice(0,3)
console.log(anotherString)//Cri;
const anotherString1=gamename.slice(-1)
console.log(anotherString1)

const newStringOne="   Hello   "
console.log(newStringOne.trim())//Hello

const url="https://www.google.com"

console.log(url.replace("https","http"))//https://www.google.com

console.log(url.includes("google"))//true
console.log(url.includes("facebook"))//false
console.log(url.startsWith("https"))//true

console.log(gamename.split(""))//["C", "r", "i", "c", "k", "e", "t"]
