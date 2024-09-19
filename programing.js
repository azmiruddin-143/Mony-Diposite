
  document.getElementById("lo-btn").addEventListener("click",function(e) {
     e.preventDefault();
    
      let loginnumber = document.getElementById("lo-number");
      loginnumber.value;
      let loginpin = document.getElementById("lo-pin");
      loginpin.value;

      if(loginnumber.value === "22" && loginpin.value === "44"){
        //    console.log("login");
           window.location.href = "/diposite.html";
      }
      else{
        alert("faild");
      }

  })