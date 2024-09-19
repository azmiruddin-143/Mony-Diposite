
//  Diposite Javascript//
document.getElementById("diposite-btn").addEventListener("click", function (e) {
    e.preventDefault()

    let dipositeamount = document.getElementById("di-amount");
    let diallamount = dipositeamount.value;
    let allamount = document.getElementById("all-amount");
    let mostamount = allamount.innerText;
    let dipositenumber = document.getElementById("di-number");
    dipositenumber.value;
    let dipositepin = document.getElementById("di-pin");
    dipositepin.value;

    if (dipositenumber.value === "22" && dipositepin.value === "44" && dipositeamount.value) {
        let allvalue = parseFloat(mostamount) + parseFloat(diallamount);
        allamount.innerText = allvalue;


    }
    else {
        alert("faild");
    }

})

//  chasout javascript///


document.getElementById("casout-btn").addEventListener("click", function (e) {
    e.preventDefault()

    let cashoutamount = document.getElementById("cas-amount");
    let cashoutallamount = cashoutamount.value;
    let allamount = document.getElementById("all-amount");
    let mostamount = allamount.innerText;
    let cashoutnumber = document.getElementById("cas-number");
    cashoutnumber.value;
    let cashoutpin = document.getElementById("cas-pin");
    cashoutpin.value;

    if (cashoutnumber.value === "22" && cashoutpin.value === "44" && cashoutamount.value) {
        let allvalue = parseFloat(mostamount) - parseFloat(cashoutallamount);
        allamount.innerText = allvalue;

       

    }
    else {
        alert("faild");
    }

})




// others .............................................................

document.getElementById("addmony-btn").addEventListener("click", function () {
    //    btn- color
    let addmonycolor = document.getElementById("addmony-btn");
    addmonycolor.style.background = "#1010ae";
    addmonycolor.style.color = "white";
    addmonycolor.style.border = "none";
    addmonycolor.style.borderRadius = "5px";

    let chasoutcolor = document.getElementById("chasout-btn");
    chasoutcolor.style.background = "none";
    chasoutcolor.style.color = "black";
    chasoutcolor.style.border = "1px solid #757474"





    // form hide and show
    document.getElementById("diposite-hide").classList.remove("hidden");
    document.getElementById("chasout-hide").classList.add("hidden")


})

document.getElementById("chasout-btn").addEventListener("click", function () {
    // btn- color

    let chasoutcolor = document.getElementById("chasout-btn");
    chasoutcolor.style.background = "#1010ae";
    chasoutcolor.style.color = "white";
    chasoutcolor.style.border = "none";
    chasoutcolor.style.borderRadius = "5px";


    let addmonycolor = document.getElementById("addmony-btn");
    addmonycolor.style.background = "none";
    addmonycolor.style.color = "black";
    addmonycolor.style.borderRadius = "5px";
    addmonycolor.style.border = "1px solid #757474"


    // form hide and show
    document.getElementById("chasout-hide").classList.remove("hidden");
    document.getElementById("diposite-hide").classList.add("hidden");

})



document.getElementById("logout-btn").addEventListener("click", function () {
    window.location.href = "/index.html";
})




