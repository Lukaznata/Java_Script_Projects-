// seleção de elementos
const gereratePasswordButton = document.querySelector("#generate_password")
const gereratedPasswordElement = document.querySelector("#generated_password")

// Novas funcionalidades

const openCloseGeneratorButton = document.querySelector("#open_generate_password")
const generatePasswordContainer = document.querySelector("#generate_options")
const lengthInput = document.querySelector("#length")
const lettersInput = document.querySelector("#letters")
const numbersInput = document.querySelector("#numbers")
const symbolsInput = document.querySelector("#symbols")
const copyPasswordButton = document.querySelector("#copy_password")


// Funções
// GERAR Letras, números e simbolos
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() *26) + 97)
}
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() *26) + 65)
}

const getNumber = () => {
    return Math.floor(Math.random() *10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=+-/,.!@#$%$&*<>"
    return symbols[Math.floor(Math.random() * symbols.length)]
}

// gerar senha
const generatePassword = (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol) => {

    let password = "";

    // segunda versao
    
    const passwordLength = +lengthInput.value;

    const generators = [];
    
    if(lettersInput.checked){
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }

    if(numbersInput.checked){
        generators.push(getNumber)
    }

    if(symbolsInput.checked){
        generators.push(getSymbol)
    }
    
    console.log(generators.length)

    if(generators.length === 0){
        return
    }

    
    for( i = 0; i < passwordLength; i = i + generators.length){
        generators.forEach(() =>{
            const randomValue = generators[Math.floor(Math.random() * generators.length)]()
            
            password += randomValue;
        });
    }
    
    password = password.slice(0, password.length);

    gereratedPasswordElement.style.display = "block";
    gereratedPasswordElement.querySelector("h4").innerText = password;
};



// Eventos 
gereratePasswordButton.addEventListener("click", () =>{

    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbol)
})

openCloseGeneratorButton.addEventListener("click", () =>{
        generatePasswordContainer.classList.toggle("hide")
})

copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    const password = gereratedPasswordElement.querySelector("h4").innerText;

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha copiada com sucesso!"
        
        setTimeout(() => {
            copyPasswordButton.innerText = "Copiar"
        }, 1000)
    })
})