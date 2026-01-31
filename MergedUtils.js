// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ utils GENERAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// reload_ID = "iddd2RZT"
// reload_TIME = February 01, 2:01 AM 2026

let STAY_LOOP = true
let HAS_EXECUTED = false
let ORIGINAL_TITLE = false

let sleep = (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

function gen_STOP_LOOP() {
    message("stop loop", "GUI_v1", "red", 0, "y80", 16, 3000)
    STAY_LOOP = false

    setTimeout(() => {
        STAY_LOOP = true
        message("STAY LOOP: true", "GUI_v1", "blue", 0, "y80", 16, 2000)
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

function log_____(text) {
    console.log(text)
}

// â–¬â–¬â–¬ SVG MAKER â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬
// gen_ADD_SVG(OpenHistory,    "fixed", '2.7%',  '82.9%',  '<svg width="24px" height="24px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M5.81824 6.72729V14H13.091" stroke="#0080ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981" stroke="#0080ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M24.005 12L24.0038 24.0088L32.4832 32.4882" stroke="#0080ff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>')
function gen_ADD_SVG(callback, pos, top, left, svg_string){
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

// â–¬â–¬â–¬ GET POSTS â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬
function gen_GetTopChildrenDoAction(ContainerID, callback) {
    
    let PostsContainer = document.querySelector(ContainerID)

    if (PostsContainer) {
        // message("success: found PostsContainer", "GUI_v1", "blue", 0, "y80", 17, 3000)

        // â”€â”€â”€ YOU SHOULD USE FOREACH, LOOKS CLEANER. â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        let TopChildren_arr = Array.from(PostsContainer.children)
        TopChildren_arr.forEach(callback)
        
        // â”€â”€â”€ FOR LOOP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        // let TopChildren_arr = PostsContainer.children // get top level/direct/immediate children/descendant
        // for (let index = 0; index < TopChildren_arr.length; index++) {
        //     callback(TopChildren_arr, index)
        // }
    } 
    
    else {
        // message("error: posts container not found", "GUI_v1", "red", 0, "y80", 17, 3000)
        log("âŒ error: PostsContainer not found (gen_GetTopChildrenDoAction)")
    }
}

// â”€â”€â”€ FOREEACH â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// function POST_ACTION(SingleTopChild, index, array) {
//     log(`â”€â”€â”€â”€â”€â”€â”€â”€â”€ Post ${index + 1} â”€â”€â”€â”€â”€â”€â”€â”€â”€`)
//     log(SingleTopChild.innerText)
// }

// â”€â”€â”€ FOR LOOP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// function POST_ACTION(TopChildren_arr, index) {
//     log(`â”€â”€â”€â”€â”€â”€â”€â”€â”€ Post ${index + 1} â”€â”€â”€â”€â”€â”€â”€â”€â”€`)
//     log(TopChildren_arr[index].innerText)
// }

async function WaitTextToExist(text, message="hide"){
    // WATCH OUT FOR IFRAMES. IT MAY NOT WORK PROPERLY THERE.

    while (true) {

        if (document.body.innerText.includes(text)){

            message == "showGUI" ? message('â˜‘ï¸ success: found  ' + text + ' (WaitTextToExist)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
            log('â˜‘ï¸ success: found "' + text + '" (WaitTextToExist)')
            break
        }

        message == "showGUI" ? message('â³ waiting for "' + text + '" (WaitTextToExist)', "GUI_v1", "green", 0, "y80", 17, 3000) : ''
        log('â³ waiting for "' + text + '" (WaitTextToExist)')
        await sleep(100)
    }
}

async function WaitElementToExist(ElementID, message="hide"){
    // WATCH OUT FOR IFRAMES. IT MAY NOT WORK PROPERLY THERE.

    while (true) {

        let Element = document.querySelector(ElementID)

        if (Element){

            message == "showGUI" ? message('â˜‘ï¸ success: found "' + Element + '" (WaitElementToExist)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
            
            log('â˜‘ï¸ success: found "' + Element + '" (WaitElementToExist)')
            return Element
            // break
        }

        message == "showGUI" ? message('â³ waiting for "' + Element + '" (WaitElementToExist)', "GUI_v1", "green", 0, "y80", 17, 3000) : ''
        log('â³ waiting for "' + Element + '" (WaitElementToExist)')
        await sleep(100)
    }
}

// let FoundElement = FindTextElement("Songs")
// FoundElement.style.border = "3px solid yellow"
function FindTextElement(text, message="hide"){
    // WATCH OUT FOR IFRAMES. IT MAY NOT WORK PROPERLY THERE.

    let AllElements_arr = Array.from(document.querySelectorAll("*"))

    // â”€â”€â”€ FIND TEXT ELEMENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    let FoundElement = AllElements_arr.find(FindTextElement)

    function FindTextElement(element){

        let ElementChildNodes_arr = Array.from(element.childNodes)
        
        if (ElementChildNodes_arr.some(FindElementTextNode)){
            return true
        }

        // â”€â”€â”€ FUNCTION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        function FindElementTextNode(ChildNode) {
            if (ChildNode.nodeType === Node.TEXT_NODE && ChildNode.textContent == text){
                return true
            }
        }
    }

    if (FoundElement) {
        message == "showGUI" ? message('â˜‘ï¸ success: found "' + text + '" (FindTextElement)', "GUI_v1", "blue", 0, "y80", 17, 3000) : ''
        log('â˜‘ï¸ success: found "' + text + '" (FindTextElement)')
        log('â˜‘ï¸ FoundElement: ' + FoundElement + ' (FindTextElement)')
        return FoundElement
    } 
    
    else if (!FoundElement) {
        message == "showGUI" ? message('âŒ error: not found "' + text + '" (FindTextElement)', "GUI_v1", "red", 0, "y80", 17, 3000) : ''
        log('âŒ error: not found "' + text + '" (FindTextElement)')
        return false
    }
}


// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ utils MESSAGE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function message(text, GUI, color, extra_xpos, ypos, fontsize, time){
    // MyMessageInstance.message("hello", "GUI_v1", "green", 0, "y80", 16, 3000)
    MyMessageInstance.message(text, GUI, color, extra_xpos, ypos, fontsize, time)
    // log(text)
}

function hide_GUI(GUI){
    message("hide GUI", GUI, "green", 0, "y180", 16, 100) // 180 = vertically hidden
}

class DYNAMIC_MESSAGE {
    constructor() {
        this.messageElements = {}; // Store references to active MyMessageInstance elements
        this.fadeTimers = {}; // Store references to fade timers
    }

    message(text, category, bgColor = 'green', extra_xpos = 0, ypos = "y10", fontSize = 10, duration = 2000) {
        // Remove existing MyMessageInstance with this category if it exists
        this.hideMessage(category);
        
        // Create MyMessageInstance element
        const messageElement = document.createElement('div');
        messageElement.innerText = text;
        messageElement.style.position = 'fixed'
        messageElement.style.zIndex = '9999'

        // â”€â”€â”€ padding â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        // NOTES: padding top/bot in claude.ai is streched out
        // messageElement.style.padding = '10px 15px 10px 15px'; // top right bot left - May 2025 
        messageElement.style.paddingTop    = "9px"
        messageElement.style.paddingBottom = "9px"
        messageElement.style.paddingLeft   = "12px"
        messageElement.style.paddingRight  = "12px"

        messageElement.style.borderRadius = '4px'
        messageElement.style.color = 'white'
        messageElement.style.fontFamily = "Consolas"
        messageElement.style.fontSize = `${fontSize}px`
        messageElement.style.backgroundColor = bgColor;
        messageElement.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)'
        messageElement.style.transition = 'opacity 1s ease-in-out'
        messageElement.style.opacity = '1'; // Start fully visible
        // messageElement.style.opacity = '.8'; // Start fully visible
        
        // â–¬â–¬â–¬ CENTERING â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬
        // higher num = text goes left more (for text_length * 5.1)
        // lower num = text goes right more (for text_length * 5.1)

        const text_length = text.length
        let xpos_percent = 0

        // pinVSCODE
        // â”€â”€â”€ FONT SIZE 17 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        if (fontSize == 17){
            const percent_per_char = text_length * 0.31 // 0.31 (ok for short)
            // const percent_per_char = text_length * 0.37 // .3 (bit ok for long)
            xpos_percent = 49.2 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
        } 

        // â”€â”€â”€ FONT SIZE 15 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        else if (fontSize == 15){
            const percent_per_char = text_length * 0.28 // 0.31 (ok for short)
            // const percent_per_char = text_length * 0.37 // .3 (bit ok for long)
            xpos_percent = 49.3 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
        } 
        
        // â”€â”€â”€ FONT SIZE NOT SET â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        else {
            const percent_per_char = text_length * 0.31 // 0.31 (ok for short)
            xpos_percent = 49.2 - percent_per_char + extra_xpos // 49.2 (ok for 0.31 perc)
        }

        // â–¬â–¬â–¬ X POSITION â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬
        messageElement.style.left = `${xpos_percent}%`

        // â–¬â–¬â–¬ Y POSITION â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬
        const numeric_part_ypos = ypos.replace(/[^0-9]/g, '');
        const integer_ypos_percent = parseInt(numeric_part_ypos, 10)
        messageElement.style.top = `${integer_ypos_percent}%`

        // â”€â”€â”€ Add to DOM â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        document.body.appendChild(messageElement);
        this.messageElements[category] = messageElement;
        
        // â”€â”€â”€ Set timeout to start fade â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        const fadeDelay = 1000; // Start fading 1000ms before removal
        const fadeStartTime = duration - fadeDelay;
        
        // â”€â”€â”€ Clear any existing timers for this category â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        if (this.fadeTimers[category]) {
            clearTimeout(this.fadeTimers[category]);
        }
        
        // â”€â”€â”€ Set timer to start the fadeout â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        this.fadeTimers[category] = setTimeout(() => {
            if (this.messageElements[category] === messageElement) {
                messageElement.style.opacity = '0';
                
                // Set another timeout for actual removal after fade completes
                setTimeout(() => {
                    // Only remove if this element is still the active one for this category
                    if (this.messageElements[category] === messageElement) {
                        this.hideMessage(category);
                    }
                }, fadeDelay);
            }
        }, fadeStartTime);
        
        return messageElement;
    }
    
    // Hide/remove a specific MyMessageInstance
    hideMessage(category) {
        if (this.messageElements[category]) {
            document.body.removeChild(this.messageElements[category]);
            delete this.messageElements[category];
            
            // Clear any pending fade timers
            if (this.fadeTimers[category]) {
                clearTimeout(this.fadeTimers[category]);
                delete this.fadeTimers[category];
            }
        }
    }
    
    // Hide all active messages
    hideAllMessages() {
        for (const category in this.messageElements) {
            if (this.messageElements.hasOwnProperty(category)) {
                this.hideMessage(category);
            }
        }
    }
}

