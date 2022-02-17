//9's complement-->
function complement9(){
    var number,count=0,newnumber,result,r,N;
    number = parseInt(document.getElementById("num1").value);
    newnumber = number; 
while(number !=0){
    
    number = Math.floor(number / 10);
    ++count;
}

    result =(( Math.pow(10,count)) - newnumber) - 1;

    
    document.getElementById('pes').innerHTML = "We know that,<br>"+
                                               "r = Base<br>"+
                                               "n = Number of digit<br>"+
                                               "N = Given number<br>"+
                                               "<br><b>9'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N - 1<br>"+
                                                                         " = 10<sup>"+count+"</sup> - "+newnumber+" - 1"+"<br>"+
                                                                         " = ("+result+")<sub>10</sub>" ;
}
//8 complement Js
function complement8(){

    var x = document.getElementById("num1").value;
    var deci = parseInt(x,8);
    var oct = parseInt(document.getElementById("num1").value);
    var newoct = oct;
    var result, count=0;

    while(oct !=0){
    
        oct = Math.floor(oct / 10);
        ++count;
    }
    
        result =(( Math.pow(8,count)) -deci);


        //newoct convert to decimal

        var octalcoverter = result.toString(8);
    
        
        document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                   "r = Base<br>"+
                                                   "n = Number of digit<br>"+
                                                   "N = Given number<br>"+
                                                   "<br><b>8'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N<br>"+
                                                                             " = 8<sup>"+count+"</sup> "+"-"+newoct+"<br>"+
                                                                             " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                             " = ("+octalcoverter+")<sub>8</sub>" ;
   
   
       }

//7's Complement
function complement7(){

    var x = document.getElementById("num1").value;
    var deci = parseInt(x,8);
    var oct = parseInt(document.getElementById("num1").value);
    var newoct = oct;
    var result, count=0;

    while(oct !=0){
    
        oct = Math.floor(oct / 10);
        ++count;
    }
    
        result =(( Math.pow(8,count)) -deci) -1;


        //newoct convert to decimal

        var octalcoverter = result.toString(8);
    
        
        document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                   "r = Base<br>"+
                                                   "n = Number of digit<br>"+
                                                   "N = Given number<br>"+
                                                   "<br><b>7'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N - 1<br>"+
                                                                             " = 8<sup>"+count+"</sup> "+"-"+newoct+"- 1 <br>"+
                                                                             " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                             " = ("+octalcoverter+")<sub>8</sub>" ;

       }

 //2's Complement  
 function complement2(){

    var x = document.getElementById("num1").value;
    var deci = parseInt(x,2);
    var oct = parseInt(document.getElementById("num1").value);
    var newoct = oct;
    var result, count=0;

    while(oct !=0){
    
        oct = Math.floor(oct / 10);
        ++count;
    }
    
        result =(( Math.pow(2,count)) -deci);


        //newoct convert to decimal

        var binarycoverter = result.toString(2);
    
        
        document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                   "r = Base<br>"+
                                                   "n = Number of digit<br>"+
                                                   "N = Given number<br>"+
                                                   "<br><b>2'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N<br>"+
                                                                             " = 2<sup>"+count+"</sup> "+"-"+newoct+" <br>"+
                                                                             " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                             " = ("+binarycoverter+")<sub>2</sub>" ;

       }    

//1's Complement
 
function complement1(){

    var x = document.getElementById("num1").value;
    var deci = parseInt(x,2);
    var oct = parseInt(document.getElementById("num1").value);
    var newoct = oct;
    var result, count=0;

    while(oct !=0){
    
        oct = Math.floor(oct / 10);
        ++count;
    }
    
        result =(( Math.pow(2,count)) -deci) -1;


        //newoct convert to decimal

        var binarycoverter = result.toString(2);
    
        
        document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                   "r = Base<br>"+
                                                   "n = Number of digit<br>"+
                                                   "N = Given number<br>"+
                                                   "<br><b>1'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N - 1<br>"+
                                                                             " = 2<sup>"+count+"</sup> "+"-"+newoct+" - 1<br>"+
                                                                             " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                             " = ("+binarycoverter+")<sub>2</sub>" ;

       }        
       
       
//16's Complement
 
function complement16(){

    var x = document.getElementById("num1").value;
    var deci = parseInt(x,16);
    var oct = parseInt(document.getElementById("num1").value);
    var newoct = oct;
    var result, count=0;

    while(oct !=0){
    
        oct = Math.floor(oct / 10);
        ++count;
    }
    
        result =(( Math.pow(16,count)) -deci);


        //newoct convert to decimal

        var binarycoverter = result.toString(16).toUpperCase();
    
        
        document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                   "r = Base<br>"+
                                                   "n = Number of digit<br>"+
                                                   "N = Given number<br>"+
                                                   "<br><b>16'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N <br>"+
                                                                             " = 16<sup>"+count+"</sup> "+"-"+newoct+" <br>"+
                                                                             " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                             " = ("+binarycoverter+")<sub>16</sub>" ;

       }               


      //16's Complement
 
       function complement15(){
       
           var x = document.getElementById("num1").value;
           var deci = parseInt(x,16);
           var oct = parseInt(document.getElementById("num1").value);
           var newoct = oct;
           var result, count=0;
       
           while(oct !=0){
           
               oct = Math.floor(oct / 10);
               ++count;
           }
           
               result =(( Math.pow(16,count)) -deci) -1;
       
       
               //newoct convert to decimal
       
               var binarycoverter = result.toString(16).toUpperCase();
           
               
               document.getElementById('pes').innerHTML = "We know that,<br>"+
                                                          "r = Base<br>"+
                                                          "n = Number of digit<br>"+
                                                          "N = Given number<br>"+
                                                          "<br><b>15'<sup>s</sup> Complement:</b><br>= r<sup>n</sup> - N - 1<br>"+
                                                                                    " = 16<sup>"+count+"</sup> "+"-"+newoct+" - 1 <br>"+
                                                                                    " = ("+result+")<sub>10</sub>"+"<br>"+
                                                                                    " = ("+binarycoverter+")<sub>16</sub>" ;
       
              }                      