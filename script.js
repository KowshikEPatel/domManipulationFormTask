function createDomMani(...arr){
    var element1=document.createElement(arr[0]);
    for(let iter=1;iter<arr.length;iter++){
        if(arr[iter].includes("=")){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=");
        element1.setAttribute(attreibute,attributename);
        }
        else{
            element1.innerHTML=arr[iter];
       }    
    }
    return element1;
}
let linkElement=createDomMani("link","rel=stylesheet","href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css","integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2","crossorigin=anonymous")

document.head.append(linkElement);
let brandLink = createDomMani("a","class=navbar-brand","href=index.html","style=font-size:larger","User Info Org");

let buttonlink = createDomMani("button","class=navbar-toggler","type=button","data-toggle=collapse","data-target=#navbarNav", "aria-controls=navbarNav","aria-expanded=false","aria-label=Toggle navigation");
let spanLink=createDomMani("span","class=navbar-toggler-icon");
buttonlink.append(spanLink);

brandLink.append(buttonlink);

let collapseNavBar = createDomMani("div","class=collapse navbar-collapse","id=navbarNav");

let unorderedList = createDomMani("ul","class=navbar-nav");
let listItem1 = createDomMani("li", "class=nav-item active")
let a1 = createDomMani("a","class=nav-link","href=index.html","Home")
  
let span1 = createDomMani("span","class=sr-only","(current)")
    
a1.append(span1);
listItem1.append(a1);
unorderedList.append(listItem1);

collapseNavBar.append(unorderedList);

brandLink.append(collapseNavBar);

let nav = createDomMani("nav","class=navbar navbar-expand-lg navbar-light bg-light");
nav.append(brandLink);
document.body.append(nav);

let tHeadElement=createDomMani("thead","class=thead-dark");
let tr1Element=createDomMani("tr");
let thtrElement1=createDomMani("th","scope=col","Parameter");
let thtrElement2=createDomMani("th","scope=col","Value");
tr1Element.append(thtrElement1,thtrElement2);

tHeadElement.append(tr1Element);

let tBodyElement=createDomMani("tbody");
let tr2Element=createDomMani("tr");
let tdtrElement1=createDomMani("td","scope=col","First Name");
let tdtrElement2=createDomMani("td","scope=col","id=firstname","");
tr2Element.append(tdtrElement1,tdtrElement2);

let tr3Element=createDomMani("tr");
let tdtrElement3=createDomMani("td","scope=col","Last Name");
let tdtrElement4=createDomMani("td","scope=col","id=lastname","");
tr3Element.append(tdtrElement3,tdtrElement4);

let tr4Element=createDomMani("tr");
let tdtrElement5=createDomMani("td","scope=col","Address");
let tdtrElement6=createDomMani("td","scope=col","id=address","");
tr4Element.append(tdtrElement5,tdtrElement6);

let tr5Element=createDomMani("tr");
let tdtrElement7=createDomMani("td","scope=col","Pincode");
let tdtrElement8=createDomMani("td","scope=col","id=pincode","");
tr5Element.append(tdtrElement7,tdtrElement8);

let tr6Element=createDomMani("tr");
let tdtrElement9=createDomMani("td","scope=col","Gender");
let tdtrElement10=createDomMani("td","scope=col","id=gender","");
tr6Element.append(tdtrElement9,tdtrElement10);

let tr7Element=createDomMani("tr");
let tdtrElement11=createDomMani("td","scope=col","Choice of food");
let tdtrElement12=createDomMani("td","scope=col","id=choiceoffood","");
tr7Element.append(tdtrElement11,tdtrElement12);

let tr8Element=createDomMani("tr");
let tdtrElement13=createDomMani("td","scope=col","State");
let tdtrElement14=createDomMani("td","scope=col","id=state","");
tr8Element.append(tdtrElement13,tdtrElement14);

let tr9Element=createDomMani("tr");
let tdtrElement15=createDomMani("td","scope=col","Country");
let tdtrElement16=createDomMani("td","scope=col","id=country","");
tr9Element.append(tdtrElement15,tdtrElement16);

tBodyElement.append(tr2Element,tr3Element,tr4Element,tr5Element,tr6Element,tr7Element,tr8Element,tr9Element);


let divRow1=createDomMani("div","class=row");
let divCol51=createDomMani("div","class=col-5");
let divCol52=createDomMani("div","class=col-5");

let formGroupElement=createDomMani("div","class=form-group");


