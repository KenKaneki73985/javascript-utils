// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (general) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// October 08, 7:38 PM 2025
let STAY_LOOP = true
let HAS_EXECUTED = false
let ORIGINAL_TITLE = false

let sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

function gen_STOP_LOOP() {
    show_GUI("stop loop", "GUI_v1", "red", 0, "y80", 16, 3000)
    STAY_LOOP = false

    setTimeout(() => {
        STAY_LOOP = true
        show_GUI("STAY LOOP: true", "GUI_v1", "blue", 0, "y80", 16, 2000)
    }, 1000);
}

function gen_GET_ORIGINAL_TITLE(){
    if (HAS_EXECUTED) return
    ORIGINAL_TITLE = document.title
    // setTimeout(() => { HAS_EXECUTED = false }, 36000000) 
    HAS_EXECUTED = true // don't get title ever again
}    

async function gen_SET_WINTITLE(signal, data = '', ms = 2000) {
    // ORIGINAL_TITLE = document.title; issue: it gets wrong title, coz "get original title" invokes immediately even before changing back to original title
    gen_GET_ORIGINAL_TITLE()  
    
    document.title = signal + " " + data
    log("success: wintitle set: " + signal)

    await sleep(ms) // 2 seconds
    document.title = ORIGINAL_TITLE
}

function log(text) {
    console.log(text)
}

// ▬▬▬ SVG MAKER ▬▬▬▬▬▬▬▬▬▬▬▬▬
function gen_ADD_SVG(pos, top, left, callback, svg_string){
    let SVG_BTN = document.createElement('button')
    SVG_BTN.innerHTML = svg_string
    SVG_BTN.style.border = "none"
    SVG_BTN.style.position = pos // 'fixed'

    SVG_BTN.style.top = top // '80%'
    SVG_BTN.style.left = left // '80%'
    SVG_BTN.style.padding = '0px'
    SVG_BTN.style.background = "none"
    SVG_BTN.style.zIndex = '9999'
    SVG_BTN.addEventListener('click', () => {
        callback()
    })
    
    document.body.appendChild(SVG_BTN)
}

// ▬▬▬ GET POSTS ▬▬▬▬▬▬▬▬▬▬▬▬▬
function gen_GetTopChildrenDoAction(ContainerID, callback) {
    
    let PostsContainer = document.querySelector(ContainerID)

    if (PostsContainer) {
        // show_GUI("success: found PostsContainer", "GUI_v1", "blue", 0, "y80", 17, 3000)

        // ─── YOU SHOULD USE FOREACH, LOOKS CLEANER. ─────────────
        let TopChildren_arr = Array.from(PostsContainer.children)
        TopChildren_arr.forEach(callback)
        
        // ─── FOR LOOP ─────────────
        // let TopChildren_arr = PostsContainer.children // get top level/direct/immediate children/descendant
        // for (let index = 0; index < TopChildren_arr.length; index++) {
        //     callback(TopChildren_arr, index)
        // }
    } 
    
    else {
        // show_GUI("error: posts container not found", "GUI_v1", "red", 0, "y80", 17, 3000)
        log("❌ error: PostsContainer not found (gen_GetTopChildrenDoAction)")
    }
}

// ─── FOREEACH ─────────────
// function POST_ACTION(SingleTopChild, index, array) {
//     log(`───────── Post ${index + 1} ─────────`)
//     log(SingleTopChild.innerText)
// }

// ─── FOR LOOP ─────────────
// function POST_ACTION(TopChildren_arr, index) {
//     log(`───────── Post ${index + 1} ─────────`)
//     log(TopChildren_arr[index].innerText)
// }

async function WaitTextToExist(text, message="hide"){

    while (true) {

        if (document.body.innerText.includes(text)){

            message == "showGUI" ? show_GUI('☑️ success: found ' + text + ' (gen_WaitTextToExist)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
            log('☑️ success: found "' + text + '" (gen_WaitTextToExist)')
            break
        }

        message == "showGUI" ? show_GUI('⏳ waiting for "' + text + '" (gen_WaitTextToExist)', "GUI_v1", "green", 0, "y80", 17, 3000) : ''
        log('⏳ waiting for "' + text + '" (gen_WaitTextToExist)')
        await sleep(100)
    }
}

async function WaitElementToExist(ElementID, message="hide"){

    while (true) {

        let Element = document.querySelector(ElementID)

        if (Element){

            message == "showGUI" ? show_GUI('☑️ success: found "' + Element + '" (gen_WaitElementToExist)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
            
            log('☑️ success: found "' + Element + '" (gen_WaitElementToExist)')
            break
        }

        message == "showGUI" ? show_GUI('⏳ waiting for "' + Element + '" (gen_WaitElementToExist)', "GUI_v1", "green", 0, "y80", 17, 3000) : ''
        log('⏳ waiting for "' + Element + '" (gen_WaitElementToExist)')
        await sleep(100)
    }
}

// let FoundElement = FindTextElement("Songs")
// FoundElement.style.border = "3px solid yellow"
function FindTextElement(text, message="hide"){
    let AllElements_arr = Array.from(document.querySelectorAll("*"))

    // ─── FIND TEXT ELEMENT ─────────────
    let FoundElement = AllElements_arr.find(FindTextElement)

    function FindTextElement(element){

        let ElementChildNodes_arr = Array.from(element.childNodes)
        
        if (ElementChildNodes_arr.some(FindElementTextNode)){
            return true
        }

        // ─── FUNCTION ─────────────
        function FindElementTextNode(ChildNode) {
            if (ChildNode.nodeType === Node.TEXT_NODE && ChildNode.textContent == text){
                return true
            }
        }
    }

    if (FoundElement) {
        message == "showGUI" ? show_GUI('☑️ success: found "' + text + '" (gen_FindTextElement)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
        log('☑️ success: found "' + text + '" (gen_FindTextElement)')
        log('☑️ FoundElement: ' + FoundElement + ' (gen_FindTextElement)')
        return FoundElement
    } 
    
    else if (!FoundElement) {
        message == "showGUI" ? show_GUI('❌ error: not found "' + text + '" (gen_FindTextElement)', "GUI_v1", "red", 0, "y80", 17, 3000) : ''
        log('❌ error: not found "' + text + '" (gen_FindTextElement)')
        return false
    }
}

function test_hello(){
    show_GUI('hello test 123', "GUI_v1", "blue", 0, "y80", 17, 3000)
}
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
