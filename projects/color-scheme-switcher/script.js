const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

//Events-->
buttons.forEach((button)=>{
    console.log(button)

    //Whenever we add an event, w need to pass a value in function to get the event object
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id==='red'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='green'){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id==='yellow'){   
            body.style.backgroundColor=e.target.id;
        }

    })
});