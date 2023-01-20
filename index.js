const container = document.querySelector('.container')
const RandomArrayButton = document.querySelector('.RandomArray')

function GanrateArray() {
    let randomArray = Array.from({
        length: 10
    }, () => Math.floor(Math.random() * 100));

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

RandomArrayButton.addEventListener('click', () => {
    RemoveLines()
    GanrateArray()
})


GanrateArray()
