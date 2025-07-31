const form = document.querySelector('form')
const refresh = document.querySelector('#refresh')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const {Height,Weight}=form.elements;
    
    result.innerHTML=(weight/(height*height)*10000).toFixed(2);

 
       refresh.addEventListener('click',function(){
        
        Height.value="";
        Weight.value="";
        result.innerText="";
    })
})

