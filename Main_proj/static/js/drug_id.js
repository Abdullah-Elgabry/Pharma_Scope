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