// Create a global instance of the MyMessageInstance system
const MyMessageInstance = new DYNAMIC_MESSAGE();

// Make it available globally
window.MyMessageInstance = MyMessageInstance;

// divider-end

// â”€â”€â”€ SIZE 17 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// message("w", "GUI_v1", "blue", 0, 75, 17, 3600000)
// message("wwww", "GUI_v2", "blue", 0, "y80", 17, 3600000)
// message("www www", "GUI_v3", "blue", 0, 85, 17, 3600000)
// message("first || .. hello a how to a life s17", "GUI_v1", "blue", 0, "y75", 17, 3600000)
// message("second where did I go ?|| ... s17", "GUI_v2", "blue", 0, "y80", 17, 3600000)
// message("third some sort of window  s17", "GUI_v3", "blue", 0, "y85", 17, 3600000)

// message("first || .. hello a how to a life s17", "GUI_v1", "blue", 0, "y80", 17, 3600000)
// message("hello there wassup", "GUI_v1", "blue", 0, "y80", 17, 3000)

// â”€â”€â”€ SIZE 16 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// message("first || .. hello a how to a life s16", "GUI_v1", "blue", 0, 75, 16, 3600000)
// message("second where did I go ?|| ... s16", "GUI_v2", "blue", 0, "y80", 16, 3600000)
// message("third some sort of window  s16", "GUI_v3", "blue", 0, 85, 16, 3600000)

