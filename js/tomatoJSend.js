/**
 * Created by reallyMax on 2016/3/1.
 */
var i = 1;
var j;
var count = 4;

function turnOn(id)
{
    document.getElementById(id).style.color="#F5F5F5";
}
function turnOff(id)
{
    document.getElementById(id).style.color="#CDCDCD";
}

function addNode()
{
    var eventBoxFirst=document.getElementById("eventBoxFirst");
    var navInput = document.getElementById("navInput");
    var eventBoxSecond=document.getElementById("eventBoxSecond");

    if(navInput.value!="")
    {
        var li = document.createElement("li");
        var input = document.createElement("input");
        var div = document.createElement("div");
        var para = document.createElement("p");
        var text = document.createTextNode(navInput.value);

        para.appendChild(text);
        div.appendChild(para);
        var a = document.createElement("a");
        var img = document.createElement("img");
        a.appendChild(img);

        li.id="liList"+i;
        input.type="checkbox";
        img.src="image/reduceIcon.png";

        li.appendChild(input);
        li.appendChild(div);
        li.appendChild(a);

        a.onclick=function(){var liPar = this.parentNode;liPar.parentNode.removeChild(liPar)};

        input.onchange=function()
        {
            eventBoxSecond.appendChild(li);
            li.removeChild(input);
        };


        eventBoxFirst.appendChild(li);
        ++i;
        navInput.value="";
    }
    else
    {
        alert("Please check your answer!");
    }
}

function saveLoad()
{
    var j = 0;
    var eventBoxFirst=document.getElementById("eventBoxFirst");
    var eventBoxSecond=document.getElementById("eventBoxSecond");

    var dataTag = [];
    dataTag = eventBoxFirst.getElementsByTagName("p");
    var dataContent = [];
    for(j = 0;j < dataTag.length;++j)
    {
        dataContent[j] = "";
        dataContent[j] += dataTag[j].innerHTML;
    }

    localStorage.setItem("Doing",JSON.stringify(dataContent));

    dataTag = [];
    dataTag = eventBoxSecond.getElementsByTagName("p");
    dataContent = [];
    for(j = 0;j < dataTag.length;++j)
    {
        dataContent[j] = "";
        dataContent[j] += dataTag[j].innerHTML;
    }

    localStorage.setItem("Done",JSON.stringify(dataContent));
}

function getLoad()
{
    var data = [];
    data = JSON.parse(localStorage.getItem("Doing"));

    var eventBoxFirst=document.getElementById("eventBoxFirst");
    var eventBoxSecond=document.getElementById("eventBoxSecond");

    for(j = 0;j < data.length;++j)
    {
        var content = "";
        content = data[j];

        var li = document.createElement("li");
        var input = document.createElement("input");
        var div = document.createElement("div");
        var para = document.createElement("p");
        var text = document.createTextNode(content);

        para.appendChild(text);
        div.appendChild(para);
        var a = document.createElement("a");
        var img = document.createElement("img");
        a.appendChild(img);

        li.id="liList"+i;
        input.type="checkbox";
        img.src="image/reduceIcon.png";

        li.appendChild(input);
        li.appendChild(div);
        li.appendChild(a);

        a.onclick=function(){var liPar = this.parentNode;liPar.parentNode.removeChild(liPar)};

        input.onchange=function() {
            var inputPar = this.parentNode;
            eventBoxSecond.appendChild(inputPar);
            inputPar.removeChild(this);
        };

        eventBoxFirst.appendChild(li);
        ++i;
    }

    data = [];
    data = JSON.parse(localStorage.getItem("Done"));

    for(j = 0;j < data.length;++j)
    {
        content = "";
        content = data[j];

        li = document.createElement("li");
        div = document.createElement("div");
        para = document.createElement("p");
        text = document.createTextNode(content);

        para.appendChild(text);
        div.appendChild(para);
        a = document.createElement("a");
        img = document.createElement("img");
        a.appendChild(img);

        li.id="liList"+i;
        img.src="image/reduceIcon.png";

        li.appendChild(div);
        li.appendChild(a);

        a.onclick=function(){var liPar = this.parentNode;liPar.parentNode.removeChild(liPar)};

        eventBoxSecond.appendChild(li);
        ++i;
    }
}


var a, b, c,d;
var k = 1;
var clock;
function tomato()
{
    if(k == 1)
    {
        k = 0;
        var x=document.getElementById("time");
        var hundouluo = document.getElementById("hundouluo");
        a = 2;
        b = 5;
        c = 0;
        d = 0;
        clock=setInterval(function(){
            --d;
            if(a==0&&b==0&&c==0&&d==0)
            {
                x.innerHTML=a+""+b+":"+c+""+d;
                hundouluo.play();
                a = 2;
                b = 5;
                c = 0;
                d = 0;
            }
            if(d==-1)
            {
                d=9;
                --c;
            }
            if(c==-1)
            {
                c=5;
                --b;
            }
            if(b==-1)
            {
                b=9;
                --a;
            }

            x.innerHTML=a+""+b+":"+c+""+d;

        },1000);
    }
}
function stop()
{
    var hundouluo = document.getElementById("hundouluo");
    hundouluo.pause();
    hundouluo.currentTime=0;
    clearInterval(clock);
    k=1;
    var x=document.getElementById("time");
    x.innerHTML="25:00";
}
