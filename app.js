window.onload = ()=>{
    daytime();
}

document.querySelector("#message").addEventListener("click", viewMessages);

function daytime(){
    setInterval(function timer(){
        let today = new Date();
        let day = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thrusday",
            5: "Friday",
            6: "Saturday",
            7: "Sunday"
        };
        
        document.querySelector("#stime").innerHTML = today.getHours()+":"+today.getMinutes();
        document.querySelector("#time").innerHTML = today.getHours()+":"+today.getMinutes();
        document.querySelector("#day").innerHTML = day[today.getDay()];
    }, 1000);
}

function viewMessages(){

    let watchFace = document.querySelector("#watch-face");
    let messageDisplay = document.createElement("div");
    messageDisplay.setAttribute("id", "message-display");

    let java = document.createElement("div");
    java.setAttribute("class", "message-text");
    java.setAttribute("id", "message-java");
    java.innerHTML = "Java";

    let html = document.createElement("div");
    html.setAttribute("class", "message-text");
    html.setAttribute("id", "message-html");
    html.innerHTML = "Html";

    let css = document.createElement("div");
    css.setAttribute("class", "message-text");
    css.setAttribute("id", "message-css");
    css.innerHTML = "CSS";

    messageDisplay.appendChild(java);
    messageDisplay.appendChild(html);
    messageDisplay.appendChild(css);

    document.querySelector(".daytime").remove();
    watchFace.appendChild(messageDisplay);
}

let java_listener = document.querySelector("#message-java");
java_listener.addEventListener("click", messageJava);

function messageJava(){
    let text = document.querySelector("message-text");
    text.remove();
}