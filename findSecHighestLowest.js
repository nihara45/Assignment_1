/*This is a javaScript file which contain function to find the second highest and second lowest number
  from a received array as a parameter.  */

function secHighLow(arr)
{
   if(arr.length > 1)                      //to check array is not with only one element
   {
     var high, secHigh, low, secLow;       //4 variables to have comparision of highest and second highest, lowest and second lowest
     if(arr[0] > arr[1])                   //logic is compare first 2 elements so that you will have high,secHigh,low, secLow
     {                                     //if the first element of array is greater than second
        high = arr[0];                     //put the greater elenent in high
        secHigh = arr[1];                  //put the smaller elenent in secHigh
        low = arr[1];                      //put the smaller elenent in low     
        secLow = arr[0];                   //put the greater elenent in secLow
     }                                     
     else
     {                                     //when second element of the array is greater than first
       high = arr[1];                      //put the greater elenent in high
       secHigh = arr[0];                   //put the smaller elenent in secHigh
       low = arr[0];                       //put the smaller elenent in low
       secLow = arr[1];                    //put the greater elenent in secLow
     }
    
    
     var x;                                        // variable used in for loop
     for(x = 2; x < arr.length; x++)               //start from 3rd element cuz first 2 element you have compared 
     {                                             //compare the element with each of the high,secHigh,low,secLOw
        if(low > arr[x])                           //only if xth element is smaller than the low 
        {
           secLow = low;                           //put the earlier low in secLOW
           low = arr[x];                           //put the xth element in low
        }
        else                                       //when xth element is greater than low then no need to change low variable cuz as it is low
        if(secLow > arr[x])                        //but check xth element is lower than secLow
        {          
           secLow = arr[x];                        //if xth element is lower than the secLow then put it in secLow variable
        }

        if(high < arr[x])                          //only if xth element is grater than the high
        {
           secHigh = high;                        //put the earlier high in secHigh 
           high = arr[x];                         //put xth element in high variable
        }
        else                                      //when xth element is smaller than the high varable
        if(secHigh < arr[x])                      //but if its is greater than the secHigh 
        {
           secHigh = arr[x];                      //put xth element in secHigh
        }
      }                                           //after this for loop we will have highest,secHighest,lowest,secLowest numbers from array
      document.write('Second lowest element is :' + secLow + '<br>' +         'Second highest element is:' + secHigh );  //print second Highest and second lowest
    }

    else                                          // that is when array length is less than 2 element 
    document.write("Array too small");
}