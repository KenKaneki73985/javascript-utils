function all_utils_test(){
  alert("im all utils // October 10, 6:15 PM 2025")
}

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
    alert("✔️ success import (utils all)")
})
.catch(promise_error);

function promise_error(error){
    alert("error: script loading failed")
    console.error('error: script loading failed:' + error)
}
