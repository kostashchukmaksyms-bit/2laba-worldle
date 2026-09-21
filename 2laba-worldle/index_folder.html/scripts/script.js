function generateScanword(){
    let elem = document.getElementById("scanword");
    for(var i = 0; i < 5; i++){
        let row = document.createElement("div");
        row.classList.add("word-row");
        for(var j = 0; j < 5; j++){
            let input = document.createElement("input");
            input.setAttribute("maxLength", 1);
            input.setAttribute("id", `${i}-${j}`)
            row.appendChild(input);
        }
        elem.appendChild(row);
    }
}

generateScanword();

function getElements(){
    let arrayOfElements = [];
    for(var i = 0; i < 5; i++){
        let row = [];
        for(var j = 0; j < 5; j++){
            row.push(document.getElementById(`${i}-${j}`))
        }
        arrayOfElements.push(row);
    }
    console.log(arrayOfElements);
    
    arrayOfElements[1][1].addEventListener("input", () => {
        check(arrayOfElements[1][1], "a");
    })
}

getElements();

function check(element, correct){
    let value = element.value;
    if(value == correct){
        element.classList.add("correct");
    }
    else{
        element.classList.add("wrong");
    }
}