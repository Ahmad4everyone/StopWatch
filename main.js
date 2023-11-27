// var [mil,sec,min,hour] = [0,0,0,0]
var mili = document.getElementById('mili')
var sec = document.getElementById('sec')
var min = document.getElementById('min')
var hr = document.getElementById('hr')
var time = document.querySelector(".display")
var int = null

document.getElementById("start").addEventListener("click",()=>{
    if(int !== null){
        clearInterval(int)

    }
    int = setInterval(function(){
        mili.innerHTML = parseInt(mili.innerHTML) + 1;

        if(mili.innerHTML === '99') {
            sec.innerHTML = parseInt(sec.innerHTML) + 1;
            mili.innerHTML = '00';
        }
        if(sec.innerHTML === '60') {
            sec.innerHTML = '00';
            min.innerHTML = parseInt(min.innerHTML) + 1;
        }
        if(min.innerHTML === '60') {
            min.innerHTML = '00';
            hr.innerHTML = parseInt(hr.innerHTML) + 1;
        }
    },10)
})

document.getElementById("pause").addEventListener("click",()=>{
    clearInterval(int)
})

document.getElementById("reset").addEventListener("click",()=>{
    // clearInterval(int)
    // {mil,sec,min,hour } + [0,0,0,0]
    // document.getElementById('dis').innerHTML = '00 : 00 : 00 : 00'
    
    mili.innerHTML = '00';
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hr.innerHTML = '00';
})

