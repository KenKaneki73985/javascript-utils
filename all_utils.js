function all_utils_test(){
  alert("im all utils")
}

const scripts = [
    'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/general.js',
    'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/show_GUI.js',
    'https://raw.githack.com/KenKaneki73985/javascript-utils/refs/heads/main/countdown.js'
];

scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
});
