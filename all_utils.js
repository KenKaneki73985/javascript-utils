// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (all utils) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// reload_ID = "idddCW3QSWGB"
// reload_TIME = October 10, 11:34 PM 2025

// let AllScriptsLoaded = false

document.readyState === 'complete' ? PAGE_READY_ACTIONS() : addEventListener('load', PAGE_READY_ACTIONS)

function PAGE_READY_ACTIONS(){
    LOAD_UTILS()
}

function LOAD_UTILS(){
    
    let GithubScripts = [
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
    ]

    GithubScripts.forEach(LoadGithubScript)

    // AllScriptsLoaded = true

    function LoadGithubScript(GithubScript){
        let ScriptElement = document.createElement('script')
        ScriptElement.src = GithubScript
        document.head.appendChild(ScriptElement)
    }
}

function all_utils_test(){
  alert("all utils October 10, 8:55 PM 2025")
}

// function LoadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//     });
// }

// Load GithubScripts sequentially
// Promise.all([
//     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js'),
//     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js'),
//     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js')
// ])
// .then(PromiseSuccess)
// .catch(PromiseError)

// function PromiseSuccess(){
//     // show_GUI('☑️ success: all utils imported', "GUI_v1", "blue", 0, "y80", 17, 3000)
//     log('☑️ success: all utils imported')
// }
// function PromiseError(error){
//     alert("❌ error: script loading failed")
//     console.error('❌ error: script loading failed:' + error)
// }


// function LOAD_UTILS(){
//     // function LoadScript(src) {
//     //     return new Promise((resolve, reject) => {
//     //         const script = document.createElement('script');
//     //         script.src = src;
//     //         script.onload = resolve;
//     //         script.onerror = reject;
//     //         document.head.appendChild(script);
//     //     });
//     // }

//     // // Load GithubScripts sequentially
//     // Promise.all([
//     //     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js'),
//     //     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js'),
//     //     LoadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js')
//     // ])
//     // .then(PromiseSuccess)
//     // .catch(PromiseError)

//     // function PromiseSuccess(){
//     //     // show_GUI('☑️ success: all utils imported', "GUI_v1", "blue", 0, "y80", 17, 3000)
//     //     log('☑️ success: all utils imported')
//     // }
//     // function PromiseError(error){
//     //     alert("❌ error: script loading failed")
//     //     console.error('❌ error: script loading failed:' + error)
//     // }

//     const GithubScripts = [
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
//     ]

//     GithubScripts.forEach(src => {
//         const script = document.createElement('script');
//         script.src = src;
//         document.head.appendChild(script);
//     });

//     console.log('☑️ done import utils')
//     // UtilsLoaded = true
// }

// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
