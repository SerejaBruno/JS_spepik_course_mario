
printPyramid(5);
// " ".repeat(height - i - 1) + "#".repeat(i + 2)) + "\n"





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

