/* this is a javaScript file which contain the function for repeating the string given number of times.*/


function repString(str,no)        
{
     var text,i;   
     if(no === undefined)         //to check if number input is given or not
     {
        no = 1;                   //if not given set default value of it as 1
     }
     for(i = 0; i < no; i++)      //loop for repeating string given no. of times
     {
         text = document.getElementById("demo").innerHTML;       //take content from HTML tag where we want to display the output
         document.getElementById("demo").innerHTML = text + str;       //concate the string
     }

}