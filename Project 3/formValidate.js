/******w*************
    
    Project 3 Javascript
    Name: Bryan Balzer
    Date: 2022-04-24
    Description: Javascript file for Project 3.

********************/
document.addEventListener("DOMContentLoaded", load);

function load(){

    hideErrors();
    
    document.getElementById("submit").addEventListener("click", validate);
    document.getElementById("clear").addEventListener("click", resetForm);
}

function validate(e)
{

    hideErrors();

	if(formHasErrors()){

		e.preventDefault();

		return false;
	}
		return true;	
}

function resetForm(e){

	if(confirm('Clear form?') ){

        let info = ["fullName", "phoneNumber", "emailAddress"];
        for(let i = 0; i < info.length; i++)
        {
            document.getElementById(info[i]).value = "";
        }
        
		hideErrors();
		
		document.getElementById("textField").focus();
		
		return true;
	}

	e.preventDefault();
	
	return false;	
}

function formHasErrors(){
    let errorFlag = false;

    let info = ["fullName", "phoneNumber", "emailAddress"];

    for(let i = 0; i < info.length; i++)
	{
		let textField = document.getElementById(info[i]).value;
		if(textField == null || textField == "")
		{
			document.getElementById(info[i] + "_error").style.display = "block";            

			if(errorFlag == false)
			{
				document.getElementById(info[i]).focus();
				document.getElementById(info[i]).select();
			}
			errorFlag = true;
		}
	}

    let fullNameReg = new RegExp(/^[a-zA-Z ]*$/);
    let name = document.getElementById("fullName").value;

	if(!fullNameReg.test(name))
	{
        document.getElementById("nameFormat_error").style.display = "block";
        document.getElementById("nameFormat_error").style.visibility = "visible";

        if(!errorFlag)
        {
            document.getElementById("name").focus();
            document.getElementById("name").select();
        }
        errorFlag = true;
    }

    let phoneNumberRegEx = new RegExp(/^\d{10}$/);
    let phoneNumber = document.getElementById("phoneNumber").value;

    if(!phoneNumberRegEx.test(phoneNumber))
    {
        document.getElementById("phoneNumberFormat_error").style.display = "block";
        document.getElementById("phoneNumberFormat_error").style.visibility = "visible";

        if(!errorFlag)
        {
            document.getElementById("phoneNumber").focus();
            document.getElementById("phoneNumber").select();
        }
        errorFlag = true;
    }

    let emailRegEx = new RegExp(/^\S+@\S+\.\S+$/);
    let email = document.getElementById("emailAddress").value;

    if(!emailRegEx.test(email))
    {
        document.getElementById("emailFormat_error").style.display = "block";
        document.getElementById("emailFormat_error").style.visibility = "visible";

        if(!errorFlag)
        {
            document.getElementById("email").focus();
            document.getElementById("email").select();
        }
        errorFlag = true;
    }
    return errorFlag;
}

function hideErrors(){

	let error = document.getElementsByClassName("error");

	for(let i = 0; i < error.length; i++){
		error[i].style.display = "none";
	}
}

