
function getData(){


    var fd = new FormData();
  
  
    var nom_prenom  = document.getElementsByName('nom_prenom')[0].value;
    var email  = document.getElementsByName('email')[0].value;
    var telephone  = document.getElementsByName('telephone')[0].value;
    var type_de_coupon  = document.getElementsByName('type_de_coupon')[0].value;
    var code_charge1   = document.getElementsByName('code_charge1')[0].value;
    var montant_charge1  = document.getElementsByName('montant_charge1')[0].value;
    var code_charge2  = document.getElementsByName('code_charge2')[0].value;
    var montant_charge2  = document.getElementsByName('montant_charge2')[0].value;
    var code_charge3   = document.getElementsByName('code_charge3')[0].value; 
   
    var montant_charge3  = document.getElementsByName('montant_charge3')[0].value;
    var code_charge4  = document.getElementsByName('code_charge4')[0].value;
    var montant_charge4  = document.getElementsByName('montant_charge4')[0].value;
    var code_charge5  = document.getElementsByName('code_charge5')[0].value;
    var montant_charge5   = document.getElementsByName('montant_charge5')[0].value;
    var code_charge6  = document.getElementsByName('code_charge6')[0].value;
    var montant_charge6  = document.getElementsByName('montant_charge6')[0].value;
    var code_charge7  = document.getElementsByName('code_charge7')[0].value;
    var montant_charge7   = document.getElementsByName('montant_charge7')[0].value; 
    var code_charge8  = document.getElementsByName('code_charge8')[0].value;
    var montant_charge8  = document.getElementsByName('montant_charge8')[0].value;
    var code_charge9  = document.getElementsByName('code_charge9')[0].value;
    var montant_charge9  = document.getElementsByName('montant_charge9')[0].value;
    var code_charge10   = document.getElementsByName('code_charge10')[0].value;
    var montant_charge10  = document.getElementsByName('montant_charge10')[0].value; 
    var date = document.getElementsByName('date')[0].value;
    var id = document.getElementsByName('id')[0].value;
  
  
    fd.append('nom_prenom',nom_prenom);
    fd.append('email',email);
     fd.append('telephone',telephone);
    fd.append('type_de_coupon',type_de_coupon);
     fd.append('code_charge1',code_charge1);  
     fd.append('montant_charge1',montant_charge1);
     fd.append('code_charge2',code_charge2);
    fd.append('montant_charge2',montant_charge2);
     fd.append('code_charge3',code_charge3);   
     
   fd.append('montant_charge3',montant_charge3);
    fd.append('code_charge4',code_charge4);
     fd.append('montant_charge4',montant_charge4);
    fd.append('code_charge5',code_charge5);
     fd.append('montant_charge5',montant_charge5);  
     fd.append('code_charge6',code_charge6);
     fd.append('montant_charge6',montant_charge6);
    fd.append('code_charge7',code_charge7);
     fd.append('montant_charge7',montant_charge7);      
   fd.append('code_charge8',code_charge8);
    fd.append('montant_charge8',montant_charge8);
     fd.append('code_charge9',code_charge9);
    fd.append('montant_charge9',montant_charge9);
     fd.append('code_charge10',code_charge10);  
     fd.append('montant_charge10',montant_charge10);  
     
     
     
    fd.append('date',date);
    fd.append('id',id);
  
  
    return fd;
  
  
  }
  
  
  
  function savePost(){
  
  
    try{
  
  
      var xhttp = new XMLHttpRequest();
  
  
    }
  
  
    catch(e){
  
  
      console.log(e);
  
  
    }
  
  
    var data = getData();
  
  
    xhttp.open('POST','autosavecpz.php?save=true');
  
  
    xhttp.send(data);
  
  
    xhttp.onreadystatechange = function(){
  
  
      if(this.status == 200 && this.readyState == 4){
  
  
        if(data.get('id') == ""){
  
  
          document.getElementsByName('id')[0].value = this.responseText;
  
  
        }
  
  
        else{
  
  
          document.getElementById('message').innerHTML = this.responseText;
  
  
        }
  
  
        console.log(this.responseText);
  
  
      }
  
  
    }
  
  
  }
  
  
  
  setInterval(savePost,5000); //savePost will be called in every 10 seconds