
printPyramid(5);


function printPyramid(height) {
    for (let i = 0; i < height; i++){
            console.log(" ".repeat(height - i - 1) + "#".repeat(i + 2));
        }
}
