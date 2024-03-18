let btn_back = document.querySelector(".back");
let btn_show = document.querySelector(".toggle-nav");
let btn_close = document.querySelector(".close");
let autocompletes = document.getElementById("autocompletes");
let search = document.querySelector(".drug-name");


btn_back.onclick = function () {
  document.querySelector("aside").classList.toggle("open");
  document.querySelectorAll("aside ul li a").forEach((c) => {
    c.classList.toggle("open");
  });
  // document.querySelector('.arrow').classList.toggle('d-none')
  // document.querySelector('.bars').classList.toggle('d-none')
};

btn_show.onclick = function () {
  document.querySelector("aside").classList.remove("close");
  this.classList.add("d-none");
};
btn_close.onclick = function () {
  document.querySelector("aside").classList.add("close");
  btn_show.classList.remove("d-none");
};

let btn_addDrug = document.querySelector(".add-drug");
let btn_clear = document.querySelector(".btn-clear");
let drug_list = []
function addDrug(){
}
btn_addDrug.onclick = function () { 
  if (document.querySelector(".drug-name").value.trim()) {
    const value = document.querySelector(".drug-name").value.trim();
    let s = document.createElement("span");
    if (!drug_list.includes(value)) {
      if(drug_list.length <= 10){
        drug_list.push(value);
        s.innerText = value;
        s.innerHTML += '<i class="fa-solid fa-check ms-2"></i>';
        document.querySelector(".drugs").appendChild(s);
        document.querySelector(".drugs").classList.add("mb-3");

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
  document.querySelector(".drugs").classList.remove("mb-3");
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
