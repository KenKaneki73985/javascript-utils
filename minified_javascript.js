// May 26, 2025 3:47 PM


    // ---------- NEW (SET WINTITLE) ----------
    let HAS_EXECUTED = false
    let ORIGINAL_TITLE = false

    function GET_ORIGINAL_TITLE(){
        if (HAS_EXECUTED) return
        ORIGINAL_TITLE = document.title
        // setTimeout(() => { HAS_EXECUTED = false }, 36000000) // don't get title ever again
        HAS_EXECUTED = true
    }    
    
    async function SET_WINTITLE(signal, data = '') {
        // issue: it gets the wrong title, because "get original title" invokes immediately even before changing back to original title
        // ORIGINAL_TITLE = document.title 
        GET_ORIGINAL_TITLE() 
        
        document.title = signal + " " + data
        log("success: wintitle set: " + signal)

        await sleep(2000) // 2 seconds
        document.title = ORIGINAL_TITLE
    }

    // ---------- END NEW (SET WINTITLE) ----------

    function log(text) {
        console.log(text)
    }

    function selector(id) {
        return document.querySelector(id)
    }

    // ---------- SVG MAKER ----------
    function SVG_MAKER(pos, top, left, callback, svg_string){
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
