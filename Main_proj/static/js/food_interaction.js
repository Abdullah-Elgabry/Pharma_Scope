//let btn_back = document.querySelector('.back');
//let btn_show = document.querySelector(".toggle-nav");
//let btn_close = document.querySelector(".close");
//
//btn_back.onclick = function () {
//    document.querySelector('aside').classList.toggle("open")
//    document.querySelectorAll('aside ul li a').forEach( c =>{
//        c.classList.toggle('open')
//    } )
//    // document.querySelector('.arrow').classList.toggle('d-none')
//    // document.querySelector('.bars').classList.toggle('d-none')
//}
//
//
//btn_show.onclick = function () {
//    document.querySelector("aside").classList.remove("close");
//    this.classList.add("d-none");
// }
//btn_close.onclick = function () {
//  document.querySelector("aside").classList.add("close");
//  btn_show.classList.remove("d-none")
//};
//

// Function to handle form submission for drug interactions
document.getElementById("interactionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/Food-Drug-Interactions/view-interactions/");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                handleInteractionResponse(xhr.responseText, formData);
            } else {
                console.error("Error fetching interactions. Status:", xhr.status);
            }
        }
    };
    xhr.send(formData);
});

// Function to handle interaction response
function handleInteractionResponse(responseText, formData) {
    const response = JSON.parse(responseText);
    document.getElementById("numInteractions").textContent = response.num_interactions;
    document.getElementById("resultCount").textContent = response.num_interactions;
    document.getElementById("drugName").textContent = formData.get('drug_name');

    const interactionsList = document.getElementById("interactionsList");
    interactionsList.innerHTML = "";
    response.interactions.forEach(interaction => {
        const p = document.createElement("p");
        p.textContent = interaction.description;
        interactionsList.appendChild(p);
    });

    document.getElementById("resultSection").style.display = "block";
}

// Function to fetch and display drug suggestions
document.getElementById("drugInput").addEventListener("input", function() {
    const inputText = this.value.trim();
    if (inputText.length >= 2) {
        fetchDrugSuggestions(inputText);
    } else {
        clearSuggestions();
    }
});

// Function to fetch drug suggestions from the server
async function fetchDrugSuggestions(inputText) {
    try {
        const response = await fetch(`/Food-Drug-Interactions/drug-suggestions/?search=${inputText}`);
        const data = await response.json();
        displayDrugSuggestions(data);
    } catch (error) {
        console.error("Error fetching drug suggestions:", error);
    }
}

// Function to display drug suggestions in suggestionsContainer
function displayDrugSuggestions(data) {
    const suggestionsContainer = document.getElementById("suggestionsContainer");
    suggestionsContainer.innerHTML = "";
    data.forEach(drug => {
        const div = document.createElement("div");
        div.textContent = drug.name;
        div.classList.add("drug-suggestion");
        div.style.cursor = "pointer";

        div.addEventListener("click", function() {
            document.getElementById("drugInput").value = drug.name;
            clearSuggestions();
        });

        suggestionsContainer.appendChild(div);
    });
}

// Function to clear drug suggestions
function clearSuggestions() {
    document.getElementById("suggestionsContainer").innerHTML = "";
}