let count = 1;

let intervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(intervalId); // stop the interval
    }
}, 1000);
