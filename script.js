const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você se depara com a pobreza, o que vem em sua mente?",
        alternativas: [
            {
                texto: "Vou procurar formas para ajudar quem precisa!",
                afirmacao: "Quis ajudar de forma simples diminuir a pobreza. "
            },
            {
                texto: "Vou ignorar, pois não é minha responsabilidade!",
                afirmacao: "Não deu atenção."
            }
        ]
    },
    {
        enunciado: "O que é pobreza pra você?",
        alternativas: [
            {
                texto: "Viver com uma renda menor do que o mínimo necessário para satisfazer necessidades básicas",
                afirmacao: "Viver com uma baixa renda nesse mundo acaba faltando o mínimo para sobreviver."
            },
            {
                texto: "Viver em áreas urbanas de alta renda.",
                afirmacao: "Geralmente quem vive em áreas urbanas tem uma renda maior, facilitando o acesso as necessidades básicas."
            }
        ]
    },
    {
        enunciado: " Como a pobreza pode afetar a saúde de uma pessoa? ",
        alternativas: [
            {
                texto: "Pode limitar o acesso a cuidados médicos e alimentação adequada.",
                afirmacao: "Limita o acesso aos cuidados médicos consequentemente surgem os problemas de saúde."
            },
            {
                texto: " Melhora a saúde mental e física.",
                afirmacao: "Não faz sentido melhorar a saúde mental se existe a limitação dos acessos a saúde pública."
            }
        ]
    },
    {
        enunciado: "Qual é a relação entre educação e pobreza?",
        alternativas: [
            {
                texto: "A educação pode aumentar as oportunidades de emprego e reduzir a pobreza.",
                afirmacao: " Sem dúvidas a boa formação muda vidas"
            },
            {
                texto: "A educação é uma causa da pobreza.",
                afirmacao: "A educação não é a causa da pobreza, mas sim prejudica"
            }
        ]
    },
    {
        enunciado: "Qual é um exemplo de um programa de ajuda social destinado a combater a pobreza?",
        alternativas: [
            {
                texto: "Transferências diretas de dinheiro para famílias de baixa renda.",
                afirmacao: "Bolsa família é um exemplo de bolsa que ajuda milhares de pessoas"
            },
            {
                texto: "Subvenções para investimentos em ações.",
                afirmacao: "Sem sentido fazer subvençoẽs em ações, é melhor um programa de bolsas para sustentar a família. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
