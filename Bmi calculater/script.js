const calculate = document.querySelector("button")
const results = document.querySelector("#results")

calculate.addEventListener ("click",function (e){
    e.preventDefault();
    const weight = document.querySelector ("#weight").value
    const height = document.querySelector ("#height").value
    let bmi =  (weight / (height * height)) * 10000;
    if (bmi<= 18.6) {
        results.innerHTML= "<div> Underweight </div>"
    } else if (bmi<= 24.9) {
        results.innerHTML= "<div> Normal weight </div>"
    } else {
        results.innerHTML= "<div> Overweight </div>"
    }
})
