
printPyramid(5);

function printPyramid(height) {
    let stairs = "";
    for (let i = 0; i < height; i++){
        stairs = stairs.concat(('&nbsp&nbsp'.repeat(height - i - 1) + "#".repeat(i + 2)) + `<br>`)
    }
    return stairs;
}

console.log(printPyramid(8))
let bricks = document.getElementById('pyramid');
bricks.insertAdjacentHTML("afterbegin", printPyramid(15))

let construction = document.getElementById("construction");
construction.remove();

const parent = document.getElementById("pyramid")


function buildPyramid (height){
    for (let i = height; i > 0; i--) {
        let brick = document.createElement('div')
        brick.classList.add("Brick");
        parent.appendChild(brick);

        for (let j = 0; j < height; j++) {
            if (height == i){
                continue;
            }
            if (i <= j+1) {
                let lineBrick = document.createElement('div')
                lineBrick.classList.add("Brick", "LineBrick", "ExistBrick")
                parent.appendChild(lineBrick)
            } else {
                let spaceBrick = document.createElement('div')
                spaceBrick.classList.add("Brick", "LineBrick", "Space");
                parent.appendChild(spaceBrick);
            }
        }
    }
}

buildPyramid(10);

