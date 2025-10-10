function all_utils_test(){
  alert("im all utils")
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
    // show_GUI('✔️ done import', "GUI_v1", "blue", 0, "y80", 17, 3000);
    alert("✔️ done import")
})
.catch(promise_error);

function promise_error(error){
    alert("'Script loading failed")
    console.error('Script loading failed:', error)
}
