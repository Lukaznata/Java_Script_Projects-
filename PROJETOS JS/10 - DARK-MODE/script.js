const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
const $labeldarkmode = document.querySelector("#labelDarkMode");
//trocar classe do html
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
//altera classe do html com um enter
$labeldarkmode.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    $html.classList.toggle('dark-mode')
  }
});

var $icon = document.getElementById('icon');
var $labelDarkMode = document.getElementById('labelDarkMode')
// Remova a classe 'beat-fade' após a duração da animação clicando na lampada
function removeBeatFadeClass() {
  $icon.classList.remove('beat-fade');
}
$icon.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  setTimeout(removeBeatFadeClass, 500);
});
// Remova a classe 'beat-fade' após a duração da animação clicando no texto
$labelDarkMode.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  setTimeout(removeBeatFadeClass, 500);
});





var $elementoAnima = document.querySelector('.animacaoInit');
var $elementosEscondidos = document.getElementsByClassName('hide');
//altera a classe hide. alterando a opacidade depois que animacao do $elementoAnima terminar.
$elementoAnima.addEventListener('animationend', function() {
    $elementosEscondidos[0].style.opacity = 1;
});




//adiciona uma classe ao html para fazer funcionar caso esteja sem javascript
document.body.classList.add('js-enabled');

// Verifica se o dispositivo tem preferência por cores claras
const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

// Se o modo claro for preferido, adiciona a classe "light-mode" ao elemento <html>
if (prefersLightMode) {
  document.documentElement.classList.add('light-mode');
}

//rola a pagina para o topo automaticamente ao iniciar
window.onload = function() {
  window.scrollTo(0, 0);
};




var $menuOculto = document.getElementById('menuOculto');
var $menuItens = document.querySelectorAll('#menu li a');
var removeActiveTimeout;


//adiciona a classe ao menu, o fazendo aparecer
$menuOculto.addEventListener('mouseenter', function() {
  $menuOculto.classList.add('active');
});
//retira a classe do menu, o fazendo sair
$menuOculto.addEventListener('mouseleave', function() {
  removeActiveTimeout = setTimeout(function() {
    $menuOculto.classList.remove('active');
  }, 0);
})
//retira o menu ao clicar em um item 
$menuItens.forEach(function(item) {
  item.addEventListener('click', function() {
    $menuOculto.classList.remove('active');
  });
});

var menuTitulo = document.querySelector('#menuOculto p');
menuTitulo.addEventListener('click', function() {
  $menuOculto.classList.toggle('active');
});






//passa item por item que estão com focus do menu, se tiverem, eles adicionam a classe de aparecer ao menu
$menuItens.forEach(function(item) {
  item.addEventListener('focus', function() {
    $menuOculto.classList.add('active');
    clearTimeout(removeActiveTimeout);
  });
// verifica se o focus ainda está no menu, se nao estiver, ele remove a classe, fazendo o menu fechar
  item.addEventListener('blur', function() {
    removeActiveTimeout = setTimeout(function() {
      $menuOculto.classList.remove('active');
    }, 0);
  });
});











//efeito objeto 3D
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 3,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});



//Jquery

