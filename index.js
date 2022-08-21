let container = document.getElementById("container");

let account = getDataFromStorage()
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("action")) {
        addSignupForm();
    }
    if (e.target.classList.contains("act")) {
        addLoginForm () ;
    }
})

function getDataFromStorage() {
    var account = [] ;
    if (localStorage.getItem("accounts")) {
        account = JSON.parse(localStorage.getItem("accounts"));    
    }
    return account ;
}
function addSignupForm () {
    container.innerHTML = "" ;
    let bigdiv = document.createElement("div");
    bigdiv.className = "signupbox";
    let head = document.createElement("div");
    head.className = "titleup";
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Signup Form"));
    head.appendChild(header) ;
    bigdiv.appendChild(head);
    let inputdiv = document.createElement("div");
    inputdiv.className ="input-icons";


    let iconone = document.createElement("i");
    iconone.className = "fa-solid fa-at icon" ;
    let inputone = document.createElement("input");
    inputone.className = "input-field";
    inputone.type = "email" ;
    inputone.placeholder = "email" ;
    inputdiv.appendChild(iconone);
    inputdiv.appendChild(inputone);
    inputdiv.appendChild(document.createElement("br"));


    let icontwo = document.createElement("i");
    icontwo.className = "fa fa-user icon" ;
    let inputtwo = document.createElement("input");
    inputtwo.className = "input-field";
    inputtwo.type = "text" ;
    inputtwo.placeholder = "username" ;
    inputdiv.appendChild(icontwo);
    inputdiv.appendChild(inputtwo);
    inputdiv.appendChild(document.createElement("br"));




    let iconthree = document.createElement("i");
    iconthree.className = "fa-solid fa-lock icon" ;
    let inputthree = document.createElement("input");
    inputthree.className = "input-field";
    inputthree.type = "password" ;
    inputthree.placeholder = "password" ;
    inputdiv.appendChild(iconthree);
    inputdiv.appendChild(inputthree);
    inputdiv.appendChild(document.createElement("br"));


    let iconfour = document.createElement("i");
    iconfour.className = "fa-solid fa-lock icon" ;
    let inputfour = document.createElement("input");
    inputfour.className = "input-field";
    inputfour.type = "password" ;
    inputfour.placeholder = "password" ;
    inputdiv.appendChild(iconfour);
    inputdiv.appendChild(inputfour);
    inputdiv.appendChild(document.createElement("br"));

    bigdiv.appendChild(inputdiv);

    let btn = document.createElement("button")
    btn.setAttribute("id", "signupbutton");
    btn.appendChild(document.createTextNode("Create account"));
    bigdiv.appendChild(btn);

    let par = document.createElement("p");
    par.setAttribute("id", "quest");
    par.appendChild(document.createTextNode("I have an account "))
    let span = document.createElement("span");
    span.className="act";
    span.appendChild(document.createTextNode("Login now"));
    par.appendChild(span);
    bigdiv.appendChild(par) ;

    container.appendChild(bigdiv) ;

    btn.onclick = function () {
        let inp = [inputone, inputtwo, inputthree, inputfour];
        inp.forEach(element => {
             if (element.classList.contains("acc")) {
                element.classList.remove("acc")
             }
        })
        if (inputone.value.length !== 0) {
            if (inputtwo.value.length !== 0) {
                if (inputthree.value.length !== 0){
                    if (inputfour.value.length !== 0){
                        if (inputthree.value === inputfour.value) {
                            
                            const obj = {
                                username : inputtwo.value,
                                password : inputthree.value
                            } ;
                            if (account.length !== 0) {
                                account.some (element => {
                                    if(element.username === obj.username && element.password === obj.password){
                                        alert("this account exist") ;
                                        inp.forEach(element => {
                                            element.innerHTML ="" ;
                                        })
                                        return true;
                                    }
                                    else {
                                        alert("you signed up successfully") ;
                                        account.push(obj) ;
                                        inp.forEach(element => {
                                            element.innerHTML ="" ;
                                        })
                                        return true ;
                                    }
                                })
                            }
                            else {
                                alert("you signed up successfully") ;
                                account.push(obj) ;
                                inp.forEach(element => {
                                    element.innerHTML ="" ;
                                })
                            }
                        }
                        else {
                            inputfour.classList.add("acc") ;
                            inputfour.placeholder = "please confirm your password";
                            inputfour.value = "" ;
                        }
                         
                        
                    }
                    else {
                        inputfour.classList.add("acc") ;
                        inputfour.placeholder = "please confirm your password";
                    }
                }
                else {
                    inputthree.classList.add("acc") ;
                    inputthree.placeholder = "please enter your password";
                }
            }
            else {
                inputtwo.classList.add("acc") ;
                inputtwo.placeholder = "please enter your username";
            }
        }
        else {
            inputone.classList.add("acc") ;
            inputone.placeholder = "please enter your email";
        }
    }
}

