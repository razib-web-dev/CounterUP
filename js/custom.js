
let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = item.innerHTML
    item.innerHTML=""
    let countNumber = 0;
    function counterUP() {
        item.innerHTML = countNumber
        countNumber++
        if (countNumber > count) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        counterUP()
    }, item.dataset.speed/count)
})