$(function() {
  //translate to english 
  // Evento de clique para o botão "Icone Estados Unidos"
  $("#trocarBotao1").click(function(){

    $("#meuElemento").text("Dark mode");
    $("#labelDarkMode").text("Dark-mode");
    // Menu
    $("#menuOculto ul p").text("Menu");
    $("#menuOculto ul li:nth-child(2) a").text("Start");
    $("#menuOculto ul li:nth-child(3) a").text("Battery");
    $("#menuOculto ul li:nth-child(4) a").text("Health");
    $("#menuOculto ul li:nth-child(5) a").text("Return to portfolio");
    //content
    $("#textoSimples h2").text('Night mode, also known as "dark-mode", is a new technology that has become a trend in applications and operating systems from Google and Apple.')
    $("#textoSimplesParagrafos p:nth-child(1)").text("Available on some services for Android and iPhone (iOS) devices, the function seeks to reduce the impact of lighting on the device's graphical interface and temporarily change the colors on the screen.");
    $("#textoSimplesParagrafos p:nth-child(2)").text("The softwares start to run in dark tones, in order to offer a more comfortable use to the user, mainly in dimly lit environments.");
    //content-card 1
    $("#h3").text("BENEFITS");
    $("#bateria h4").text("BATTERY");
    $("#bateria p:nth-child(2)").text("A study by “AppleInsider” concludes which using this method significantly reduces power consumption in OLED displays. It is even possible to save “up to 60% of the battery level” in three hours of intensive use on an iPhone X.");
    $("#bateria p:nth-child(3)").text("Google also confirms this performance improvement on Android devices that regularly use this alternative. According to an article by “Slash Gear”, “the famous dark mode can make a big difference in the amount of power needed by all applications on Android”.");
    //conteudo-card 2
    $("#saude h4").text("HEALTH");
    $("#saude p:nth-child(2)").text("“The warm colors of the night mode do not confuse the body in terms of chronological time and make it easier to fall asleep than if we were looking at a device with the screen in normal mode”, concludes the doctor.");
    $("#saude p:nth-child(3)").text('A report from the American Academy of Ophthalmology (AAO) highlights the reduction in blue light emissions that accompanies dark mode. "While it does not damage eyesight, decreasing exposure to blue light and limiting screen time and brightness can help people sleep better and feel more comfortable".');
    $("#foot p").text("&copy 2023 - Lucas Developer - dark mode")
  });

  // traduzir para Português
  // Evento de clique para o botão "Icone Brasil"
  $("#trocarBotao2").click(function(){

    $("#meuElemento").text("Modo Escuro");
    $("#labelDarkMode").text("Modo-escuro");
    // Menu
    $("#menuOculto ul p").text("Menu");
    $("#menuOculto ul li:nth-child(2) a").text("Início");
    $("#menuOculto ul li:nth-child(3) a").text("Bateria");
    $("#menuOculto ul li:nth-child(4) a").text("Saúde");
    $("#menuOculto ul li:nth-child(5) a").text("Retornar ao portifólio");
    //conteudo  
    $("#textoSimples h2").text('O modo noturno, também conhecido como "dark-mode", é uma nova tecnologia que se tornou tendência em aplicativos e sistemas operacionais do Google e da Apple.');
    $("#textoSimplesParagrafos p:nth-child(1)").text("Disponível em alguns serviços para dispositivos Android e iPhone (iOS), a função busca reduzir o impacto da iluminação da interface gráfica de aparelhos e altera, de forma temporária, as cores na tela.");
    $("#textoSimplesParagrafos p:nth-child(2)").text("Os softwares passam a ser executados em tons escuros, a fim de oferecer um uso mais confortável ao usuário, principalmente, em ambientes pouco iluminados.");
    //conteudo-card 1
    $("#h3").text("BENEFÍCIOS");
    $("#bateria h4").text("BATERIA");
    $("#bateria p:nth-child(2)").text("Um estudo da “AppleInsider” conclui que a utilização deste método reduz significativamente o consumo de energia nos visores OLED. Inclusive, é possível poupar “até 60% do nível de bateria” em três horas de utilização intensiva num iPhone X.");
    $("#bateria p:nth-child(3)").text("A Google também confirma esta melhoria de desempenho nos dispositivos Android que utilizam regularmente esta alternativa. De acordo com um artigo do “Slash Gear”, “o famoso modo escuro pode fazer uma grande diferença na quantidade de energia necessária para todas as aplicações no Android”.");
    //conteudo-card 2
    $("#saude h4").text("SAÚDE");
    $("#saude p:nth-child(2)").text("“As cores quentes do modo noturno não confundem o organismo em termos de tempo cronológico e tornam mais fácil adormecer do que se estivéssemos a olhar para um dispositivo com o ecrã no modo normal”, conclui o médico.");
    $("#saude p:nth-child(3)").text("Um relatório da Academia Americana de Oftalmologia (AAO) destaca a redução das emissões de luz azul que acompanha o modo escuro. “Apesar de não causar danos à visão, a diminuição da exposição à luz azul e a limitação do tempo e do brilho do ecrã pode ajudar as pessoas a dormirem melhor e a sentirem-se mais confortáveis”.");
    //footer
    $("#foot p").text("&copy 2023 - Desenvolvedor Lucas - dark mode")
  });
});







