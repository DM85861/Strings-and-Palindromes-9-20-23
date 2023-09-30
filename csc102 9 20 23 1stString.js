//Sending a string command to the computer for 
//replacements, toLowerCase strings, and text reversals and joining strings //

function strings()
{
    var str1 = document.getElementById("initString").value;
    alert(str1);

    var str2 = str1.substring(0,3);
    alert("str2 = substr " + str2);

    str1 = str1.replace(/sad/, "bad");
    str2 = str2.replace(/sad/i, "bad")// i = case Insensitive
    alert("replace sad with bad " + str2);

    str1 = str1.toLowerCase();
    alert("lower case str1" + str1);
    str2 = str1.replace(/sad/g, "bad");
    alert("replace all " + str2);
    
       //reverse a string
    var splitString = str1.split("")
     alert("split string = " + splitString);
    var reverseString = splitString.reverse();
     alert("reversed string = " + reverseString);
    var joinString = reverseString.join("");
     alert("joined string " + joinString);
 
  if (str1 ==joinString)
  {
    document.getElementById("updated string").innerHTML = "This IS a palindrome";
    alert("This IS a palindrome");
  }
  else
  {
    document.getElementById("updated string").innerHTML = "This is NOT a palindrome";
    alert("This is NOT a palindrome");
  }
  

}
//https://www.programiz.com/css/background
//code snippet placed in CSS is from url