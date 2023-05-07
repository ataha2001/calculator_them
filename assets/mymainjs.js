
function getNumber(params) {
    
    // console.log(typeof params)
    let screenNo =document.getElementById('screen').value +=params
    // console.log(screenNo)
     if (params == "*" || params == "-" || params == "/" || params == "+"){
        console.log("params=", params)
        
        if (screenNo.substr(screenNo.length -1 ) == screenNo.charAt(screenNo.length -2 )|| 
            screenNo.charAt(screenNo.length -2 ) == "/" ||
            screenNo.charAt(screenNo.length -2 ) == "-" ||
            screenNo.charAt(screenNo.length -2 ) == "+" ||
            screenNo.charAt(screenNo.length -2 ) == "*" 
        ){
            // console.log("2 params")
            document.getElementById('screen').value = screenNo.slice(0,-1)
        }
   
     }
    
   
}
function getPercentage(params) {
    console.log(params)
    let screenNo =document.getElementById('screen').value /= 100
   
   
}
function getResult() {
    let result = document.getElementById("screen").value
    document.getElementById("screen").value = eval(result)
}
function clearScreen() {
    document.getElementById("screen").value =""
}
function removeLastNumber(params) {
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0,-1)
}

function changeMode() {
    let element = document.getElementById("dark_modal")
    let closeButton = document.getElementById("close-button")
    element.classList.toggle("dark-mode");

}
