let form_select = document.querySelector(".form-select"); 

form_select.onchange = function () {
  console.log(form_select.value);
  if (form_select.value.includes('Select')) {
    this.style.paddingLeft = '10px'
    document.querySelector('.color').style.backgroundColor = `transparent`;
  } else {
    this.style.paddingLeft = "40px";
    document.querySelector(
      ".color"
    ).style.backgroundColor = `${form_select.value}`;
  }
}; 


function dropHandler(ev) {
  console.log("File(s) dropped");
  document.querySelector(".drag-zone").innerHTML = '';
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
        // document.querySelector(".drag-zone").innerHTML = `file[${i}].name = ${file.name}`;
        console.log(file);
        document.querySelector(
          ".drag-zone"
        ).innerHTML += `File name = ${file.name} <br />`;
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}

function dragOverHandler(ev) {
  console.log("File(s) in drop zone");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}


function uploadImage() {
    console.log("Image upload function called");
}


function handleFileSelect(event) {
    const file = event.target.files[0];
    const fileName = file.name;
    document.getElementById('file-name').innerText = 'Selected Image: ' + fileName;

    const reader = new FileReader();
    reader.onload = function(event) {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = event.target.result;
        imagePreview.style.display = 'block';
    }
    reader.readAsDataURL(file);
}


document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch('/Drug_id/classify/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        var resultElement = document.querySelector('.result');
        if (resultElement) {
            if ('result' in data) {
                resultElement.innerHTML = "Drug name is " + data.result;
            } else {
                resultElement.innerHTML = "Error: " + data.error;
            }
        } else {
            console.error("Element with class 'result' not found");
        }
    })
    .catch(error => console.error('Error:', error));
});