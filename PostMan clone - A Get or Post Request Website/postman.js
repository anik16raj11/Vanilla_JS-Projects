console.log('Postman clone: A post/Get request website');


//UTILITY FUNCTIONS

//1. Utility function to get DOM element from string
function getElementFromStr(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


// Initialize no of parameters:
let addedParamCount = 0;


//Hide the parameters box initially:
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';


//If the user clicks on the parameters box, hide the Json box and show the parameters box:
let paramsRadio = document.getElementById('paramsRadio')
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})


//If the user clicks on the Json box, hide the parameters box and show the Json box:
let jsonRadio = document.getElementById('jsonRadio')
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})


//If the user click on + button, add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row my-2">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Value">
                </div>
                <button  class="col-md btn btn-primary deleteParam">-</button>
            </div>`

    //convert the element string to DOM node
    let paramElement = getElementFromStr(string);
    params.appendChild(paramElement);

    //Add an eventListener to remove the parameter on clciking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e)=>{
            // ToDo: Add a confirmation box to confirm parameter deletion
            e.target.parentElement.remove();
        })
    }

    console.log(paramElement);

    addedParamCount++;
})


// If the user click on submit button:
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=> {
    // Show please wait in the response box to request patience from the user
    document.getElementById('responseJsonText').value = "Please Wait... fetching Response";

    // Fetch all the values user has enetred 
    let urlField = document.getElementById("urlField").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    
    // If user has used params option instead iof Json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i=0; i<addedParamCount+1; i++) {
            if(document.getElementById('parameterKey' + (i+1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i+1)).value;
                let value = document.getElementById('parameterValue' + (i+1)).value;
                data[key] = value;
            }
            data = JSON.stringify(data);
        }
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }
    

    // log all the values in the console for debugging
    console.log('URL is ', urlField);
    console.log('requestType ', requestType);
    console.log('contentType is ', contentType);
    console.log('Data is ', data);


    //If the request type is get, invoke fetch api to create a get request:
    if (requestType == 'GET') {
        fetch(urlField, {
            method: 'GET',
        })
        .then(response=> response.text())
        .then((text) => {
            document.getElementById('responseJsonText').value = text;
            // document.getElementById('responsePrism').innerHTML = text;
            // Prism.highlightAll();
        });
    }

    else{
        fetch(urlField, {
            method: 'POST', 
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }  
        })
        .then(response=> response.text())
        .then((text) =>{
            document.getElementById('responseJsonText').value = text;
            // document.getElementById('responsePrism').innerHTML = text;
            // Prism.highlightAll();
        });

    }





})
