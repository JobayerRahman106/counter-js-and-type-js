// Type JS
let type = document.querySelector(".type")
let typeContent = type.innerHTML
type.innerHTML = ""

let count = -1
function typejs(){
    count ++
    type.innerHTML += typeContent.charAt(count)
    if(count >= typeContent.length-1){
        type.innerHTML = ""
        count = -1
        // clearInterval(stoped)
    }
};

let stoped =  setInterval(() => {
    typejs()
}, 500);