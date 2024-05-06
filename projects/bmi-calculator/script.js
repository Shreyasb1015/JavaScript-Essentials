const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{

    e.preventDefault() // Prevents the default action of the form i.e. submitting the form to the server
    const height=parseInt(document.querySelector('#height').value) // parseInt converts the string to integer
    console.log(height)
    const weight=parseInt(document.querySelector('#weight').value)
    console.log(weight)
    const results=document.querySelector('#results')

    if(height ==='' ||height < 0 || isNaN(height)){
        results.innerHTML='<h3>Please provide a valid height</h3>'
    }
    else if(weight ==='' || weight < 0 || isNaN(weight)){
        results.innerHTML='<h3>Please provide a valid weight</h3>'
    }
    else{
        const bmi=(weight/(height**2))*10000
        console.log(bmi)
        let bmiCategory=''
        if(bmi<18.5){
            bmiCategory='Underweight'
        }
        else if(bmi>=18.5 && bmi<=24.9){
            bmiCategory='Normal weight'
        }
        else if(bmi>=25 && bmi<=29.9){
            bmiCategory='Overweight'
        }
        else{
            bmiCategory='Obese'
        }
        results.innerHTML=`<h2>Your BMI is ${bmi.toFixed(2)}</h2>
        <h3>This is considered ${bmiCategory}</h3>`
    }
})