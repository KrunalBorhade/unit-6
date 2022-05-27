function throttle(fn, delay) {
    let lastCall = 0;
    return function () {
        if (Date.now() - lastCall > delay) {
            lastCall = Date.now();
            fn();
        }
    };
}
function fetching() {
    console.log("Done");
}

let onClick = throttle(fetching, 3000);
document.getElementById("btn").addEventListener("click", onClick);