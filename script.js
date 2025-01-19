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

let dark_true = false; 
// what we just did here is called "Event Delegation"
document.querySelector('.gaat').addEventListener('click', (e) => {
    if(e.target.closest('.modes')){
    if(!dark_true){
        document.querySelector('.gaat').innerHTML = `    <div>
            <div class="d-flex flex-row justify-content-center mb-4">
                <span class="border border-primary p-2 ps-5 pe-5 rounded-pill bg-dark shadow text-white">TEXT EDITOR</span>
            </div>

            <div class="border border-primary rounded-3 d-flex flex-row bg-secondary shadow justify-content-around">
                <button class="btn btn-secondary bold"><img src="img assets/type-bold.svg" alt=""></button>
                <button class="btn btn-secondary italic"><img src="img assets/type-italic.svg" alt=""></button>
                <button class="btn btn-secondary unter"><img src="img assets/type-underline.svg" alt=""></button>
                <button class="btn btn-secondary unlist"><img src="img assets/list-ul.svg" alt=""></button>
                <button class="btn btn-secondary orlist"><img src="img assets/list-ol.svg" alt=""></button>
                <button class="btn btn-secondary back"><img src="img assets/skip-backward-circle-fill.svg" alt=""></button>
                <button class="btn btn-secondary front"><img src="img assets/skip-forward-circle-fill.svg" alt=""></button>
                <button class="btn btn-secondary alignl"><img src="img assets/justify-left.svg" alt=""></button>
                <button class="btn btn-secondary alignc"><img src="img assets/justify.svg" alt=""></button>
                <button class="btn btn-secondary alignr"><img src="img assets/justify-right.svg" alt=""></button>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="">1</a></li>
                        <li><a class="dropdown-item" href="">2</a></li>
                        <li><a class="dropdown-item" href="">3</a></li>
                        <li><a class="dropdown-item" href="">4</a></li>
                        <li><a class="dropdown-item" href="">5</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">Font</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                    </ul>
                </div>
                <input type="color" class="form-control form-control-color input1">
                <button class="btn btn-secondary modes"><img src="img assets/light-mode-svgrepo-com.svg" alt=""></button>
            </div>

            <div type="text" class="mt-5 border border-primary rounded-3 bg-dark shadow text-white meinz" contenteditable="true" placeholder="Start typing here......"></div>

            <div class="d-flex flex-row justify-content-center mt-4">
            <p class="border border-primary rounded-pill bg-dark text-white shadow p-2"> Word count : 0</p>
            </div>

        </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>`
    document.querySelector('.gaat').style.backgroundColor = "black";
    dark_true = true; 
    }
    else{
            document.querySelector('.gaat').innerHTML = `    <div>
            <div class="d-flex flex-row justify-content-center mb-4">
                <span class="border border-primary p-2 ps-5 pe-5 rounded-pill shadow text-black">TEXT EDITOR</span>
            </div>

            <div class="border border-primary rounded-3 d-flex flex-row bg-light shadow justify-content-around">
                <button class="btn btn-light bold"><img src="img assets/type-bold.svg" alt=""></button>
                <button class="btn btn-light italic"><img src="img assets/type-italic.svg" alt=""></button>
                <button class="btn btn-light unter"><img src="img assets/type-underline.svg" alt=""></button>
                <button class="btn btn-light unlist"><img src="img assets/list-ul.svg" alt=""></button>
                <button class="btn btn-light orlist"><img src="img assets/list-ol.svg" alt=""></button>
                <button class="btn btn-light back"><img src="img assets/skip-backward-circle-fill.svg" alt=""></button>
                <button class="btn btn-light front"><img src="img assets/skip-forward-circle-fill.svg" alt=""></button>
                <button class="btn btn-light alignl"><img src="img assets/justify-left.svg" alt=""></button>
                <button class="btn btn-light alignc"><img src="img assets/justify.svg" alt=""></button>
                <button class="btn btn-light alignr"><img src="img assets/justify-right.svg" alt=""></button>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="">1</a></li>
                        <li><a class="dropdown-item" href="">2</a></li>
                        <li><a class="dropdown-item" href="">3</a></li>
                        <li><a class="dropdown-item" href="">4</a></li>
                        <li><a class="dropdown-item" href="">5</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">Font</button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                        <li><a class="dropdown-item" href="">excommunication</a></li>
                    </ul>
                </div>
                <input type="color" class="form-control form-control-color input1">
                <button class="btn btn-light modes"><img src="img assets/dark-mode-svgrepo-com.svg" alt=""></button>
            </div>

            <div type="text" class="mt-5 border border-primary rounded-3 shadow meinz" contenteditable="true" placeholder="Start typing here......"></div>

            <div class="d-flex flex-row justify-content-center mt-4">
            <p class="border border-primary rounded-pill bg-light shadow p-2"> Word count : 0</p>
            </div>

        </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="script.js"></script>`
    document.querySelector('.gaat').style.backgroundColor = "white";
    dark_true = false; 
    }}
})


