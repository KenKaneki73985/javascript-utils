// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (all utils) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// reload_ID = "idddCW3QG9W5"
// reload_TIME = October 10, 9:28 PM 2025

function all_utils_test(){
  alert("all utils October 10, 8:55 PM 2025")
}

document.readyState === 'complete' ? UTILS_PAGE_READY_ACTIONS() : addEventListener('load', UTILS_PAGE_READY_ACTIONS)

function UTILS_PAGE_READY_ACTIONS(){
    LoadUtils()
}

function LoadUtils(){
    const scripts = [
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
        'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
    ]

    scripts.forEach(src => {
        const script = document.createElement('script');
        script.src = src;
        document.head.appendChild(script);
    });
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

// Load scripts sequentially
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


// function LoadUtils(){
//     // function LoadScript(src) {
//     //     return new Promise((resolve, reject) => {
//     //         const script = document.createElement('script');
//     //         script.src = src;
//     //         script.onload = resolve;
//     //         script.onerror = reject;
//     //         document.head.appendChild(script);
//     //     });
//     // }

//     // // Load scripts sequentially
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

//     const scripts = [
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
//         'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
//     ]

//     scripts.forEach(src => {
//         const script = document.createElement('script');
//         script.src = src;
//         document.head.appendChild(script);
//     });

//     console.log('☑️ done import utils')
//     // UtilsLoaded = true
// }



// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
