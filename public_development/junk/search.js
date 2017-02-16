'use strict'

 window.onload = function search(){
 var str = "Mr. Blue has a blue house";
 var n = str.search(/blue/i);

  document.getElementById("searchString").innerHTML = str;
  document.getElementById("result").innerHTML = n + " str.search(/blue/i)  ignore case sensetive";
 
}