// â”€â”€â”€ SIZE 15 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// message("w", "GUI_v1", "blue", 0, "y55", 15, 3600000)
// message("wwww", "GUI_v2", "blue", 0, "y60", 15, 3600000)
// message("www www", "GUI_v3", "blue", 0, "y65", 15, 3600000)
// message("first || .. hello how to save a life s15", "GUI_v4", "blue", 0, "y75", 15, 3600000)
// message("second where did I go ?|| ... s15", "GUI_v5", "blue", 0, "y80", 15, 3600000)
// message("third some sort of window  s15", "GUI_v6", "blue", 0, "y85", 15, 3600000)

// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ utils COUNTDOWN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// Global variables for countdown
let countdownTimer = null;
let countdownStartTime = 0;

function test_countdown(){
    alert("test counddown October 10, 6:22 PM 2025")
}

function countdown_with_ms(count, category, bgColor, xOffset, yPos, fontSize) {
    // Clear existing timer if running
    if (countdownTimer) {
        clearInterval(countdownTimer);
        countdownTimer = null;
    }
    
    // Initialize countdown
    countdownStartTime = Date.now();
    
    // Function to update the display
    function UPDATE_DISPLAY() {
        const elapsed = (Date.now() - countdownStartTime) / 1000;
        const remaining = count - elapsed;
        
        if (remaining <= 0) {
            // Stop the timer
            clearInterval(countdownTimer);
            countdownTimer = null;
            
            // Hide the countdown message
            window.message.hideMessage(category);
            
            return;
        }
        
        // Format the display text with one decimal place
        const displayText = remaining.toFixed(1);
        
        // pinVSCODE
        // Show the countdown message
        message(displayText, "countdown_GUI", "black", -0.1, "y75", 17, 100)
    }
    
    // Start the timer to update every 100ms for smoother countdown
    countdownTimer = setInterval(UPDATE_DISPLAY, 100);
    
    // Initial display update
    UPDATE_DISPLAY();
    
    // Return a function to cancel the countdown
    return function cancelCountdown() {
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
            window.message.hideMessage(category);
        }
    };
}
