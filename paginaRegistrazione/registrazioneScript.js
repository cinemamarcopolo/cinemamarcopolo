function validaForm(){
    if(document.myForm.inputName.value.length>20){
        window.alert("Nome troppo lungo!"); return false;
    }else if(document.myForm.inputSurname.value.length>20){
        window.alert("Cognome troppo lungo!"); return false;
    }else if(document.myForm.inputPassword.value.length<5){
        window.alert("Password troppo corta!"); return false;
    }
    return true;
}