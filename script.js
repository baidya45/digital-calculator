let screen = document.getElementById('screen');

 buttons = document.querySelectorAll('button');
 let svalue = '';
// 
for(items of buttons){
    items.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
        screen.value+=buttontext;

        if(buttontext=='X')
        {
            buttontext = '*';
            svalue += buttontext;
            screen.value = svalue;
            
        }
        else if(buttontext=='÷')
        {
            buttontext = '/';
            svalue += buttontext;
            screen.value = svalue;
            
        }
        else if(buttontext=='AC')
        {
            buttontext = ""
            // svalue += buttontext;
            screen.value = buttontext;
            svalue = '';
        }
        else if(buttontext == '=')
        {
            svalue = eval(svalue);
            screen.value = svalue;
        }
        else{
            svalue += buttontext;
            screen.value = svalue;
        }
        
    })
}



