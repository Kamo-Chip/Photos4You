const tfName = document.querySelectorAll("input");
const description = document.getElementsByTagName("textarea");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if(tfName[0].value === "" || tfName[1].value === "" || description.value === ""){
        window.alert("Values cannot be empty");
    }
});