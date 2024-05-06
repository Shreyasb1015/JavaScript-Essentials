const coding=['js','cpp','java','python']

const values=coding.forEach((item)=>{
    console.log(item)
    return item //will return undefined
})
console.log(values); // undefined

//We cannot return a value from forEach() method. It always returns undefined.
const myNums=[1,2,3,4,5]


//filter method is used to filter the elements of an array based on a condition and it returns elements
// that satisfy the condition.
const newNums=myNums.filter((num)=>{

    return num>3;
})

//We can achieve same thing using forEach() method but it is not recommended as it requires array to be declared outside the loop.
const newNums2=[]

myNums.forEach((num) => {

    if(num >3){
        newNums2.push(num)
    }
})
console.log(newNums); // [4,5]

console.log(newNums2); // [4,5]
//filter returns an array of elements satisfying the condition, while forEach returns undefined.

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);

  userBooks=books.filter((bk)=>{

    return  bk.publish >= 1995 && bk.genre === "History"
  })

  console.log(userBooks);


  //Using map() method

  //Lets say we want to add 10 to each element of an array
  const myNumbers=[1,2,3,4,5,6,7,8,9,10]
  const newNumbers=myNumbers.map((num)=>{
    return num+10
  })
console.log(newNumbers);

///We can also use chaining of map and map,filter and filter and map and filter or any number of filters or map.
const nums=[1,2,3,4,5]
const newNumbers2=nums.map((num)=> num * 10).map((num)=> num+1)
console.log(newNumbers2)

//We can apply as many as map and filter.
const newNumbers3=nums.map((num)=> num * 10).map((num)=> num+1).filter((num)=> num >30)
console.log(newNumbers3)


//Use of reduce method
//reduce method is used to reduce the elements of an array to a single value.

//While using reduce method, we need to declare intialValue and we need to use it in reduce method.
//This intialValue is used  to initialize contents of accumulator .

const myNums2=[1,2,3,4,5]

const intialValue=0

const sum=myNums2.reduce((accumulator,currentValue)=>{

return accumulator+currentValue
},intialValue)

console.log(sum); //15


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceTopay=shoppingCart.reduce((acc,item)=>{

    return acc+item.price
},0)
console.log(priceTopay);