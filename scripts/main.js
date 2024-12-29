const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === 'images/360_F_556915030_T7x9v7vmLJRAoOyB5ces5Yku5yEgdLG1.jpg') {
        myImage.setAttribute("src", "images/c69ecda7-9404-42a0-a001-2af62a556e60.jpg");
    }
    else {
        myImage.setAttribute("src", "images/360_F_556915030_T7x9v7vmLJRAoOyB5ces5Yku5yEgdLG1.jpg")
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {

    const myName = prompt("Please, enter yout name.");
    if(!myName)
    {
        setUserName();
    }
    else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Dracula is Danger, ${myName}`;
    }

}

if(!(localStorage.getItem("name"))) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Say my Name, ${storedName}`
}

myButton.addEventListener("click", () => {
    setUserName()
})

