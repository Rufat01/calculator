let screen = document.querySelector(".screen input");
let buttons = document.querySelectorAll(".btn span");
let specialCharacters = ["*", "/", "+", "-"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%", "/100"))
    } else if (btnValue === "AC") {
        output = "";
    } else {
        if (btnValue === "" && specialCharacters.includes(btnValue))
            return;
        output += btnValue
    }

    screen.value = output;
}

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        calculate(e.target.dataset.value);
    })
})