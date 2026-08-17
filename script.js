// Counter JS
let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{   
    let userNumber = item.innerHTML
    item.innerHTML = ""

    let count = 0
    function counterjs() {
        count++
        item.innerHTML = count
        if(userNumber == count){
            clearInterval(stopInterval)
        }
    };

    let stopInterval = setInterval(() => {
        counterjs()
    }, 1000);
});