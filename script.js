document.querySelector('.meinz').addEventListener('keydown', function (event) {
    if (event.key === "Enter") { 
        document.execCommand('insertHTML', false, '<br>');
    }
});

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

document.querySelector('.cinput').addEventListener('input', () => {
    SelectedColour = document.querySelector('.cinput').value; 
    selection = window.getSelection(); 
    if(selection.rangeCount > 0 && !(selection.isCollapsed)){
        document.execCommand('foreColor', false, SelectedColour); 
    }
    else{
        document.querySelector('.meinz').style.color = SelectedColour;
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

document.querySelector('.unlist').addEventListener('click', () => {
    document.execCommand('insertUnorderedList');
})

document.querySelector('.orlist').addEventListener('click', () => {
    document.execCommand('insertOrderedList');
})

document.querySelector('.back').addEventListener('click', () => {
    safal = document.execCommand('undo'); 
    if(!safal){
        dyalert('warning', 'no changes to undo'); 
    }
})

function dyalert(type, message){
    alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show dynamic-alert`;
    alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`; 

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.addEventListener('transitionend', () => alert.remove());
    }, 1500)

}

document.querySelector('.front').addEventListener('click', () => {
    safal = document.execCommand('redo'); 
    if(!safal){
        dyalert('warning', 'no changes to redo'); 
    }
})

function dyalert(type, message){
    alert = document.createElement('div');
    alert.className = `alert alert-${type} alert-dismissible fade show dynamic-alert`;
    alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`; 

    document.body.appendChild(alert);

    setTimeout(() => {
        alert.addEventListener('transitionend', () => alert.remove());
    }, 3500)

}

const sizeMap = {
    "10px": "1",
    "13px": "2",
    "16px": "3", 
    "18px": "4",
    "24px": "5",
    "32px": "6",
    "48px": "7"
};
items = document.querySelectorAll('#text-size-div #text-size'); 
items.forEach(item => {
    item.addEventListener('click', function (e) {
        selected = window.getSelection(); 
        if(selected.rangeCount > 0 && !(selected.isCollapsed)){
            e.preventDefault(); 
            selectedSize = this.getAttribute('data-size');
            execSize = sizeMap[selectedSize]; 
            document.execCommand('fontSize', false, execSize); 
        }
        else{
            e.preventDefault();
            selectedSize = this.getAttribute('data-size'); 
            document.querySelector('.meinz').style.fontSize = selectedSize; 
        }
    })
})



