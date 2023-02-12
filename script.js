const buttons = document.querySelectorAll("button")
const divs = container.querySelectorAll('div');
buttons[0].addEventListener('click', function () {
    const divs = container.querySelectorAll('div');
    divs.forEach(divs => divs.remove());
    grid(4);


})
buttons[1].addEventListener('click', function () {
    const divs = container.querySelectorAll('div');
    divs.forEach(divs => divs.remove());
    grid(8);
})
buttons[2].addEventListener('click', function () {
    const divs = container.querySelectorAll('div');
    divs.forEach(divs => divs.remove());
    grid(12);
})









function grid(x) {
    const container = document.querySelector('#container');
    for (let i = 0; i < x; i++) {
        const div = document.createElement("div");

        div.style.border = '0px';
        div.style.padding = '0px';
        div.style.margin = '0px';
        div.className = "column";
        for (let j = 0; j < x; j++) {
            const div2 = document.createElement("div");
            div2.textContent = "BOOOring";
            div2.className = "row";
            div2.style.display = 'inline-block';
            div2.style.margin = '0px';
            div2.style.padding = '0px';
            div2.style.border = 'thin solid black';
            div2.classList.add = '.ho';
            div2.addEventListener("mouseover", function () {
                this.style.backgroundColor = "red";
            })



            div.appendChild(div2);
        }


        container.appendChild(div);
    }
}
