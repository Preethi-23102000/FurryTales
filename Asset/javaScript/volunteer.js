function verification()
{

  if(document.getElementById('inputdays').value<=0)
    {
      swal("Invalid Submission!", "Number of Days Entred are wrong ", "error");
    }
    else if(document.getElementById('inputname').value.length==0)
    {
         swal("Invalid Submission!", "No Name Entered  ", "error");

    }
    else if(document.getElementById('inputEmail').value.length==0)
    {
         swal("Invalid Submission!", "No Email Entered  ", "error");

    }
    else if(document.getElementById('inputnumber').value.length==0)
    {
         swal("Invalid Submission!", "No Number Entered  ", "error");

    }
   else
    {
        swal("From Submitted Successfully", "Thank You To be Volunteer", "success");

   }




    }
