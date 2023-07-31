// Seleção de elementos
const $multiplicationForm = document.querySelector("#multiplication_form");
const $numberInput = document.querySelector("#number");
const $multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication_oparations");

const multiplicationTitle = document.querySelector("#multiplication_title span");


// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;
        
        const template = 
            `
            <div class="row">

            <div class="operarion">${number} x ${i} =  </div>
            <div class="result">${result}</div>

            </div>
            `;

        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");
        
        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
    
};

// Eventos
$multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +$numberInput.value;

    const multiplicatorNumber = +$multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber){
        return multiplicationTable.innerHTML = "informe um número para calcular uma tabuada...";
    };

    createTable(multiplicationNumber, multiplicatorNumber);
});