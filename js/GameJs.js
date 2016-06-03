/**
 * Created by 83884 on 2016/6/1.
 */
/**
 * Created by reallyMax on 2016/3/1.
 */
var j;
var indexStart = 136;
var indexEnd = 172;
var snakeMap = [];
var count = 4;
var kgame = 1;


for(j = 1;j <= 324;++j)
{
    var snakeDiv = document.createElement("div");
    var snakeGame = document.getElementById("game");
    snakeDiv.className="snakeNode";
    snakeDiv.id="node"+j;
    snakeGame.appendChild(snakeDiv);
    snakeMap[j]=0;
}
document.getElementById("node172").style.visibility="visible";
document.getElementById("node154").style.visibility="visible";
document.getElementById("node136").style.visibility="visible";
snakeMap[172]=3;
snakeMap[154]=2;
snakeMap[136]=1;

for(j = 1;j <= 18;++j)
{
    snakeMap[j]=-1;
    document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
    document.getElementById("node"+j).style.visibility="visible";
}
for(j = 307;j <= 324;++j)
{
    snakeMap[j]=-1;
    document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
    document.getElementById("node"+j).style.visibility="visible";
}

for(j = 1;j <= 307;j+=18)
{
    snakeMap[j]=-1;
    document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
    document.getElementById("node"+j).style.visibility="visible";
}
for(j = 18;j <= 324;j+=18)
{
    snakeMap[j]=-1;
    document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
    document.getElementById("node"+j).style.visibility="visible";
}


function turnOn(id)
{
    document.getElementById(id).style.color="#F5F5F5";
}
function turnOff(id)
{
    document.getElementById(id).style.color="#CDCDCD";
}

