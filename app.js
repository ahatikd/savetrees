function inputFloat() {
    this.value = this.value.replace(',', '.');
    if (!/^\.?$/.test(this.value) && !isFinite(this.value)) {
        this.value = parseFloat(this.value) || this.value.slice(0, -1);
    }
    (this.value < 1 || this.value > 99999) && (this.value = null);
}
inp.oninput = inp.onkeydown = inputFloat;

document.getElementById("btn1").addEventListener("click", ()=>{
    document.getElementById("p").textContent = '250';
})

document.getElementById("btn2").addEventListener("click", ()=>{
    document.getElementById("p").textContent = '1000';
})

document.getElementById("btn3").addEventListener("click", ()=>{
    document.getElementById("p").textContent = '2500';
})

document.getElementById("btn4").addEventListener("click", ()=>{
    document.getElementById("p").textContent = '5000';
})

/*document.getElementById("inp").addEventListener("input", ()=>{
    document.getElementById("p").textContent = parseInt(document.getElementById("p").textContent) * 50;
});*/

/*document.getElementById("inp").addEventListener("input", ()=>{
    document.getElementById("p").textContent = parseInt(document.getElementById("p").textContent) * 50;
});*/