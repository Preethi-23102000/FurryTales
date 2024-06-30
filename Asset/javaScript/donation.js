function donation()
{
    if(document.getElementById('inputname').value.length==0)
    {
        swal("Invalid Submission!", "Name not Entered ", "error");

    }
   else if(document.getElementById('inputnumber').value.length==0)
    {
        swal("Invalid Submission!", "Mobile Number not Entered ", "error");

    }
   else if(document.getElementById('inputEmail').value.length==0)
    {
        swal("Invalid Submission!", "Email not Entered ", "error");

    }
    else if(document.getElementById('inputamount').value<=0)
    {
        swal("Invalid Submission!", "Amount not Entered ", "error");

    }
    else {
        swal("Thank You", "Your Donation Will Help This Animals ", "Success");


    }





}