var direction1;
var direction=1;
function snakeMove()
{
    if(direction==1)
    {
        direction1=setInterval(function(){
            indexStart = indexStart - 18;
            if(snakeMap[indexStart]==-1 || snakeMap[indexStart]>0)
            {
                closeGame();
            }
            else if(snakeMap[indexStart]==-2)
            {
                snakeMap[indexStart]=count;
                ++count;
                food();
                kgame=1;
            }
            else
            {
                snakeMap[indexStart]=count;
                ++count;
                document.getElementById("node"+indexStart).style.visibility="visible";
                document.getElementById("node"+indexEnd).style.visibility="hidden";
                snakeMap[indexEnd] = 0;
                indexEnd = compare(indexEnd-1,indexEnd+1,indexEnd+18,indexEnd-18);
                kgame =1;
            }
        },200)
    }
    if(direction==2)
    {
        direction1=setInterval(function(){
            indexStart = indexStart - 1;
            if(snakeMap[indexStart]==-1 || snakeMap[indexStart]>0)
            {
                closeGame();
            }
            else if(snakeMap[indexStart]==-2)
            {
                snakeMap[indexStart]=count;
                ++count;
                food();
                kgame=1;
            }
            else
            {
                snakeMap[indexStart]=count;
                ++count;
                document.getElementById("node"+indexStart).style.visibility="visible";
                document.getElementById("node"+indexEnd).style.visibility="hidden";
                snakeMap[indexEnd] = 0;
                indexEnd = compare(indexEnd-1,indexEnd+1,indexEnd+18,indexEnd-18);
                kgame=1;
            }
        },200)
    }
    if(direction==3)
    {
        direction1=setInterval(function(){
            indexStart = indexStart + 18;
            if(snakeMap[indexStart]==-1 || snakeMap[indexStart]>0)
            {
                closeGame();
            }
            else if(snakeMap[indexStart]==-2)
            {
                snakeMap[indexStart]=count;
                ++count;
                food();
                kgame=1;
            }
            else
            {
                snakeMap[indexStart]=count;
                ++count;
                document.getElementById("node"+indexStart).style.visibility="visible";
                document.getElementById("node"+indexEnd).style.visibility="hidden";
                snakeMap[indexEnd] = 0;
                indexEnd = compare(indexEnd-1,indexEnd+1,indexEnd+18,indexEnd-18);
                kgame=1;
            }
        },200)
    }
    if(direction==4)
    {
        direction1=setInterval(function(){
            indexStart = indexStart + 1;
            if(snakeMap[indexStart]==-1 || snakeMap[indexStart]>0)
            {
                closeGame();
            }
            else if(snakeMap[indexStart]==-2)
            {
                snakeMap[indexStart]=count;
                ++count;
                food();
                kgame=1;
            }
            else
            {
                snakeMap[indexStart]=count;
                ++count;
                document.getElementById("node"+indexStart).style.visibility="visible";
                document.getElementById("node"+indexEnd).style.visibility="hidden";
                snakeMap[indexEnd] = 0;
                indexEnd = compare(indexEnd-1,indexEnd+1,indexEnd+18,indexEnd-18);
                kgame=1;
            }
        },200)
    }
}
function changeDirection(e)
{
    if(kgame==1)
    {
        kgame=0;
        if(direction!=4 && e.keyCode==37)
        {
            e.preventDefault();
            clearInterval(direction1);
            direction=2;
            snakeMove();
        }
        else if(direction!=3 && e.keyCode==38)
        {
            e.preventDefault();
            clearInterval(direction1);
            direction=1;
            snakeMove();
        }
        else if(direction!=2 && e.keyCode==39)
        {
            e.preventDefault();
            clearInterval(direction1);
            direction=4;
            snakeMove();
        }
        else if(direction!=1 && e.keyCode==40)
        {
            e.preventDefault();
            clearInterval(direction1);
            direction=3;
            snakeMove();
        }
    }
}
function compare(ca,cb,cc,cd)
{
    var min = 9999999;
    var res;
    if(snakeMap[ca]>0 && snakeMap[ca]<min)
    {
        res = ca;
        min = snakeMap[ca];
    }
    if(snakeMap[cb]>0 && snakeMap[cb]<min)
    {
        res = cb;
        min = snakeMap[cb];
    }
    if(snakeMap[cc]>0 && snakeMap[cc]<min)
    {
        res = cc;
        min = snakeMap[cc];
    }
    if(snakeMap[cd]>0 && snakeMap[cd]<min)
    {
        res = cd;
        min = snakeMap[cd];
    }
    return res;
}
var now;
var random;
food();

function food()
{
    now = new Date();
    random = now.getTime()%324+1;
    while(snakeMap[random]!=0)
    {
        now = new Date();
        random = now.getTime()%324+1;
    }
    if(snakeMap[random]==0)
    {
        document.getElementById("node"+random).style.visibility="visible";
        snakeMap[random]=-2;
    }
}
function closeGame()
{
    clearInterval(direction1);
    alert("you lost!");
    indexStart = 136;
    indexEnd = 172;
    count = 4;
    direction=1;
    for(j=1;j<=324;++j)
    {
        snakeMap[j]=0;
        document.getElementById("node"+j).style.visibility="hidden";
    }
    document.getElementById("node172").style.visibility="visible";
    document.getElementById("node154").style.visibility="visible";
    document.getElementById("node136").style.visibility="visible";
    snakeMap[172]=3;
    snakeMap[154]=2;
    snakeMap[136]=1;
    for(j = 1;j <= 18;++j)
    {
        snakeMap[j]=-1;
        document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
        document.getElementById("node"+j).style.visibility="visible";
    }
    for(j = 307;j <= 324;++j)
    {
        snakeMap[j]=-1;
        document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
        document.getElementById("node"+j).style.visibility="visible";
    }
    for(j = 1;j <= 307;j+=18)
    {
        snakeMap[j]=-1;
        document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
        document.getElementById("node"+j).style.visibility="visible";
    }
    for(j = 18;j <= 324;j+=18)
    {
        snakeMap[j]=-1;
        document.getElementById("node"+j).style.backgroundColor="#CDCDCD";
        document.getElementById("node"+j).style.visibility="visible";
    }
    food();
    kgame=1;
}
