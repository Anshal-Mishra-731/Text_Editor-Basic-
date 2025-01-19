document.designMode = "on"; 
function applyEx(action){ 
    document.execCommand(action, false, null);
}

let bold_true = false;
document.querySelector('.bold').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("bold");
    }
    else{
        khost.style.fontWeight = bold_true ? 'normal' : 'bold';
        bold_true = !(bold_true);
    }
})

let ital_true = false;
document.querySelector('.italic').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("italic"); 
    }
    else{
        khost.style.fontStyle = ital_true ? 'normal' : 'italic';
        ital_true = !(ital_true);
    }
})

let unter_true = false;
document.querySelector('.unter').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("underline"); 
    }
    else{
        khost.style.textDecoration = unter_true ? 'none' : 'underline';
        unter_true = !(unter_true);
    }
})

let alignl_true = false; 
let alignc_true = false; 
let alignr_true = false; 

document.querySelector('.alignl').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("justifyLeft"); 
    }
    else{
        if(!alignl_true){
            khost.style.textAlign = 'left'; 
            alignl_true = true; 
            alignc_true = false; 
            alignr_true = false; 
        }
        else{
            khost.style.textAlign = 'start'; 
            alignl_true = false; 
        }
    }
})
document.querySelector('.alignc').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("justifyCenter"); 
    }
    else{
        if(!alignc_true){
            khost.style.textAlign = 'center'; 
            alignc_true = true; 
            alignl_true = false; 
            alignr_true = false; 
        }
        else{
            khost.style.textAlign = 'start'; 
            alignc_true = false; 
        }
    }
})
document.querySelector('.alignr').addEventListener('click', () => {
    let khost = document.querySelector('.meinz');
    let selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        applyEx("justifyRight"); 
    }
    else{
        if(!alignr_true){
            khost.style.textAlign = 'right'; 
            alignr_true = true; 
            alignl_true = false; 
            alignc_true = false; 
        }
        else{
            khost.style.textAlign = 'start'; 
            alignr_true = false; 
        }
    }
})


