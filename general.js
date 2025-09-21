// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (general) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// September 22, 6:14 AM 2025
let STAY_LOOP = true
let HAS_EXECUTED = false
let ORIGINAL_TITLE = false

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

// ▬▬▬▬▬▬▬▬▬▬▬▬▬ FUNCTIONS ▬▬▬▬▬▬▬▬▬▬▬▬▬
function log(text) {
    console.log(text)
}

function selector(id) {
    return document.querySelector(id)
}

// ▬▬▬▬▬▬▬▬▬▬▬▬▬ SVG MAKER ▬▬▬▬▬▬▬▬▬▬▬▬▬
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
        // show_GUI("success: found posts container", "GUI_v1", "blue", 0, "y80", 17, 3000)

        // let TopChildren_arr = Array.from(PostsContainer.children)
        // TopChildren_arr.forEach(callback)

        let TopChildren_arr = PostsContainer.children // get top level (direct / immediate) children / descendant

        for (let index = 0; index < TopChildren_arr.length; index++) {
            callback(TopChildren_arr, index)
        }
    } 
    
    else {
        // show_GUI("error: posts container not found", "GUI_v1", "red", 0, "y80", 17, 3000)
        log("────> error: posts container not found")
    }
}

// function POST_ACTION(TopChildren_arr, index) {
//     log(`───────── Post ${index + 1} ─────────`)
//     log(TopChildren_arr[index].innerText)
// }

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
