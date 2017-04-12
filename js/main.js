//Student name: Aayush Sapkota
//Student Number: s283859

(function(){
//getting button to check compatibility of browser 
var compatiblecheckbtn = document.getElementById('lSchecker_button');
//getting label that displays compability result
var localStorageCompatible = document.getElementById('localStorageCompatible');

compatiblecheckbtn.addEventListener('click', localStorageCompatibilty);

//getting input from the form
var InputName = document.getElementById('name');
InputName.focus();
var InputDate = document.getElementById('date');
var InputEmail = document.getElementById('email');
var InputPassword = document.getElementById('password');
var InputMessage = document.getElementById('message');
  //display labels                                         
var output = document.getElementById('output');
var correctionLabel1 = document.getElementById('correctionLabel1');
var Reqforformlabel = document.getElementsByClassName('Reqforformlabel');
//enterButton
var enterButton = document.getElementById('enter');


//enter to store data to local database
InputName.addEventListener('keyup', EnterCheckOnForm);
InputDate.addEventListener('keyup', EnterCheckOnForm);
InputEmail.addEventListener('keyup', EnterCheckOnForm);
InputPassword.addEventListener('keyup', EnterCheckOnForm);
  //check if pressed enter in form                        
function EnterCheckOnForm(e){
    
    if (e.keyCode == 13) {
        storeTextHandler(e);
        }
};


//retrieveButton
var  retrieveButton = document.getElementsByClassName('retrieve');
//changeButton
var changeButton = document.getElementById('change');
//delteButton
var delteButton =  document.getElementById('deleteEl');
//resetButton
var resetButton = document.getElementById('reset');
 

//storageindex initiation
var StorageIndex = localStorage.length;

//on enterbutton click
enterButton.addEventListener('click', storeTextHandler);

//on retirevebutton click
retrieveButton[0].addEventListener('click', readDBHandler);
//on changebutton click
changeButton.addEventListener('click', changeDBHandler);
//on deletebutton click
delteButton.addEventListener('click', deleteDBHandler);
//on resetbutton
resetButton.addEventListener('click', resetDBHandler);

//getting input index to perform changeHandling
var IndexKey = document.getElementById('key');
//value to store in the index to be changed
var value = document.getElementById('value');

//store to local database
function storeTextHandler(event){
    event.preventDefault();
   
    //inputName validity check
    if(InputName.value.length < 4 || InputName.value.length >= 32){
       Reqforformlabel[0].textContent = "Enter Name between 4 and 32 characters";  
       
    }
    //inputDate validity check
    else if(!validateDate(InputDate.value)){
        Reqforformlabel[1].textContent = "Enter Date in DD/MM/YYYY";  
         
    }
    //inputEmail Validity Check
   else if(!validateEmail(InputEmail.value)){
        Reqforformlabel[2].textContent = "Enter Valid Email";
       
    }
    //InputPassword Validity Check
   else if(InputPassword.value.length < 8 || InputPassword.value.length >= 32){
        
        Reqforformlabel[3].textContent = "Enter Valid Password between 8 and 32 characters";
    }
    
    //IF everything valid store it to the local database
    else{
         
        localStorage.setItem(StorageIndex++, InputName.value);
      
        localStorage.setItem(StorageIndex++, InputDate.value);
     
        localStorage.setItem(StorageIndex++, InputEmail.value);
         
        localStorage.setItem(StorageIndex++, InputPassword.value);
        
         localStorage.setItem(StorageIndex++, InputMessage.value);
          
        
        //empty all the input fields.
        $('.main__forms').find("input, textarea").val("");
        
        //Start with InputName in form
        InputName.focus();
        //feedback to the user 
        output.textContent = "The data has been saved to local storage";
    }
}


//retrieveData from local Storage
function readDBHandler(event){
    event.preventDefault();
    //data to be recieved
    var returnText='';
     //if localStorage empty feedback data is empty
    if(localStorage.length === 0){
        returnText = 'The data is empty';
    } else
    //if not empty get the data by looping through each element in localstorage
    {
       for(var i = 0; i < localStorage.length; i+=5){
           
        returnText +=  " Name: "+ localStorage.getItem(i)+ "  Date: "+ localStorage.getItem(i+1)+ "   Email: "
            + localStorage.getItem(i +2)+  "   Password: "+ localStorage.getItem(i+ 3)+"   message: " + localStorage.getItem(i+ 4)+ "\n"; 
              
        }
    }
    //data and feedback to user 
    output.textContent = returnText;  
}

//change value at index
function changeDBHandler(event){
    event.preventDefault();
    
    //if localStorage Empty Check feeback database empty
     if(localStorage.length === 0){
        output.textContent = 'The data is empty';
    } else 
    //if not empty
    {
        //check input fields for valid input
        if( IndexKey.value == NaN || IndexKey.value == "" ){
            correctionLabel1.textContent ="Please, Enter a number";
        }else if( value.value == ""){
            correctionLabel2.textContent ="Please, Enter value ";
        }
        else{
            //if all valid inputs , change the value at the index given to value provided.
       for(var i = 0; i < localStorage.length; i++){
           if(i == parseInt(IndexKey.value)){
   localStorage.setItem(i, value.value); 
            correctionLabel1.textContent = "";
                correctionLabel2.textContent = "";
           }
       else if(localStorage.length <= parseInt(IndexKey.value)){
           correctionLabel1.textContent = "Please, Enter a Valid Number";
          }
       }
        //focus index key to another input
            IndexKey.focus();
            
            //get the changed data
            readDBHandler(event);
}
}    
}
//delete datas from the index given
function deleteDBHandler(event){
    event.preventDefault();
    //getting index for value to be deleted.
   var deleteIndexValue = document.getElementById('deleteValue');
    
    //check if local storage empty, if yes user feedback data is empty 
     if(localStorage.length === 0){
        output.textContent = 'The data is empty';
    } else {
        //check valid index input
        if( deleteIndexValue.value == "" && !(typeof Number)){
            correctionLabel3.textContent = "Please, Enter a Valid Number";
        }
        else{
            //if valid set the index to null 
       for(var i = 0; i < localStorage.length; i++){
           if(i == parseInt(deleteIndexValue.value)){
               localStorage.setItem(i, null);  
                correctionLabel3.textContent = "";
          }else 
           if(localStorage.length <= parseInt(deleteIndexValue.value)){
           correctionLabel3.textContent = "Please, Enter a Valid Number";
          }
           
       } 
         
        //focus that input field
        deleteIndexValue.focus();
        //read data to view deletion
             readDBHandler(event);
           
}
}    
}

function resetDBHandler(event){
    event.preventDefault();
    
    localStorage.clear();
    
    output.textContent = 'Database cleared';
    StorageIndex = 0;

}

//localStorage compability check
function localStorageCompatibilty(event){
    event.preventDefault();
  //local storage not found or not present, make label with text inside appear
if(window.localStorage === undefined ){
    localStorageCompatible.textContent = 'Oops,browser doesnot supportslocalstorage, update browser to see the usage of local storage';
}else
    {
        //if found, make this text appear in Result label
     localStorageCompatible.textContent = 'Yay! your browser supports localStorage';
}
}
//checking valid email
function validateEmail(email) {
     //defining requirements for email
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //checking email to be input against the requirements
  return re.test(email);
}
//checking valid date and date format
function validateDate(date){
   // defining format and values allowed
    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    //checking date to be input against the requirements
    return pattern.test(date);
}
})();




