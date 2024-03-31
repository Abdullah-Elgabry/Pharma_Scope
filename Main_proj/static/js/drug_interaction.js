let autocompletes = document.getElementById("autocompletes");
let search = document.querySelector(".drug-name");
let btn_addDrug = document.querySelector(".add-drug");
let btn_clear = document.querySelector(".btn-clear");
let drug_list = []



function displayDrug (value) { 
  let s = document.createElement("span");
  s.innerText = value;
  s.innerHTML += '<i class="fa-solid fa-check ms-2"></i>';
  document.querySelector(".drugs").appendChild(s);
  document.querySelector(".drugs").classList.add("mb-3");

  // remove durg from list on click it
  s.onclick = function () {
    drug_list = drug_list.filter((drug) => drug != value);
    this.remove();
    let allInputs = document.querySelectorAll('input[type="hidden"]');
    allInputs.forEach((i) => {
      if (i.value == s.textContent) {
        i.remove();
      }
    });
    if (document.querySelector(".drugs").children.length == 0) {
      document.querySelector(".drugs").classList.remove("mb-3")
    }
  };
 }


btn_addDrug.onclick = function () { 
  if (document.querySelector(".drug-name").value.trim()) {
    const value = document.querySelector(".drug-name").value.trim();
    if (!drug_list.includes(value)) {
      if(drug_list.length <= 10){
        drug_list.push(value);
        
        displayDrug(value)

        // Create a new input element
        var drugInput = document.createElement("input");
        
        // Set attributes for the input (optional)
        drugInput.setAttribute("type", "hidden");
        drugInput.setAttribute("name", "drugs");
        drugInput.setAttribute("value", value);

        
        // Append the input element to the div
        var drugForm = document.getElementById("addDrugForm");
        drugForm.appendChild(drugInput);
        document.querySelector(".drug-name").value = "";
        autocompletes.innerHTML = '';

      }
    } else {
      const myModal = new bootstrap.Modal("#myModal", {keyboard: false});
      let modalToggle = document.getElementById('toggleMyModal'); 
      myModal.show(modalToggle)
      myModal._dialog.children[0].children[1].innerHTML = `The item [${value}] is already added in list`;
    }
  }
}

btn_clear.onclick = function () {
  document.querySelectorAll(".form input").forEach((i) => {
    i.value = "";
  });

  document.querySelectorAll(".drugs span").forEach((s) => {
    s.remove();
  });
  document.getElementById("result_container").innerHTML = "";
  drug_list.splice(0,drug_list.length);
  autocompletes.innerHTML = '';
};

search.addEventListener("keyup", () => {
  if (search.value.length > 0) {
    let input = search.value;
    autocompletes.innerHTML = input;
    let regex = new RegExp("^" + input + ".*", "i");

    for (let i = 0; i < words.length; i++) {
      if (words[i].match(regex)) {
        autocompletes.innerHTML += words[i].slice(input.length, words[i].length);
        let x = words[i];
        console.log(x.slice(input.length, x.length));
        break;
      }
    } 
  }
});

search.addEventListener("keydown", (e) => {
  if (search.value.length <= 1 && e.keyCode == 8) {
    autocompletes.innerHTML = "";
  }
});


function handleTabKey(event) {
  // Check if the pressed key is the tab key
  if (event.key === "ArrowRight") {
    event.preventDefault(); // Prevent the default tab behavior
    document.querySelector("input").value = autocompletes.innerHTML;
  }
}

document.addEventListener("keydown", handleTabKey);