var button = document.getElementById("startgame");
const buton_before = button.innerHTML;
var page1 = document.getElementById("welcomepage");
var page2 = document.getElementById("page2");
var gamepage = document.getElementById("gamediv");
function topage2(){
    button.innerHTML= ""
    button.style.bottom = "50%";
    button.style.transform = "translateY(50%)";
    button.style.width= "100%"
    button.style.height= "100%"
    button.style.borderRadius= "20px"
    page2.style.opacity = 1;
    page2.style.visibility= "visible";
}



var question= document.getElementById("question");
var category= document.getElementById("category");
var answerp = document.getElementById("answer");
async function api(url) {
    const response = await fetch(url);
    var data = await response.json();
    question.innerHTML = data.results[0].question;
    category.innerHTML =" " + data.results[0].category;
    answerp.innerHTML = data.results[0].correct_answer;
}




var diff_value = "";
var category_value= null;
function test(){
    var diff = document.getElementById("difficulty")
    var category =document.getElementById("selectbox")
    diff_value = diff.value;
    category_value = category.value;
}

var scorediv = document.getElementById("scorediv")
var divclr = document.getElementById("visiblediv");
var url_second= "";
function topage3(){
    test()
    var url = "https://opentdb.com/api.php?amount=1&category="+category_value+"&difficulty="+diff_value + "&type=boolean";
    url_second = url;
    gamepage.style.width = "100%"
    divclr.style.opacity= 1;
    divclr.style.visibility= "visible";
    scorediv.style.opacity= 1;
    scorediv.style.visibility= "visible";
    question.innerHTML ="Loading..."
    category.innerHTML ="Loading... "
    api(url);
}
var x= 1
var y= 0
var scorenr = document.getElementById("scorenr")
var questionnr = document.getElementById("questnr");
function answer_submited_true(){
    if (answerp.innerHTML == "True"){
       divclr.style.borderBottom = " 20px solid green";
       setTimeout(() => {
        divclr.style.borderBottom = " 1px solid transparent";
      }, "1000")
      x += 1
      questionnr.innerHTML = x;
      y += 1
      scorenr.innerHTML = y;
        api(url_second)
    }
    else {
        x +=1
        questionnr.innerHTML = x;
        divclr.style.borderBottom = " 20px solid red";
        api(url_second)
       setTimeout(() => {
        divclr.style.borderBottom = " 1px solid transparent";
      }, "1000")
      
    }
    
}
function answer_submited_false(){
    if (answerp.innerHTML == "False"){
        divclr.style.borderBottom = " 20px solid green";
       setTimeout(() => {
        divclr.style.borderBottom = " 1px solid transparent";
      }, "1000")
      x += 1
      questionnr.innerHTML = x;
      y += 1
      scorenr.innerHTML = y;
        api(url_second)
    }
    else {
        x += 1
      questionnr.innerHTML = x;
        api(url_second)
        divclr.style.borderBottom = " 20px solid red";
       setTimeout(() => {
        divclr.style.borderBottom = " 1px solid transparent";
      }, "1000")
    }
}
var strat_btn_widht = button.style.width;
var strat_btn_height = button.style.height;
function goback(){
    x = 1 
    y = 0
    scorenr.innerHTML = y;
    scorediv.style.opacity= 0;
    scorediv.style.visibility= "hidden";
    divclr.style.opacity= 0;
    divclr.style.visibility= "hidden";
    gamepage.style.width = "0"
    page2.style.opacity = 0;
    page2.style.visibility= "hidden";
    setTimeout(() => {
    button.style.height= strat_btn_height;
    button.style.width= strat_btn_widht;
    button.style.borderRadius= "30px"
    button.style.bottom = "5vw";
    button.innerHTML= buton_before;
    button.style.transform = "translateY(0%)"
    questionnr.innerHTML = x
      }, "500");
}
