function contact()
{

 if(inputname.value.length==0)
    {  swal("Invalid Submission!", "No Information Entred  ", "error");
  }
  else if(inputEmail.value.length==0) {
     swal("Invalid Submission!", "No Information Entred  ", "error");

  }
  else {
      swal("Successfull", "We Will Contact You As Soon As Possible ", "info");
  }


}
