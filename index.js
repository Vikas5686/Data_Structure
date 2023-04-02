//Htmldocument
const container = document.querySelector('.container')
const RandomArrayButton = document.querySelector('.RandomArray')
const InsertionSorting = document.querySelector('.InsertionSort')

//variables
let NUM = 10;
let randomArray = []

//funtions
function Swaping() {
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
    }, () => Math.floor(Math.random() * 100) + 10);

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

function delay(){
   return new Promise(resolve => { 
        setTimeout(() => { resolve('this') }, 500); 
    }) 
}

async function InsertionSort() {
    // const ele = document.querySelectorAll(".line");
    // // color
    // console.log(ele[0])
    // ele[0].style.background = 'green';
    // for (let i = 1; i < ele.length; i++) {
    //     let j = i - 1;
    //     let key = ele[i].style.height;
    //     // color
    //     ele[i].style.background = 'blue';

    //     // await waitforme(delay);

    //     while (j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))) {
    //         // color
    //         ele[j].style.background = 'blue';
    //         ele[j + 1].style.height = ele[j].style.height;
    //         j--;

    //         // await waitforme(delay);

    //         // color
    //         for (let k = i; k >= 0; k--) {
    //             ele[k].style.background = 'green';
    //         }
    //     }
    //     ele[j + 1].style.height = key;
    //     // color
    //     ele[i].style.background = 'green';
    // }


    const lines = document.querySelectorAll('.line')
    console.log(lines[0].style.height)
    for (let i = 1; i < lines.length; i++) {
        let key = lines[i].style.height;
       
        let j = i - 1;
        await delay()
        while (j >= 0 && (parseInt(lines[j].style.height) > parseInt(key))) {
            lines[i].style.background="red"
            lines[j].style.background="red"
            lines[j + 1].style.height = lines[j].style.height
            lines[j+1].style.background="green"
            j--;
            await delay()
        }
        lines[j + 1].style.height = key
    }

}




//EventListener -click
RandomArrayButton.addEventListener('click', () => {
    RemoveLines()
    GanrateArray()
})

InsertionSorting.addEventListener('click', () => {
    InsertionSort();
})

//Onloading
GanrateArray()

