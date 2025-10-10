// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ START OF GITHUB COPY/PASTE (all_utls) ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// reload_ID = "idddCW3R4EDC"
// reload_TIME = October 10, 7:39 PM 2025

function all_utils_test(){
  alert("all utils October 10, 7:06 PM 2025")
}

// all_utils_test()

// const scripts = [
//     'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
//     'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
//     'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
// ];

// scripts.forEach(src => {
//     const script = document.createElement('script');
//     script.src = src;
//     document.head.appendChild(script);
// });

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Load scripts sequentially
Promise.all([
    loadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js'),
    loadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js'),
    loadScript('https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js')
])
.then(() => {
    // alert("✔️ success import (utils all)")
    show_GUI('✔️ success import (utils all)', "GUI_v1", "blue", 0, "y80", 17, 3000)
})
.catch(promise_error);

function promise_error(error){
    alert("error: script loading failed")
    console.error('error: script loading failed:' + error)
}
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ END OF GITHUB COPY/PASTE ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
// ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
