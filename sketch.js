

let campoIdade;
let campoFantasia;

function setup() {
    createCanvas(400, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
   campoIdade = createInput("14");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
  campoAventura = createCheckbox("Gosta de romance?");
  
}


function draw() {
    background(220);
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia,);
  
  fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(30);
  
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeRomance) {
    if(idade >= 14) {
        if(idade >= 16) {
            return "Cinquenta tons de cinza";
        } else {
            if(gostaDeRomance){
                return "Animais noturnos";
            } else {
                return "Como eu era antes de você";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "A viagem de Chihiro";
        } else {
            return "O feitiço do tempo";
        }
    }
}

