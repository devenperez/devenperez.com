function clickBox(boxID) {

    if (!place(boxID, "X")) {
        return;
    }

    if (hasWon("X")) {
        // Game Over
        document.getElementsByClassName("turn-indicator")[0].innerText = "Game Over! YOU WIN!";
        return;
    }

    if (isFull()) {
        document.getElementsByClassName("turn-indicator")[0].innerText = "Game Over!";
        return;
    }

    // Computer makes move
    // Computer "AI" logic: - Place to block
    //                      - Random
    
    // Place to block
    var foundBlock = false;
    var adjacencyMatrix = [
        [[1,2],[3,6],[4,8]],
        [[0,2],[4,7]],
        [[0,1],[4,6],[5,8]],
        [[0,6],[4,5]],
        [[0,8],[2,6],[1,7],[3,5]],
        [[2,8],[3,4]],
        [[0,3],[2,4],[7,8]],
        [[1,4],[6,8]],
        [[0,4],[2,5],[6,7]]
    ];

    for (var i = 0; i < adjacencyMatrix[boxID].length; i++) {
        box0 = document.getElementById(`box${adjacencyMatrix[boxID][i][0]}`).innerText;
        box1 = document.getElementById(`box${adjacencyMatrix[boxID][i][1]}`).innerText;
        if ((box0 == "\xa0" && box1 == "X")) {
            place(adjacencyMatrix[boxID][i][0], "O");
            foundBlock = true;
            break;
        }
        else if(box1 == "\xa0" && box0 == "X") {
            place(adjacencyMatrix[boxID][i][1], "O");
            foundBlock = true;
            break;
        }
    }

    // Place randomly
    if (!foundBlock) {
        while(!place(Math.floor(Math.random() * 9), "O")) {}
    }

    if (hasWon("O")) {
        document.getElementsByClassName("turn-indicator")[0].innerText = "Game Over! YOU LOST!";
        return;
    }
    


}

// Places char on box at boxID. Returns whether place was successful
function place(boxID, char) {
    var boxElem = document.getElementById(`box${boxID}`);
    if (boxElem.innerText == "\xa0") {
        boxElem.innerText = char;
        return true;
    }
    return false;
}

function hasWon(char) {
    if (isCharAtBox(4,char)) {
        // Check diagonals
        if (isCharAtBox(0,char) && isCharAtBox(8,char)) {
            return true;
        } else if (isCharAtBox(2,char) && isCharAtBox(6,char)) {
            return true;
        }
        // Check horizontal middle
        else if (isCharAtBox(3,char) && isCharAtBox(5,char)) {
            return true;
        }
        // Check veritcal middle
        else if (isCharAtBox(1,char) && isCharAtBox(7,char)) {
            return true;
        }
    }else if (isCharAtBox(0,char)) {
        // Horizontal top
        if (isCharAtBox(1,char) && isCharAtBox(2,char)) {
            return true;
        }
        // Vertical left
        else if (isCharAtBox(3,char) && isCharAtBox(6,char)) {
            return true;
        }
    }else if (isCharAtBox(8,char)) {
        // Horizontal bottom
        if (isCharAtBox(6,char) && isCharAtBox(7,char)) {
            return true;
        }
        // Vertical right
        else if (isCharAtBox(2,char) && isCharAtBox(5,char)) {
            return true;
        }
    }
    return false;
}

function isCharAtBox(boxID, char) {
    return document.getElementById(`box${boxID}`).innerText == char;
}

function isFull() {
    for(var i = 0; i < 9; i++) {
        if(document.getElementById(`box${i}`).innerText == "\xa0") {
            return false;
        }
    }
    return true;
}