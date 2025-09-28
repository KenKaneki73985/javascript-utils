// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (general) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// September 29, 5:42 AM 2025
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

async function gen_WaitTextToExist(text, message="hide"){
    while (true) {

        let BODY = document.querySelector("body")
        
        if (BODY.innerText.includes(text)){
            if (message == "show"){
                show_GUI("success: found " + text , "GUI_v1", "blue", 0, "y80", 17, 3000)
            } 
            
            break
        }
        await sleep(100)
    }
}

function log(text) {
    console.log(text)
}

function selector(id) {
    return document.querySelector(id)
}

// ▬▬▬ SVG MAKER ▬▬▬▬▬▬▬▬▬▬▬▬▬
function gen_SVG_MAKER(pos, top, left, callback, svg_string){
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
function gen_GET_POSTS_DO_ACTION(container, callback) {
    
    let PostsContainer = document.querySelector(container)

    if (PostsContainer) {
        // show_GUI("success: found PostsContainer", "GUI_v1", "blue", 0, "y80", 17, 3000)

        // ─── YOU SHOULD USE FOREACH, LOOKS CLEANER. ─────────────
        let TopChildren_arr = Array.from(PostsContainer.children)
        TopChildren_arr.forEach(callback)
        
        // ─── FOR LOOP ─────────────
        // let TopChildren_arr = PostsContainer.children // get top level (direct / immediate) children / descendant
        // for (let index = 0; index < TopChildren_arr.length; index++) {
        //     callback(TopChildren_arr, index)
        // }
    } 
    
    else {
        // show_GUI("error: posts container not found", "GUI_v1", "red", 0, "y80", 17, 3000)
        log("❌ error: PostsContainer not found (gen_GET_POSTS_DO_ACTION)")
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

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
