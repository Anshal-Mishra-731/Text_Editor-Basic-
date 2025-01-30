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
    }, 1500)

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

const fontMapping = {
    "oswald-textO": "Oswald",
    "smooch-sans-textSS": "Smooch Sans",
    "playfair-display-textPD": "Playfair Display",
    "sixtyfour-convergence-textSC": "Sixtyfour Convergence",
    "atma-medium": "Atma",
    "nabla-textN": "Nabla",
    "honk-textH": "Honk",
    "kalnia-glaze-textKG": "Kalnia Glaze"
};
items2 = document.querySelectorAll('#text-font-div #text-font'); 
items2.forEach(item => {
    item.addEventListener('click', function (e) {
        selected = window.getSelection(); 
        if(selected.rangeCount > 0 && !(selected.isCollapsed)){
            e.preventDefault(); 
            selectedFont = this.getAttribute('data-font');
            execFont = fontMapping[selectedFont];  
            document.execCommand('fontName', false, execFont); 
        }
        else{
            e.preventDefault(); 
            selectedFont = this.getAttribute('data-font');
            document.querySelector('.meinz').classList.remove("oswald-textO", "smooch-sans-textSS", "playfair-display-textPD", 
                "sixtyfour-convergence-textSC", "atma-medium", "nabla-textN", "honk-textH", "kalnia-glaze-textKG") 
            document.querySelector('.meinz').classList.add(selectedFont); 
        }
    })
})

dark_mode = false; 
document.querySelector('.modes').addEventListener('click', function () {
    if(!dark_mode){
        document.querySelector('.modes').innerHTML = `<img src="img assets/light-mode-svgrepo-com.svg" alt="">`
        document.querySelector('.body').classList.add("bg-dark", "text-white");
        document.querySelector('.te').classList.remove("text-black"); 
        document.querySelector('.te').classList.add("text-white");
        document.querySelector('.panel').classList.add("bg-secondary");
        document.querySelectorAll('.btn2').forEach((btn) => {
            btn.classList.remove("btn-light");
            btn.classList.add("btn-secondary");
        }) 
        document.querySelector('.cinput').classList.remove("bg-light")
        document.querySelector('.cinput').classList.add("bg-secondary"); 
        document.querySelector('.cinput').value = "#ffffff"; 
        document.querySelector('.wc').classList.add("text-white");
        document.querySelector('.vtt').classList.add("text-white");
        document.querySelector('.meinz').classList.add('meinz2'); 
        dark_mode = !(dark_mode); 
    }
    else{
        document.querySelector('.modes').innerHTML = `<img src="img assets/dark-mode-svgrepo-com.svg" alt="">`
        document.querySelector('.body').classList.remove("bg-dark", "text-white");
        document.querySelector('.te').classList.add("text-black"); 
        document.querySelector('.te').classList.remove("text-white");
        document.querySelector('.panel').classList.remove("bg-secondary");
        document.querySelectorAll('.btn2').forEach((btn) => {
            btn.classList.add("btn-light");
            btn.classList.remove("btn-secondary");  
        }) 
        document.querySelector('.cinput').classList.add("bg-light")
        document.querySelector('.cinput').classList.remove("bg-secondary"); 
        document.querySelector('.cinput').value = "#000000"; 
        document.querySelector('.wc').classList.remove("text-white");
        document.querySelector('.vtt').classList.remove("text-white");
        document.querySelector('.meinz').classList.remove('meinz2');
        dark_mode = !(dark_mode);  
    }
})


function UpdateWC(){
    text = document.querySelector('.meinz').textContent; 
    words = text.split(/\s+/); 
    words = words.filter(word => (word.length > 0)); 
    document.querySelector('.wc').innerHTML = `Word count : ${words.length}`; 
}
document.querySelector('.meinz').addEventListener('input', UpdateWC); ; 
setInterval(UpdateWC, 500); 

function speech(){
    notepad = document.querySelector('.meinz');
    karm = document.querySelector('.vtt'); 

    SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();

    recognition.onstart = function(){
        karm.innerHTML = "Processing..."; 
    }
    recognition.onspeechend = function(){
        karm.innerHTML = "START 🎙️"; 
        recognition.stop();
    }

    recognition.onresult = function (e){
        transcriptos = e.results[0][0].transcript;
        notepad.textContent += transcriptos; 
    }

    recognition.start();
}
document.querySelector('.vtt').addEventListener('click', speech); 

