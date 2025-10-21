const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que mais te atrai em uma profissão?",
        alternativas: [
            {
                texto: "Cuidar das pessoas, melhorar a vida delas.",
                afirmacao: "Você tem afinidade com áreas que envolvem cuidado e bem-estar, como Saúde, Psicologia e Nutrição.",
            },
            {
                texto: "Resolver problemas práticos e criar soluções.",
                afirmacao: "Você tende para áreas tecnológicas e analíticas, como Engenharia, Ciência da Computação e Administração.",
            }
        ]
    },
    {
        enunciado: "Em que ambiente você se sente mais motivado?",
        alternativas: [
            {
                texto: "Ao ar livre, com contato com a natureza",
                afirmacao: "Você tem um perfil voltado para Ciências Agrárias, como Agronomia e Zootecnia, onde o contato com o ambiente natural é essencial.",
            },
            {
                texto: "Em escritórios, hospitais ou laboratórios.",
                afirmacao: "Você tem um perfil voltado para Ciências da Saúde e Humanas, como Medicina, Psicologia e Ciências Contábeis.",
            }
        ]
    },
    {
        enunciado: "O que você prefere?",
        alternativas: [
            {
                texto: "Lidar com pessoas, comunicação e liderança.",
                afirmacao: "Você se destaca em áreas de Humanas, como Administração, Direito e Educação, onde a interação humana é central.",
            },
            {
                texto: "Lidar com máquinas, sistemas ou cálculos.",
                afirmacao: "Você tem afinidade com Exatas, como Engenharia, Ciência da Computação e Matemática, onde a lógica e os números estão em primeiro plano.",
            }
        ]
    },
    {
        enunciado: "Como você aprende melhor?",
        alternativas: [
            {
                texto: "Com prática, experimentos e movimento.",
                afirmacao: "Você se encaixa bem em áreas como Saúde, Educação Física e Agrárias, onde o aprendizado prático e a ação são essenciais.",
            },
            {
                texto: "Com leitura, teoria e pesquisa.",
                afirmacao: "Você se destaca em áreas como Direito, Psicologia e Ciências Biológicas, onde a teoria e o conhecimento acadêmico são fundamentais.",
            }
        ]
    },
    {
        enunciado: "Se tivesse que liderar um projeto, escolheria:",
        alternativas: [
            {
                texto: "Um projeto social (bem-estar, inclusão, saúde).",
                afirmacao: "Você tem um perfil voltado para Saúde, Humanas e Ciências Sociais, com foco em impacto social e bem-estar.",
            },
            {
                texto: "Um projeto tecnológico (máquinas, sistemas, inovação).",
                afirmacao: "Você se encaixa em áreas tecnológicas e inovadoras, como Engenharia e Tecnologia, com foco em soluções práticas e inovação.",
            }
        ]
    },
    {
        enunciado: "Como você gosta de resolver problemas?",
        alternativas: [
            {
                texto: "Conversando e ouvindo diferentes pontos de vista.",
                afirmacao: "Você tem um perfil voltado para áreas como Psicologia, Direito e Administração, onde a comunicação é essencial para resolver questões.",
            },
            {
                texto: "Testando, calculando e aplicando soluções práticas.",
                afirmacao: "Você tem afinidade com Engenharia, Software e Ciências Exatas, onde o foco é encontrar soluções práticas e funcionais.",
            }
        ]
    },
    {
        enunciado: "Em relação à criatividade, você prefere:",
        alternativas: [
            {
                texto: "Expressar ideias por meio de arte, fala ou movimento.",
                afirmacao: "Você se destaca nas áreas criativas e de expressão, como Artes Cênicas, Comunicação e Educação Física.",
            },
            {
                texto: "Criar soluções técnicas, inventar coisas novas.",
                afirmacao: "Você tem um perfil voltado para Engenharia, Software e Agronomia, onde a inovação técnica é o foco.",
            }
        ]
    },
    {
        enunciado: "Qual destas opções combina mais com você?",
        alternativas: [
            {
                texto: "Tenho paciência, gosto de ouvir e aconselhar.",
                afirmacao: "Você se encaixa em áreas de apoio e aconselhamento, como Psicologia, Educação e Saúde.",
            },
            {
                texto: "Sou objetivo, gosto de números e lógica.",
                afirmacao: "Você tem afinidade com áreas analíticas e lógicas, como Ciências Contábeis, Administração e Tecnologia.",
            }
        ]
    },
    {
        enunciado: "Se tivesse que escolher entre dois trabalhos:",
        alternativas: [
            {
                texto: "Um hospital ou clínica, lidando com pacientes.",
                afirmacao: "Você tem um perfil voltado para Saúde, com foco em cuidar de pessoas e promover bem-estar.",
            },
            {
                texto: "Uma empresa de tecnologia, lidando com sistemas.",
                afirmacao: "Você se encaixa em áreas de Exatas e Tecnologia, com foco em soluções digitais e inovação.",
            }
        ]
    },
    {
        enunciado: "O que te traria mais satisfação?",
        alternativas: [
            {
                texto: "Ver pessoas melhorando e reconhecendo meu impacto.",
                afirmacao: "Você se destaca em áreas onde o impacto humano é claro, como Saúde, Educação e Psicologia.",
            },
            {
                texto: "Ver uma máquina, sistema ou experimento funcionando perfeitamente.",
                afirmacao: "Você tem afinidade com áreas técnicas e de inovação, como Engenharia, Agronomia e Tecnologia.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Após avaliar suas respostas, o seu perfil profissional é:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();
