// alert ("Hello")

/*const item = document.getElementById ("MyDiv")
item.innerHTML = "Hello"

const byClass = document.getElementsByClassName ("myClass")
byClass[0].innerHTML = "welcome 1"
byClass[1].innerHTML = "welcome 1"*/ 


 function carz() {
    const cars = ["subaru", "volvo", "toyota"]
    /*console.log(cars);
    cars.push("BMW")
    console.log(cars)
    cars.pop()
    console.log(cars) */

    const mydiv = document.getElementById("myDiv")
    for (let index = 0; index < cars.length; index++) {
        const element = array[index];
        const node = document.createElement("li");
        const textnode = document.createTextNode(element);
        uiListElement.appendChild(node)
     }
}

carz()




