const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestion = []

let questions = [
  {
  question : 'Um usuário durante a madrugada estava assistindo um dos seus filmes favoritos e ficou preocupado com a quantidade de horas que teria de sono, mas se sentiu aliviado quando viu que faltava apenas 5min e 45s para o fim. Qual heurística foi implementada para que o usuário tivesse essa informação?',
  choice1 : 'Compatibilidade entre o Sistema e o Mundo real',
  choice2 : 'Lei do Peak-End',
  choice3 : 'Liberdade e Controle de tempo',
  choice4 : 'Visibilidade do Status do Sistema',
  answer:4,
  },
  {
  question : 'Um jovem instalou em seu computador um novo programa de edição de fotos e observou que a barra de ferramentas do aplicativo tinha alguns objetos que ele usa no cotidiano, um exemplo disso é a tesoura. Qual heurística aconselha aos desenvolveres a utilizar objetos já conhecidos pelo usuário?',
  choice1 : 'Prevenção de Erros',
  choice2 : 'Compatibilidade entre o Sistema e o Mundo real ',
  choice3 : 'Ajuda e documentação',
  choice4 : 'Ajuda ao usuário a reconhecer, identificar e recuperar de erros',
  answer:2,
  },
  {
  question : 'Um usuário que lê durante a noite, observou que seu aplicativo favorito de leitura não fornece a opção de deixar a tela no modo escuro. Qual heurística estar sendo violada?',
  choice1 : 'Estética e Design Minimalista',
  choice2 : 'Flexibilidade e Eficiência de Uso',
  choice3 : 'Liberdade e Controle do Usuário ',
  choice4 : 'Consistência e Padrões',
  answer:1,
  },
  {
  question : 'A 6° heurística se baseia no fato de o usuário usar a interface intuitiva da melhor forma, precisando memorizar o caminho percorrido pare chegar à determinada página ou lembrar todos os elementos de uma interface',
  choice1 : 'Verdadeiro',
  choice2 : 'Falso',
  choice3 : '',
  choice4 : '',
  answer:1,
  },
  {
  question : 'Um programador estava assistindo a um vídeo e era necessário fazer algumas notações, para isso ele queria utilizar o bloco de notas do computador. Pensando nisso, ele resolver utilizar a tecla Windows e as teclas direcionais (setas para os lados). Qual heurística de Nielsen foi respeitada?',
  choice1 : 'Prevenção de Erros',
  choice2 : 'Flexibilidade e Eficiência de Uso',
  choice3 : 'Ajuda e documentação',
  choice4 : 'Reconhecimento em vez de Memorização',
  answer:2,
  },
  {
    question : 'Um usuário percebeu que abrir o seu novo aplicativo favorito, aparece em uma tela a porcentagem de quanto falta para que as informações sejam carregadas. Qual heurística é compatível com esse contexto?',
    choice1 : 'Flexibilidade e Eficiência de Uso',
    choice2 : 'Ajuda e documentação',
    choice3 : 'Padronização e Consistência',
    choice4 : 'Visibilidade do Status do Sistema ',
    answer:4,
  },
  {
    question : 'Um Aluno enviou uma mensagem errada para a sua professora de IHC (Interação Homem-Computador) e percebeu que o aplicativo de mensagem não disponibilizava ferramenta de Edição e nem a opção de excluir, o que o deixou chateado. Qual heurística foi violada nessa ocasião?',
    choice1 : 'Consistência e Padrões',
    choice2 : 'Reconhecimento em vez de memorização',
    choice3 : 'Estética minimalista',
    choice4 : 'Liberdade e Controle do usuário ',
    answer:4,
  },
  {
    question:'Um estudante em Desenvolvimento de Sistemas estava usando o aplicativo "Trello" para organizar suas atividades e percebeu que era possível utilizar o mouse para navegar entre outros cartões. Qual heurística está sendo aplicada?',
    choice1:'Flexibilidade e Eficiência de uso ',
    choice2:'Consistência e Padrões',
    choice3:'Visibilidade do Status do Sistema',
    choice4:'Prevenção de Erros',
    answer:1,
  },
  {
    question:'Quando estamos tratando de site, precisar sempre deixa o design mais prático para o usuário tomar decisões mais rápidas. Sendo assim, qual heurística cita esse tipo de design?',
    choice1:'Reconhecimento em vez de memorização',
    choice2:'Prevenção de erros',
    choice3:'Estética e design minimalista',
    choice4:'Ajude os usuários a reconhecerem, diagnosticarem e recuperarem-se de erros',
    answer:3,
  },
  {
    question:'"Quanto menor a quantidade de informação menor será a quantidade de informações que serão analisadas e decisões que o usuário precisará tomar, por isso, é crucial manter apenas as informações que não realmente necessárias". Esse texto se refere corretamente a heurística de Estética e design minimalista.',
    choice1:'Sim',
    choice2:'Não',
    choice3:'',
    choice4:'',
    answer:2,
  },
  {
    question:'A heurística ajude os usuários a reconhecerem, diagnosticarem e recuperarem-se de erros, nos cita a importância de ajudar o usuário, caso tenha ocorrido algum erro e o “Ctrl+Z” não tenha funcionado. De acordo com isso, devemos:',
    choice1:'Criar avisos nos campos de erros ',
    choice2:'Deixar o usuário descobrir por si só',
    choice3:'Criar avisos nos campos de erros com uma linguagem mais difícil',
    choice4:'N/A',
    answer:1,
  },
  {
    question:'A prevenção de erros do usuário é algo bastante importante dentro de uma interface, a identificação e encontro de erros é o mais importante dessa área, além do aviso nos campos erros, o que devemos entregar ao usuário?',
    choice1:'Feedback das páginas',
    choice2:'Outra mensagem de erro',
    choice3:'Sugerir uma solução ',
    choice4:'Todas as alternativas',
    answer:3,
  },
  {
    question:'A última das heurísticas de Nielsen diz respeito a inclusão de itens de auxílio para o usuário, estamos falando de que heurística?',
    choice1:'Ajuda e Documentação ',
    choice2:'Estética e Design minimalista',
    choice3:'Flexibilidade e Eficiência',
    choice4:'Ajuda e Eficiência',
    answer:1,
  },
  {
    question:'“Apesar de todas as heurísticas listadas ajudarem a evitar erros e solicitação de ajuda por parte do usuário, é importante pensar em maneiras de auxiliá-lo a qualquer momento de sua interação”, de acordo com o texto, o que devemos fazer?',
    choice1:'Criar uma página com um design minimalista',
    choice2:'Criar uma página de dúvidas frequentes ',
    choice3:'N/A',
    choice4:'Todas as alternativas',
    answer:2,
  }
]

const SCORE_POINTS = 50
const MAX_QUESTIONS = 14

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestion = [...questions]
  getNewQuestion()
}

getNewQuestion = () => {
  if(availableQuestion.length === 0 || questionCounter > MAX_QUESTIONS){
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('./end.html')
  }

  questionCounter++
  progressText.innerText = `Questão ${questionCounter} de ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestion.length)
  currentQuestion = availableQuestion[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice =>{
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestion.splice(questionsIndex, 1)
  acceptingAnswers = true
}

choices.forEach(choice =>{
  choice.addEventListener('click', e =>{
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
    'incorrect'

    if(classToApply === 'correct'){
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() =>{
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num =>{
  score +=num
  scoreText.innerText = score
}

startGame()