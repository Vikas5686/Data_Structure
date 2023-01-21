//Htmldocument
const container = document.querySelector('.container')
const RandomArrayButton = document.querySelector('.RandomArray')
const InsertionSorting = document.querySelector('.InsertionSort')

//variables
let NUM = 10;
let randomArray = []

//funtions
function Swaping(){
    randomArray.forEach(i => {
        var line = document.createElement('div')
        line.className = "line"
        line.style.height = `${i}px`
        container.appendChild(line)
    });
}

function GanrateArray() {
    randomArray = Array.from({
        length: NUM
    }, () => Math.floor(Math.random() * 100)+10);

    randomArray.forEach(i => {
        var line = document.createElement('div')
        line.className = "line"
        line.style.height = `${i}px`
        container.appendChild(line)
    });
}

function RemoveLines() {
    const line2 = document.querySelectorAll('.line')
    line2.forEach((i) => {
        i.remove()
    })
}

function InsertionSort() {
    for (let i = 1; i <= NUM - 1; i++) {
        let key = randomArray[i]
        let j = i - 1
        while (j >= 0 && randomArray[j] > key) {
            randomArray[j + 1] = randomArray[j]
            j--
        }
        randomArray[j + 1] = key
    }
    RemoveLines()
    Swaping()
}

//EventListener -click
RandomArrayButton.addEventListener('click', () => {
    RemoveLines()
    GanrateArray()
})

InsertionSorting.addEventListener('click', () => {
    InsertionSort();
    console.log(randomArray)
    
})

//Onloading
GanrateArray()