function addDataToLocalStorage (account) {
    localStorage.setItem("accounts", JSON.stringify(account))
}
function addLoginForm () {
    container.innerHTML = "" ;
    let bigdivtwo = document.createElement("div");
    bigdivtwo.className = "signinbox";
    let head = document.createElement("div");
    head.className = "title";
    let header = document.createElement("h1");
    header.appendChild(document.createTextNode("Login Form"));
    head.appendChild(header) ;
    bigdivtwo.appendChild(head);
    let inputdiv = document.createElement("div");
    inputdiv.className ="input-icons";


    let icontwo = document.createElement("i");
    icontwo.className = "fa fa-user icon" ;
    let inputsix = document.createElement("input");
    inputsix.className = "input-field";
    inputsix.type = "text" ;
    inputsix.placeholder = "username" ;
    inputdiv.appendChild(icontwo);
    inputdiv.appendChild(inputsix);
    inputdiv.appendChild(document.createElement("br"));




    let iconthfive = document.createElement("i");
    iconthfive.className = "fa-solid fa-lock icon" ;
    let inputfive = document.createElement("input");
    inputfive.className = "input-field";
    inputfive.type = "password" ;
    inputfive.placeholder = "password" ;
    inputdiv.appendChild(iconthfive);
    inputdiv.appendChild(inputfive);
    inputdiv.appendChild(document.createElement("br"));

    bigdivtwo.appendChild(inputdiv) ;

    let p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("Forgot ")) ;
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.appendChild(document.createTextNode("password")) ;
    p1.appendChild(a);
    bigdivtwo.appendChild(p1);

    let bttn = document.createElement("button")
    bttn.setAttribute("id", "loginbutton");
    bttn.appendChild(document.createTextNode("Login Now"));
    bigdivtwo.appendChild(bttn);

    let p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Don't have an account ?")) ;
    p2.setAttribute("id", "quest");
    bigdivtwo.appendChild(p2);

    let sp = document.createElement("span");
    sp.className ="action";
    sp.appendChild(document.createTextNode("sign up now")) ;
    bigdivtwo.appendChild(sp) ;

    container.appendChild(bigdivtwo) ;


    bttn.onclick = function () {
        var inpu = [inputfive, inputsix] ;
        inpu.forEach(element => {
            if (element.classList.contains("acc")) {
               element.classList.remove("acc")
            }
       })
       if (inputsix.value.length !== 0) {
            if (inputfive.value.length !== 0) {
                const obj = {
                    username : inputsix.value,
                    password : inputfive.value
                } ;
                if (account.length !== 0) {
                    account.some (element => {
                        if(element.username === obj.username && element.password === obj.password){
                            alert("helllloooo") ;
                            return true ;
                        }
                        else {
                            alert("this account is invalid please register before") ;
                            return true;
                        }
                    })
                }
                else {
                    alert("this account is invalid please register before") ;
                }
            }
            else {
                inputfive.classList.add("acc") ;
                inputfive.placeholder = "enter your password please" ;
            }
       }
       else {
        inputsix.classList.add("acc") ;
        inputsix.placeholder = "enter your username please" ;
       }
    }

}
function controle () {
    let inputsix = document.getElementById("inputsix") ;
    let inputfive = document.getElementById("inputfive") ;

    var inpu = [inputfive, inputsix] ;
        inpu.forEach(element => {
            if (element.classList.contains("acc")) {
               element.classList.remove("acc")
            }
       })
       if (inputsix.value.length !== 0) {
        if (inputfive.value.length !== 0) {
            const obj = {
                username : inputsix.value,
                password : inputfive.value
            } ;
            if (account.length !== 0) {
                account.some (element => {
                    if(element.username === obj.username && element.password === obj.password){
                        alert("helllloooo") ;
                        return true ;
                    }
                    else {
                        alert("this account is invalid please register before") ;
                        return true;
                    }
                })
            }
            else {
                alert("this account is invalid please register before") ;
            }
        }
        else {
            inputfive.classList.add("acc") ;
            inputfive.placeholder = "enter your password please" ;
        }
       }
       else {
        inputsix.classList.add("acc") ;
        inputsix.placeholder = "enter your username please" ;
       }
}
