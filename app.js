let display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
            display.style.color = "#ffa500";
            if (display.value == "undefined") {
                display.value = "Syntax error"
                display.style.color = "crimson";

            }


        } else if (btn.id === "ac") {
            display.value = " ";

        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);

        } else {
            display.value += btn.id;
            display.style.color = "#f5f5f5";


        }
    });
});