const abilita = function(e) {
    let btn = document.getElementById("bottone");
   
    console.log(e.checked);

    if(e.checked == true)
        btn.disabled =  "";
    else 
        btn.disabled = "disabled";
};