const temadark = document.getElementById("dark");
const temaretro = document.getElementById("retro");
const temabody = document.getElementById("containAll");
let screen1 = document.getElementById("screen1")
let screen2 = document.getElementById("screen2")
const buttons = document.querySelectorAll("#buttons a");


for (const button of buttons) {
    button.addEventListener("click", function(e){
        e.preventDefault
        let letters = (e.target.dataset.key)[0]
        let numbers = (e.target.dataset.key)[1]
        let sc1 = screen1.textContent.length;
        let sc2 = screen2.textContent.length;
 
        if (screen1.textContent.indexOf(letters) != -1 && sc1 < 10)
            swal(letters + " Esta repetida", "El orden debe ser: ABCDEFGHIJ!", "error");
        if (screen2.textContent.indexOf(numbers) != -1 && sc2 < 10)
            swal(numbers + " Esta repetido", "El orden debe ser: 1234567890", "error");

        if (sc1 < 1 && letters == "A"){
            screen1.textContent = screen1.textContent + letters; 
        } 
        else if (sc1 >= 1 && sc1 < 10 && (letters.charCodeAt(0) == (parseInt(screen1.textContent.charCodeAt(sc1 -1))+1))){
            screen1.textContent = screen1.textContent + letters;
        }
        else if (sc2 < 1 && sc1 == 10 && numbers == "1"){
            screen2.textContent = screen2.textContent + numbers;
        }else if (sc2 >= 1 && sc1 == 10 && parseInt(numbers) == parseInt(sc2)+1){
            screen2.textContent = screen2.textContent + numbers;
        } else if (sc2 >=9 && sc1 == 10 && numbers == "0"){
            screen2.textContent = screen2.textContent + numbers;
        } else if(e.target.dataset.key == "reset"){
            console.log("reset")
            screen1.textContent = "";
            screen2.textContent = "";
        }
        else if (sc1 < 10){
            swal(letters + " No es la letra siguiente", "El orden debe ser: ABCDEFGHIJ!", "error");
        }
        else if (sc2 < 10 && sc1 == 10){
            swal(numbers + " No es la letra siguiente", "El orden debe ser: 1234567890!", "error");
        }
        
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


