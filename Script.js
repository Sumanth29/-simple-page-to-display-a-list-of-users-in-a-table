function lettersValidate(key) {
    var keycode = (key.which) ? key.which : key.keyCode;

    if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123))  
    {     
           return true;    
    }
    else
    {
        return false;
    }
         
}
function lettersValidate1(key) {
    var keycode = (key.which) ? key.which : key.keyCode;

    if ((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123) || (keycode==189))  
    {     
           return true;    
    }
    else
    {
        return false;
    }
         
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submitted() {
    let table = document.querySelector("table");
  let nameInput = document.querySelector("#name");
  let cityInput = document.querySelector("#city");
  let degreeInput =document.querySelector("#degree");
  let name = nameInput.value;

  let city = cityInput.value;
  let degree = degreeInput.value;
  var current = new Date();
  let time = current.toLocaleString();

  let template = `
            <tbody>
                <tr>
                    <td>${name}</td>
                    <td></td>
                    <td>${city}</td>
                    <td>${degree}</td>
                    <td>${time}</td>
                </tr>
            </tbody>`;
  table.innerHTML += template;
  return false;
}
