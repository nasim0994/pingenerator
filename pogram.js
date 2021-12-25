
//Pin Generator Event:
const pinGeneratorBtn = document.getElementById('pinGeneratorBtn');
pinGeneratorBtn.addEventListener('click', function(){

    const generatorNumber = Math.floor(Math.random() * 8998 + 1000);
    document.getElementById('pinGeneratorInput').value = generatorNumber;
})




//Submit number btn event function:
function btn(value){
    document.getElementById("pinSubmitInput").value += value;
}

//clear btn event:
document.getElementById('clearBtn').addEventListener('click', function(){
    const pinSubmitInput = document.getElementById('pinSubmitInput').value = "";
})

// back Button Event:
document.getElementById('backBtn').addEventListener('click', function(){
    var inputValue = document.getElementById("pinSubmitInput").value;

    for (var i = 0; i < inputValue.length; i++){
        var output = inputValue.slice(0, -1);

        document.getElementById("pinSubmitInput").value = output;
     }
})
//submit Btn Event:

document.getElementById('submitBtn').addEventListener('click', function(){
    
    const pinGeneratorInput = document.getElementById('pinGeneratorInput').value;
    const pinSubmitInput = document.getElementById('pinSubmitInput').value;
    const wrongPin = document.getElementById('wrongPin');
    const pinArea = document.querySelector('.pinArea');
    const againTryPG = document.getElementById('againPinArea');


    if(pinGeneratorInput === pinSubmitInput){
        const correctPin = document.getElementById('correctPin');
        correctPin.style.display = 'block';

        pinArea.style.display = 'none';
        wrongPin.style.display = 'none';
        againTryPG.style.display = 'block'
    }
    else{
        
        wrongPin.style.display = 'block';
        document.getElementById('pinSubmitInput').value = "";
    }
})


//again pin generate 

document.getElementById('againPinArea').addEventListener('click', function(){
    const pinArea = document.querySelector('.pinArea');
    pinArea.style.display = 'block';
    document.getElementById('pinSubmitInput').value = "";
    document.getElementById('pinGeneratorInput').value = "";
})












//btn event function:
// function btnClick(id){
//     const btn7Value = document.getElementById(id).innerText;
//     const btnValueNumber = parseFloat(btn7Value);
//     return btnValueNumber;
// }
// input function:
// function inputEvent(){
//     const pinSubmitInput = document.getElementById('pinSubmitInput').value;
//     const pinSubmitInputNumber = parseFloat(pinSubmitInput);
    
    
// }
//inputResult Function:

// function inputResult(id){
//     document.getElementById('pinSubmitInput').value += id;
// }
// btn event without function:

// const btn8 = document.getElementById('btn8').addEventListener('click', function(){
//     const btn8Value = document.getElementById('btn8').innerText;
//     const btnValueNumber = parseFloat(btn8Value);

//     const pinSubmitInput = document.getElementById('pinSubmitInput').value;
//     const pinSubmitInputNumber = parseFloat(pinSubmitInput);

//     document.getElementById('pinSubmitInput').value += btnValueNumber;

// })

// document.getElementById('btn7').addEventListener('click', function(){

//         const btn7 = btnClick('btn7');
        
//         inputEvent();
    
//         inputResult(btn7)
        
    
//     })
//     document.getElementById('btn8').addEventListener('click', function(){
    
//         const btn8 = btnClick('btn8');
        
//         inputEvent();
    
//         inputResult(btn8)
        
    
//     })
//     document.getElementById('btn9').addEventListener('click', function(){
    
//         const btn9 = btnClick('btn9');
        
//         inputEvent();
    
//         inputResult(btn9)
        
    
//     })
//     document.getElementById('btn4').addEventListener('click', function(){
    
//         const btn4 = btnClick('btn4');
        
//         inputEvent();
    
//         inputResult(btn4)
        
    
//     })
//     document.getElementById('btn5').addEventListener('click', function(){
    
//         const btn5 = btnClick('btn5');
        
//         inputEvent();
    
//         inputResult(btn5)
        
    
//     })
//     document.getElementById('btn6').addEventListener('click', function(){
    
//         const btn6 = btnClick('btn6');
        
//         inputEvent();
    
//         inputResult(btn6)
        
    
//     })
//     document.getElementById('btn1').addEventListener('click', function(){
    
//         const btn1 = btnClick('btn1');
        
//         inputEvent();
    
//         inputResult(btn1)
        
    
//     })
//     document.getElementById('btn2').addEventListener('click', function(){
    
//         const btn2 = btnClick('btn2');
        
//         inputEvent();
    
//         inputResult(btn2)
        
    
//     })
//     document.getElementById('btn3').addEventListener('click', function(){
    
//         const btn3 = btnClick('btn3');
        
//         inputEvent();
    
//         inputResult(btn3)
        
    
//     })
//     document.getElementById('btn0').addEventListener('click', function(){
    
//         const btn0 = btnClick('btn0');
        
//         inputEvent();
    
//         inputResult(btn0)
        
    
//     })


