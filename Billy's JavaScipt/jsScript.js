// Call this function to make the square. 
// When you call it you have to give a parameter.
// ex: useThisSymbol("*");
function useThisSymbol(symbol) {
    let width = document.getElementById("input1").value;
    let height = document.getElementById("input2").value;
    if (width == "" || height == "") {
        alert("You need to fill out the width and height!");
    } else {
        let output = "";
        for (let row = 0; row < Number(height); row++) {
            for (let col = 0; col < Number(width); col++) {
                output += symbol;
            }
            output += "<br>";
        }
        document.getElementById("square").innerHTML = output;
    }
}
// when you make the square originally, just use a star
function makeSquare() {
    useThisSymbol("*");
}
// change the symbol to whatever the user wants.
// if they didnt do anything, give alert.
// if they put in more than one thing, give alert.
function changeSymbol() {
    let symbol = document.getElementById("symbol").value;
    if (symbol == "" || symbol.length > 1) {
        alert("Please enter 1 character.")
    }
    else {
        useThisSymbol(symbol);
    }
}
// cycle the symbol between these: *, $, #, &, @.
// make an array (simple terms, a list) that holds onto the symbols
// loop through the symbols, if its the last symbol, go back to the start
function cycleSymbol(){
    let symbols = ["*", "$", "#", "&", "@"];
    let symbol = document.getElementById("square").innerHTML.charAt(0);
    for(let i = 0; i < symbols.length; i++){
        if(symbol == symbols[symbols.length - 1])
        {
            useThisSymbol(symbols[0]);
            return;
        }
        if(symbol == symbols[i]){
            useThisSymbol(symbols[i+1]);
            return;
        }
    }
    useThisSymbol(symbols[0]);
    
}