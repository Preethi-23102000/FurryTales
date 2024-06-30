function populate(s1,s2){
  var s1=document.getElementById(s1);
  var s2=document.getElementById(s2);
  s2.innerHTML=" ";
  if(s1.value=="dog")
  {
      var optionArray=["|Choose option","dog1|Amy","dog2|Jett","dog3|Polly","dog4|Scotty","dog5|Dexter","dog6|Bri","dog7|Russet","dog8|Sid"];

  }
  else if(s1.value=="cat")
  {
      var optionArray=["|Choose option","cat1|Prue","cat2|Alen","cat1|Chase","cat2|Alex","cat1|Valentine","cat2|Mochi","cat1|Smokey","cat2|Zeke"];

  }
  for(var option in optionArray)
  {
      var pair=optionArray[option].split("|");
      var newOption=document.createElement("option");
      newOption.value=pair[0];
      newOption.innerHTML=pair[1];
      s2.options.add(newOption);

  }



}

function test()
{
      var vex=document.getElementById('slct1');
      if(vex.value=="cat")

      {
         swal("Congratulations", "On Your New Best Friend", "success");
      }

      else if (vex.value=="dog"){
         swal("Congratulations", "On Your New Best Friend", "success");
        }
        else {
           swal("Invalid Submission!", "No Pet Selected ", "error");
        }


}
