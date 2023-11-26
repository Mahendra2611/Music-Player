const audio = document.querySelector("audio");
const back = document.getElementById("back");
const forward= document.getElementById("forward");
let random = document.querySelectorAll('.songs')
let btn = document.getElementById("btn");
let playlist = document.getElementById("playlist");
let main = document.getElementById("main");
let home = document.getElementById("home");
let cross = document.getElementById("cross");
let nam = document.getElementById("name")

cross.addEventListener("click",(e)=>{
    playlist.style.display = "none";
   //console.log(playlist.style.display);
    e.stopPropagation();
})

home.addEventListener("click",()=>{
    playlist.style.display = "block";
    //console.log(playlist.style.display);
})

let i = 1;

random.forEach((eve)=>{
    //console.log(eve.innerHTML)
    eve.addEventListener("click",function(){
    //if i pass a argument here , then on what ever part of that div i will click on it will give details of that . if i 
    //click on imag it will give img tag,if on p it will give para
    //if i have not passed argument then whereever i click i will get whole div
    //target work only when you use click add event listner
        btn.setAttribute("class","fa-solid fa-pause")
       // console.log( "hello " + eve.innerHTML)
        addSong(eve.getAttribute("value"))
        
    })
    
})
//function for back button
back.addEventListener("click",()=>{ 
    if(i == 1){
        i = 8;
    }
    else{
        i--;
    }
    btn.removeAttribute("class","fa-solid fa-play")
    btn.setAttribute("class","fa-solid fa-pause")
    addSong(i)
    //console.log(i)
})

//function for forwaed button
forward.addEventListener("click",()=>{ 
    if(i == 8){
        i = 1;
    }
    else{
        i++;
    }
    btn.removeAttribute("class","fa-solid fa-play")
    btn.setAttribute("class","fa-solid fa-pause")
    addSong(i)
   // console.log(i)
})
    
let currentTime = 0;

//function to set play and pause button event

btn.addEventListener("click",(e)=>{
       // console.log("buttnon click")
        if(btn.classList.contains("fa-play")){
            btn.removeAttribute("class","fa-solid fa-play")
            btn.setAttribute("class","fa-solid fa-pause")
            audio.currentTime = currentTime;
            audio.play();
            //console.log(btn.classList)
        }
        else{
           // console.log("pause")
            btn.removeAttribute("class","fa-solid fa-pause")
            btn.setAttribute("class","fa-solid fa-play")
            currentTime = audio.currentTime;
            audio.pause()
            // console.log(btn.classList)
        }
    })

//function to set image of song

function setImg(i){
        main.style.backgroundImage = `url(./covers/${i}.jpeg)`
        //console.log(`url(./covers/${i}.jpeg)`);
    }

nam.innerHTML = document.getElementById("1").innerHTML;

//function to play current song 

function addSong(i){
    //console.log(i)
     audio.setAttribute(`src`,`./songs/${i}.mp3`);
    setImg(i);
    audio.play();

    // console.log(document.getElementById(`${i}`).innerHTML)
    nam.innerHTML = document.getElementById(`${i}`).innerHTML;
    // let x = audio.getAttribute("src");
     //console.log(x)


    }