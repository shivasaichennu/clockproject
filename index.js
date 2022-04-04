function clock (){
    var hour = document.getElementById("hour")
    var minute = document.getElementById("minute")
    var second = document.getElementById("second")
    var am = document.getElementById("am-pm")

    var time = new Date();
    var hr = time.getHours();
    // var fog = document.createElement("div");
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var pm ="PM"
    if(hr==0){
        hr=12
    }
    if(hr<12){
        pm="AM"
    }
    if(hr>12){
        hr=hr-12;
        pm="PM";
    }
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec
    }
    hour.innerHTML=hr;
    minute.innerHTML=min;
    second.innerHTML=sec;
    am.innerText=pm;
}
setInterval(clock,1000)

function Partytime(){

    var a = document.getElementById("morning").value;
    var b = document.getElementById("afternoon").value;
    var c = document.getElementById("evening").value;
    var d = document.getElementById("night").value;

var weak = new Date().getHours();

if(a==weak){
    document.getElementById("mng-box1").innerText="Good morning!!wake up!!";
    document.getElementById("grab").innerText="Grab some healthy breakfast!!";
    document.getElementById("change").style.backgroundImage="url(./mng.png)";
}
if(b==weak){
document.getElementById("mng-box1").innerText="Good afternoon!!take some sleep";
document.getElementById("grab").innerText="LETS HAVE SOME LAUNCH";
document.getElementById("change").style.backgroundImage="url(./launch.png)";
}
if(c==weak){
document.getElementById("mng-box1").innerText="GOOD EVENING";
document.getElementById("grab").innerText="STOP YAWNING,GET SOME TEA..ITS JUST EVENING!";
document.getElementById("change").style.backgroundImage="url(./evg.png)";
}

if(d==weak){
    document.getElementById("mng-box1").innerText="GOOD NIGHT!!";
    document.getElementById("grab").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("change").style.backgroundImage="url(./sleep.png)";

}
getOption();

}
function getOption() {

    var e = document.getElementById("morning");
    var ab = e.options[e.selectedIndex].text;
    document.getElementById("text1").innerHTML="wake up time:"+ab;
    
    var f = document.getElementById("afternoon");
    var bc = f.options[f.selectedIndex].text;
    document.getElementById("text2").innerHTML="set launch time:"+bc;

    
    var g = document.getElementById("evening");
      var cd  = g.options[g.selectedIndex].text;
    document.getElementById("text3").innerHTML="set nap time:"+cd;


         var h = document.getElementById("night");
      var ef = h.options[h.selectedIndex].text;
      document.getElementById("text4").innerHTML="set sleep time:"+ef;
    

        //  var idExist = document.getElementById("side");
        // if(idExist){
        //     idExist.innerHTML = `Wake Up Time : ${text1} <br> Lunch Time : ${text2}<br> Nap Time : ${text3}`;
        // }
     
    }

