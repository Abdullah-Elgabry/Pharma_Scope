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
    interactionsList.style.overflowY = response.interactions.length > 4 ? "scroll" : "auto"
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
    suggestionsContainer.classList.add('active')
    suggestionsContainer.innerHTML = "";
    let styleText;
    if(data.length > 5){
        styleText = 'height: 200px;overflow-y: scroll'
    }else{
        styleText = ''
    }
    suggestionsContainer.style.cssText = styleText
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

    if(data.length == 0){
        suggestionsContainer.innerHTML = "Not Found"
        suggestionsContainer.style.padding="10px"
    }
}

// Function to clear drug suggestions
function clearSuggestions() {
    document.getElementById("suggestionsContainer").innerHTML = "";
    document.getElementById("suggestionsContainer").classList.remove('active');
    suggestionsContainer.style.cssText = '';

}