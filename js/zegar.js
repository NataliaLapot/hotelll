
function zegar(){
    const teraz = new Date();
    //console.log(teraz);
    let godzina=teraz.getHours();
    let minuta=teraz.getMinutes();
    let sekunda=teraz.getSeconds();

    let czas="";
    czas+=(godzina>12)? godzina-12 : godzina;
    czas+= ((minuta<10)? ":0" : ":")+minuta;
    czas+= ((sekunda<10)? ":0" : ":")+sekunda+ ":" +teraz.getMilliseconds();
    czas+= (godzina>12)? "PM" : "AM";
    //czas+= ((milisekunda<10)? ":0" : ":")+milisekunda;

    let el_intxt= document.querySelector("#zegarTXT");
    //el_intxt.value=`${godzina} : ${minuta} : ${sekunda}`;
    el_intxt.value= czas;

    setTimeout(zegar,1);
}

let sec=0, mili=0;
let IntervalID=null;

function stoper(){
    if (mili>=9) {
        sec+=1; mili=0;
    } else {
        mili+=1;
    }
    let el_stoper= document.querySelector("#stoperTXT");
    el_stoper.value=`${sec}:${mili}`;
}
function startStoper(){
    InervalID=setInterval(stoper,100);
}
function stopStoper(){
    clearInterval(IntervalID);
}