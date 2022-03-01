function myFunction(){
    const arrState=["Arizona","California","Idaho","Montana","Texas"];

    var arrArizona=["Phoenix"];
    var arrCalifornia=["Sacramento"];
    var arrIdaho=["Boise"];
    var arrMontana=["Helena"];
    var arrTexas=["Austin"];

    var selectedState = (document.getElementById('states').value);

    document.getElementById('capitals').innerHTML="";

    if(selectedState=="AZ"){
        for(i=0;i<arrArizona.length;i++){
            var selectOptions=document.createElement('option');
            selectOptions.innerHTML=arrArizona[i];
            selectOptions.value=arrArizona[i];
            capitals.appendChild(selectOptions);
        }
    }
    else if(selectedState=="CA"){
        for(i=0;i<arrCalifornia.length;i++){
            var selectOptions=document.createElement('option');
            selectOptions.innerHTML=arrCalifornia[i];
            selectOptions.value=arrCalifornia[i];
            capitals.appendChild(selectOptions);
        }
    }
    else if(selectedState=="ID"){
        for(i=0;i<arrIdaho.length;i++){
            var selectOptions=document.createElement('option');
            selectOptions.innerHTML=arrIdaho[i];
            selectOptions.value=arrIdaho[i];
            capitals.appendChild(selectOptions);
        }
    }
    else if(selectedState=="MT"){
        for(i=0;i<arrMontana.length;i++){
            var selectOptions=document.createElement('option');
            selectOptions.innerHTML=arrMontana[i];
            selectOptions.value=arrMontana[i];
            capitals.appendChild(selectOptions);
        }
    }
    else{
        for(i=0;i<arrTexas.length;i++){
            var selectOptions=document.createElement('option');
            selectOptions.innerHTML=arrTexas[i];
            selectOptions.value=arrTexas[i];
            capitals.appendChild(selectOptions);
        }
    }
}