let label1Element=createDomMani("label","for=firstName","First Name");
let input1Element=createDomMani("input","type=text", "class=form-control","id=firstnameInput",`onfocusout=textToDisplay("firstname")`);
divCol51.append(label1Element,input1Element)
let label2Element=createDomMani("label","for=lastName","Last Name");
let input2Element=createDomMani("input","type=text", "class=form-control","id=lastnameInput",`onfocusout=textToDisplay("lastname")`);
divCol52.append(label2Element,input2Element);
divRow1.append(divCol51,divCol52);


let label3Element=createDomMani("label","for=address","Address");
let input3Element=createDomMani("input","type=text","class=form-control","id=addressInput",`onfocusout=textToDisplay("address")`);
let divCol53=createDomMani("div","class=col-10");
divCol53.append(label3Element,input3Element);
let divRow2=createDomMani("div","class=row");
divRow2.append(divCol53);

let label4Element=createDomMani("label","for=pincode","Pincode");
let input4Element=createDomMani("input","type=text","class=form-control","id=pincodeInput",`onfocusout=textToDisplay("pincode")`);
let divCol54=createDomMani("div","class=col-5");
divCol54.append(label4Element,input4Element);
let divGender=createDomMani("div","Gender");
let label5Element=createDomMani("label","for=gender","Male");
let input5Element=createDomMani("input","type=radio","id=gender","value=male","name=gender");
let label6Element=createDomMani("label","for=gender","Female");
let input6Element=createDomMani("input","type=radio","id=gender","value=female","name=gender");
let divCol55=createDomMani("div","class=col-5");
divCol55.append(divGender,label5Element,input5Element,label6Element,input6Element);
let divRow3=createDomMani("div","class=row");
divRow3.append(divCol54,divCol55);


let label7Element=createDomMani("label","for=choiceOfFood","Choice of food  ");
let label7Element1=createDomMani("label","for=choiceOfFood"," Idli:");
let input7Element1=createDomMani("input","type=checkbox","id=idli","name=idli", "value=Idli");
let label7Element2=createDomMani("label","for=choiceOfFood","Upma:");
let input7Element2=createDomMani("input","type=checkbox","id=upma","name=upma", "value=Upma");
let label7Element3=createDomMani("label","for=choiceOfFood","Dosa:");
let input7Element3=createDomMani("input","type=checkbox","id=dosa","name=dosa", "value=Dosa");
let label7Element4=createDomMani("label","for=choiceOfFood","Pongal:");
let input7Element4=createDomMani("input","type=checkbox","id=pongal","name=pongal", "value=Pongal");
let label7Element5=createDomMani("label","for=choiceOfFood","Palav:");
let input7Element5=createDomMani("input","type=checkbox","id=palav","name=palav", "value=Palav");
let divCol56=createDomMani("div","class=col-8");
divCol56.append(label7Element,label7Element1,input7Element1,label7Element2,input7Element2,label7Element3,input7Element3,label7Element4,input7Element4,label7Element5,input7Element5);
let divRow4=createDomMani("div","class=row");
divRow4.append(divCol56);


let label8Element=createDomMani("label","for=state","State");
let input8Element=createDomMani("input","type=text","class=form-control","id=stateInput",`onfocusout=textToDisplay("state")`);
let divCol57=createDomMani("div","class=col-5");
divCol57.append(label8Element,input8Element);
let divRow5=createDomMani("div","class=row");
divRow5.append(divCol57);


let label9Element=createDomMani("label","for=country","Country");
let input9Element=createDomMani("input","type=text","class=form-control","id=countryInput",`onfocusout=textToDisplay("country")`);
let divCol58=createDomMani("div","class=col-5");
divCol58.append(label9Element,input9Element);
//let divRow5=createDomMani("div","class=row");
divRow5.append(divCol58);


let divContainer=createDomMani("div","class=container");
let tableElement=createDomMani("table","class=table table-striped");

let formElement=createDomMani("form");

tableElement.append(tHeadElement,tBodyElement);

formGroupElement.append(divRow1,divRow2,divRow3,divRow4,divRow5);
formElement.append(formGroupElement);
divContainer.append(tableElement,formElement);

function textToDisplay(string1){
  document.getElementById(`${string1}`).textContent=document.getElementById(`${string1}Input`).value;
  document.getElementById(`${string1}Input`).value="";
}


document.body.append(divContainer);

