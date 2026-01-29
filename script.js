let num = document.querySelector("#number")
let square = document.querySelector("#square")
let righttriangle = document.querySelector("#righttriangle")
let triangle = document.querySelector("#triangle")
let revtriangle = document.querySelector("#revtriangle")
let reset = document.querySelector("#reset")
let output = document.querySelector("#para")
let lefttriangle = document.querySelector("#lefttriangle")
let revlefttriangle = document.querySelector("#revlefttriangle")
let hourglass = document.querySelector("#hourglass")
let selectValue = document.querySelector("#selectValue");
let diamond = document.querySelector("#diamond")

num.addEventListener("input",()=>{
let n = num.value
if(n<1  || n>20){
    alert("enter number between 1 to 20")
    num.value =""
    return;
}
})
function SquareEven(n){
    let o = 2
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let j=1;j<=n;j++){
            pattern += `<span id='squareOdd'>${o}</span>`+ " " 
            o +=2
        }
        output.innerHTML += pattern + "<br>"
    }
}
function isPrime(n){
    if(n<=1){
        return false
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true
}
function SquarePrime(n){
    let num = 2
    for(let i=1;i<=n;i++){
        let pattern =""
        for(let j=1;j<=n;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id='squareOdd'>${num}</span>`+ " "
            num++
        }
        output.innerHTML += pattern + "<br>"
    }
}
function SquareOdd(n){
    let o = 1
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let j=1;j<=n;j++){
            pattern += `<span id='squareOdd'>${o}</span>`+ " " 
            o +=2
        }
        output.innerHTML += pattern + "<br>"
    }
}
square.addEventListener("click",function(){
    let input = num.value
    if(selectValue.value=="odd"){
        SquareOdd(input)
    }
     else if(selectValue.value =="even"){
        SquareEven(input)
    }  
    else if(selectValue.value=="prime"){
        SquarePrime(input)
    }
    
})
function TriangleOdd(n){
    let o = 1
    for(let i=1;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +="&nbsp;"
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="triangleOdd">${o}</span>` + " ";
            o += 2
        }
        output.innerHTML += pattern + "<br>"
    }
}
function TriangleEven(n){
    let o = 2
    for(let i=1;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="triangleOdd">${o}</span>` + " ";
            o += 2
        }
        output.innerHTML += pattern + "<br>"
    }
}
function TrianglePrime(n){
    let num = 2
    for(let i=1;i<=n;i++){
       let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="triangleOdd">${num}</span>` + " "
            num++
        }
        output.innerHTML += pattern + "<br>"
    }
}
triangle.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value=="odd"){
        TriangleOdd(input)
    }
    else if(selectValue.value=="even"){
        TriangleEven(input)
    }
    else if(selectValue.value=="prime"){
        TrianglePrime(input)
    }
})
function revTriangleOdd(n){
    let count = 1
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="revtriangleOdd">${count}</span>`+" "
            count += 2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function revTriangleEven(n){
    let count = 2
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="revtriangleOdd">${count}</span>`+" "
            count += 2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function revTrianglePrime(n){
    let num = 2
    for(let i=n;i>0;i--){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="revtriangleOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern +"<br>"
    }
}
revtriangle.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value == "odd"){
        revTriangleOdd(input)
    }
    else if(selectValue.value =='even'){
        revTriangleEven(input)
    }
    else if(selectValue.value=="prime"){
        revTrianglePrime(input)
    }
})
reset.addEventListener("click",function(){
    let input = num.value
    input.innerHTML = ""
    output.innerHTML = ""
})
function DiamondOdd(n){
    let o =1
     for(let i=1;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=" "
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="diamondOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern + "<br>"
    }
    for(let i=n-1;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=" "
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="diamondOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function DiamondEven(n){
    let o =2
     for(let i=1;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=" "
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="diamondOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern + "<br>"
    }
    for(let i=n-1;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=" "
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="diamondOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function DiamondPrime(n){
    let num = 2
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="diamondOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern +'<br>'
    }
    for(let i=n-1;i>0;i--){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="diamondOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern +'<br>'
    }
}
diamond.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value == "odd"){
        DiamondOdd(input)
    }
    else if(selectValue.value =="even"){
        DiamondEven(input)
    }
    else if(selectValue.value =="prime"){
        DiamondPrime(input)
    }
})
function rightTriangleOdd(n){
    let o = 1
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="righttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function rightTriangleEven(n){
    let o = 2
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="righttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function rightTrianglePrime(n){
    let num = 2
    for(let i=1;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="righttriangleOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern +"<br>"
    }
}
righttriangle.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value=="odd"){
        rightTriangleOdd(input)
    }
    else if(selectValue.value=="even"){
        rightTriangleEven(input)
    }
    else if(selectValue.value=="prime"){
        rightTrianglePrime(input)
    }
})
function leftTriangleOdd(n){
    let o = 1
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let j=1;j<=i;j++){
            pattern += `<span id="lefttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML +=pattern +"<br>"
    }
}
function leftTriangleEven(n){
    let o = 2
    for(let i=1;i<=n;i++){
        let pattern = ""
        for(let j=1;j<=i;j++){
            pattern += `<span id="lefttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML +=pattern +"<br>"
    }
}
function leftTrianglePrime(n){
    let num =2
    for(let i=1;i<=n;i++){
        let pattern =""
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="lefttriangleOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern + "<br>"
    }
}
lefttriangle.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value=="odd"){
        leftTriangleOdd(input)
    }
    else if(selectValue.value=="even"){
        leftTriangleEven(input)
    }
    else if(selectValue.value=="prime"){
        leftTrianglePrime(input)
    }
})
function revLeftTriangleOdd(n){
    let o =1 
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let j=1;j<=i;j++){
            pattern += `<span id="revlefttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function revLeftTriangleEven(n){
    let o =2
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let j=1;j<=i;j++){
            pattern += `<span id="revlefttriangleOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function revLeftTrianglePrime(n){
    let num = 2
    for(let i=n;i>0;i--){
        let pattern =""
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="revlefttriangleOdd">${num}</span>`+" "
            num++
        }
        output.innerHTML += pattern +"<br>"
    }
}
revlefttriangle.addEventListener('click',function(){
    let input = num.value
    if(selectValue.value=="odd"){
        revLeftTriangleOdd(input)
    }
    else if(selectValue.value=="even"){
        revLeftTriangleEven(input)
    }
    else if(selectValue.value=="prime"){
        revLeftTrianglePrime(input)
    }
})
function hourGlassOdd(n){
    let o = 1
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="hourglassOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
    for(let i=2;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
           pattern += `<span id="hourglassOdd">${o}</span>`+" "
           o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function hourGlassEven(n){
    let o = 2
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            pattern += `<span id="hourglassOdd">${o}</span>`+" "
            o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
    for(let i=2;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
           pattern += `<span id="hourglassOdd">${o}</span>`+" "
           o +=2
        }
        output.innerHTML += pattern +"<br>"
    }
}
function hourGlassPrime(n){
    let num = 2
    for(let i=n;i>0;i--){
        let pattern = ""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
            pattern += `<span id="hourglassOdd">${num}</span>`+" "
            num++
        }
         output.innerHTML += pattern +"<br>"
    }
    for(let i=2;i<=n;i++){
        let pattern =""
        for(let k=1;k<=n-i;k++){
            pattern +=""
        }
        for(let j=1;j<=i;j++){
            while(!isPrime(num)){
                num++
            }
           pattern += `<span id="hourglassOdd">${num}</span>`+" "
           num++
        }
        output.innerHTML += pattern +"<br>"
    }
}
hourglass.addEventListener("click",function(){
    let input = num.value
    if(selectValue.value=="odd"){
        hourGlassOdd(input)
    }
    else if(selectValue.value=="even"){
        hourGlassEven(input)
    }
    else if(selectValue.value=="prime"){
        hourGlassPrime(input)
    }
})
