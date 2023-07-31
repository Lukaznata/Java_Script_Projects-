const $container = document.querySelector(".container");
const $qrCodeBtn = document.querySelector("#qr_form button");
const $qrCodeInput = document.querySelector("#qr_form input");
const $qrCodeImg = document.querySelector("#qr_code img")

//Funções
// GERAR QR CODE
function generateQrCode(){

   const $qrCodeInputValue = $qrCodeInput.value;

   if(!$qrCodeInputValue) return;

   $qrCodeBtn.innerText = "Gerando código...";

   $qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${$qrCodeInputValue}`;

   $qrCodeImg.addEventListener("load", () => {
        $container.classList.add("active")
        $qrCodeBtn.innerText = "Código criado!";
   })
}
// LIMPAR CAMPOS





// Eventos
// GERAR QR CODE
$qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})
$qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        generateQrCode();
    };
})

// LIMPAR CAMPOS
$qrCodeInput.addEventListener("keyup", () => {
    if(!$qrCodeInput.value) {
        $container.classList.remove("active")
        $qrCodeBtn.innerText = "Gerar QR Code";
    }
})