let randSequenceTag = document.getElementById("rand-sequence")
let randSolve1Tag = document.getElementById("rand-solve-text-1")
let randSolve2Tag = document.getElementById("rand-solve-text-2")
let randSolve3Tag = document.getElementById("rand-solve-text-3")

let inpSequenceTag = document.getElementById("inp-seq")
let inpSolve1Tag = document.getElementById("inp-solve-text-1")
let inpSolve2Tag = document.getElementById("inp-solve-text-2")
let inpSolve3Tag = document.getElementById("inp-solve-text-3")


generateSeq = ((length, min, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * (max - min)) + min))
getMean = ((arr) => arr.reduce((x, y) => x + y, 0) / arr.length)
getSqSum = ((arr) => arr.reduce((x, y) => x + y ** 2, 0))
getNullCount = ((arr) => arr.filter((x) => x === 0).length)

function setGenerated() {
    let genSeq = generateSeq(10, -10, 10)

    randSequenceTag.innerText = genSeq.join(' ')
    randSolve1Tag.innerText = getSqSum(genSeq)
    randSolve2Tag.innerText = getMean(genSeq)
    randSolve3Tag.innerText = getNullCount(genSeq)
}

setGenerated()


inpSequenceTag.addEventListener("keyup", () => {
    inpSeq = inpSequenceTag.value.split(" ").filter((x) => (x !== "")).map(Number)
    if (inpSeq.filter(x => isNaN(x)).length > 0) {
        inpSolve1Tag.innerText = "Некорректная последовательность"
        inpSolve2Tag.innerText = "Некорректная последовательность"
        inpSolve3Tag.innerText = "Некорректная последовательность"
    } else {
        if (inpSeq.length !== 0) {
            inpSolve1Tag.innerText = getSqSum(inpSeq)
            inpSolve2Tag.innerText = getMean(inpSeq)    
            inpSolve3Tag.innerText = getNullCount(inpSeq)
        }
    }
})

randSequenceTag.addEventListener("click", () => {
    setGenerated()
})


