const temadark = document.getElementById("dark");
const temaretro = document.getElementById("retro");
const temabody = document.getElementById("containAll");
const screen = document.getElementById("screen1")
const screen1 = document.getElementById("screen2")
const buttons = document.querySelectorAll("#buttons a");


for (const button of buttons) {
    button.addEventListener("click", function(e){

    })
}







temadark.addEventListener('click', ()=>{
    if(temadark.checked == true){
    temabody.className = "dark";
    localStorage.setItem('colorTema','dark');
    temaretro.checked = false;
    }else{
    temabody.className = "light";
    localStorage.setItem('colorTema','light');
    }


})

temaretro.addEventListener('click', ()=>{
    if(temaretro.checked == true){
        temabody.className = "retro";
        localStorage.setItem('colorTema','retro');
        temadark.checked = false;
        }else{
        temabody.className = "light";
        localStorage.setItem('colorTema','light');
        }
})

function temaEnStorage(){
    const storedTheme = localStorage.getItem("colorTema");
    if (storedTheme == "dark"){
        temabody.className = "dark";
        temadark.checked = true;
    }else if (storedTheme == "retro"){
        temabody.className = "retro";
        temaretro.checked = true;
    }else if (storedTheme == "light"){
        temabody.className = "light";
    }
}

temaEnStorage()


