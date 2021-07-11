import { Injectable } from '@angular/core';
import { Question } from '../models/question';
//import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { prizeInfo } from '../models/prizeInfo';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  [x: string]: any;

  private questionCount: number = 0;

 private questions: Question[] = [
    {
      title:'A Lei de Diretrizes e Bases-LDB - Lei nº 9.394/96 – preconiza que os sistemas de ensino devem assegurar aos alunos currículo, métodos, recursos e organização específicos para atender às suas necessidades.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
        ],
        level:1
    },
    {
      title:'A Lei n° 10.436/2002 reconhece a Língua Brasileira de Surdos como meio legal de escrita, determinando que sejam garantidas formas institucionalizadas de apoiar seu uso e difusão, bem como a inclusão da disciplina de Libras.',
      answers: [
        {description:'Certo', isRight:false},
        {description:'Errado', isRight:true},
      ],
      level:1
    },
    {
      title:'O Plano de Desenvolvimento da Educação-PDE - Lei nº 6.094/2007 – traz como eixos a acessibilidade arquitetônica dos prédios escolares, a implantação de salas de recursos multifuncionais e a formação docente para o atendimento educacional especializado.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'Aprovada pela Assembleia Legislativa do Estado de Alagoas, a Convenção Sobre Direitos das Pessoas com Deficiência estabelece um sistema de educação inclusiva em todos os níveis. ',
      answers: [
        {description:'Certo', isRight:false},
        {description:'Errado', isRight:true},
      ],
      level:1
    },
    {
      title:'Dentre as finalidades do NAPNE - Núcleo de Atendimento às Pessoas com Necessidades Específicas - estão incentivar, mediar e facilitar no processo de ensino e aprendizagem de alunos com necessidades específicas.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'São consideradas pessoas com necessidades específicas, segundo o NAPNE do Instituto Federal de Alagoas, estudantes com deficiência, com transtornos globais do desenvolvimento e com altas habilidades/superdotação, de acordo com o Decreto nº 7.611/2011.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'São consideradas pessoas com necessidades específicas estudantes com deficiência, com transtornos globais do desenvolvimento e com altas habilidades/superdotação, de acordo com o Decreto no. 7.611/2011\n \
      Além da cultura da “educação para a convivência”, o NAPNE tem como objetivos:\n \
      a.	Sensibilizar a comunidade escolar quanto à inclusão e os direitos de todos à educação;\
      b.	Atendimento e acompanhamento dos alunos com necessidades específicas; \
      c.	Atividades voltadas à formação de professores e técnicos;',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'Sobre as terminologias adequadas e recomendadas pelo NAPNE do Instituto Federal de Alagoas:\
      Pessoa com deficiência física\
      Pessoa com deficiência visual\
      Pessoa cega total',
      answers: [
        {description:'Certo', isRight:false},
        {description:'Errado', isRight:true},
        
      ],
      level:1
    },
    {
      title:'Ainda sobre as recomendações do NAPNE, é correto quando orienta que evite referir-se à pessoa com deficiência pela sigla PcD, porque não se deve usar siglas para chamar seres humanos.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'A recomendação orientada aos profissionais ao lidar com alunos com necessidades específicas é que o papel do professor seja de mediador/facilitador/orientador do saber e do ensino/aprendizagem.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'Sobre os alunos com deficiência visual não é recomendado que o professor ou profissional auxiliar modifique os móveis de lugar. ',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'Ainda sobre os alunos com deficiência visual, não é necessário em sala de aula um profissional auxiliar que ensine em Braile.',
      answers: [
        {description:'Certo', isRight:false},
        {description:'Errado', isRight:true},
      ],
      level:1
    },
    {
      title:'\
      A instituição deverá providenciar um profissional que auxilie no ensino em Braile.\
   Recomenda-se para o professor na mediação do aluno com deficiência física esteja atento à adaptação do mobiliário para o conforto do aluno.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'O mobiliário deve estar adaptado às especificidades do aluno.\
      Na mediação em relação ao aluno com deficiência auditiva, o professor deve desenvolver competências linguísticas, metalinguísticas e cognitivas, levando o aluno ao conhecimento da língua portuguesa escrita.',
      answers: [
        {description:'Certo', isRight:true},
        {description:'Errado', isRight:false},
      ],
      level:1
    },
    {
      title:'Para o trabalho com alunos com deficiência intelectual, recomenda-se ao professor que estimule habilidades sociais e interpessoais; evite comparações; planeje metodologia de ensino com recursos diversificados, dando ao conteúdo um significado prático/instrumental; priorize a   instrução verbal com uso de recursos visuais e auditivos; e não utilize relógio e quadros referenciais com rotinas, alfabetos e números.',
      answers: [
        {description:'Certo', isRight:false},
        {description:'Errado', isRight:true},
      ],
      level:1
    },
    {
      title:'Para promover a educação inclusiva, precisamos: ',
      answers: [
        {description:'enfrentar os mecanismos de exclusão existentes no sistema educacional, 	  ampliando-o, diversificando suas 		  ofertas, aprimorando sua cultura e práticas 		 pedagógicas e, principalmente, articulando-o com todas as políticas 	  públicas.',isRight:true},
        {description:'criar a cultura da inclusão com urgência, para que todos os alunos com necessidades educacionais específicas tenham 	   condições de conviverem com crianças consideradas no padrão que se convencionou chamar de normalidade.', isRight:false},
        {description:' incluir concretamente, colocando os alunos com necessidades educacionais específicas nas turmas de ensino regular, 	  pois a integração, realizada há um longo tempo no sistema, está superada e não oferece os benefícios da convivência.', 	isRight:false},
        {description:'inserir o aluno com necessidades educacionais específicas numa turma de alunos ditos normais, como meio fundamental 	  de garantir o exercício do convívio entre as diferenças, numa sociedade plural como a brasileira.', isRight:false},
      ],
      level:1
    },
    {
      title:'Sobre a educação inclusiva nas escolas, assinale a alternativa correta: ',
      answers: [
        {description:'Escola inclusiva é, aquela que garante a qualidade de ensino educacional a cada um de seus alunos, reconhecendo e 		  respeitando a diversidade e respondendo a cada um de acordo com suas potencialidades e necessidades;', isRight:true},
        {description:'A escola somente poderá ser considerada inclusiva quando estiver direcionada para tratar os alunos de forma indiferente em todos os aspectos;', isRight:false},
        {description:'A escola é aquela que garante a preferência no ensino educacional ao aluno destaque, tratando todos de forma genérica sem haver necessidade de tratamento diferenciado em nenhum aspecto;', isRight:false},
        {description:'Em toda escola inclusiva, o aluno está sujeito a segregação, de modo a garantir a sua caminhada no processo de aprendizagem e de construção das competências necessárias para o exercício pleno da cidadania.', isRight:false},
      ],
      level:1
    },
    {
      title:'A Educação Inclusiva não deve ser confundida como Educação Especial, porém, a segunda esta inclusa na primeira. Em outras palavras, Educação Inclusiva é a forma de:',
      answers: [
        {description:'Promover a aprendizagem e o desenvolvimento de todos.', isRight:true},
        {description:'Inclusão de jovens e adultos no ensino médio.', isRight:false},
        {description:'Promover a aprendizagem de crianças somente na educação infantil.', isRight:false},
        {description:'Inclusão de crianças no ensino fundamental.', isRight:false},
      ],
      level:1
    },
    {
      title:'O conceito de educação inclusiva surgiu a partir de 1994, com a Declaração de Salamanca. A ideia da educação inclusiva é que as crianças com necessidades educacionais específicas sejam incluídas em:',
      answers: [
        
        {description:'apenas institutos de atendimentos especiais.', isRight:false},
        {description:'somente escolas específicas para crianças com deficiências.', isRight:false},
        {description:'quaisquer escolas de ensino regular.', isRight:true},
        {description:'quaisquer unidades de atendimento para educação especial.', isRight:false},
      ],
      level:1
    },
    {
      title:'De acordo com a Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, não podemos afirmar que:',
      answers: [
        
        {description:'na perspectiva da educação inclusiva, a educação especial passa a integrar a proposta pedagógica da escola regular, promovendo o atendimento às necessidades educacionais específicas dos alunos, transtornos globais de desenvolvimento e altas habilidades/superdotação.', isRight:false},
        {description:'constitui um paradigma educacional fundamentado na concepção de direitos humanos, que conjuga igualdade e diferença como valores indissociáveis, e que avança em relação à ideia de equidade formal ao contextualizar as circunstâncias históricas da produção da exclusão dentro e fora da escola.', isRight:false},
        {description:'o atendimento educacional especializado tem como função identificar, elaborar e organizar recursos pedagógicos e de acessibilidade que eliminem as barreiras para a plena participação dos alunos, considerando suas necessidades específicas.', isRight:false},
        {description:'para atuar na educação especial, o professor deve ter como base da sua formação, inicial e continuada, conhecimentos 	gerais para o exercício da docência, bem como conhecimentos gerais da área.', isRight:true},
      ],
      level:1
    },
    {
      title:'A Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, propõe, exceto:',
      answers: [
        
        {description:'Que no contexto escolar, todos aprendem a viver coletivamente, a repartir tarefas e dividir responsabilidades, pois a valorização da diversidade de talentos humanos é um exercício que desenvolve as ações dos alunos e que resulta do trabalho em grupos heterogêneos.', isRight:false},
        {description:'Que a escola contemple todos os alunos, mesmo aqueles com severas limitações, que não conseguem aprender os conteúdos escolares, mas que se beneficiem da convivência com os outros alunos. Por conseguinte, os alunos, nestas condições, podem receber, como complemento, o Atendimento Educacional Especializado.', isRight:false},
        {description:'A mudança de valores, atitudes e práticas educacionais para atender a todos os estudantes, sem nenhum tipo de discriminação, assegurando-lhes uma educação de qualidade.', isRight:false},
        {description:'Que a intencionalidade da educação seja voltada diretamente para a preparação dos indivíduos para o desempenho de funções específicas: mão de obra qualificada para o mercado de trabalho, ou seja, funções atreladas ao desenvolvimento econômico do país.', isRight:true},
      ],
      level:1
    },
    {
      title:'São objetivos da Política Nacional de Educação Especial, na perspectiva da Educação Inclusiva, exceto:',
      answers: [
        {description:'Segregação social;', isRight:true},
        {description:'Atendimento educacional especializado;', isRight:false},
        {description:'Participação da família e da comunidade;', isRight:false},
        {description:'Articulação intersetorial na implementação das políticas públicas.', isRight:false},
      ],
      level:1
    },
    {
      title:'As necessidades básicas de aprendizagem dos alunos com necessidades educacionais específicas requerem atenção especial. É preciso tomar medidas que garantam a igualdade de acesso à educação a todos, independentemente das especificidades apresentadas. Sendo assim, sobre a Educação Inclusiva é correto afirmar:',
      answers: [
        {description:'A educação inclusiva tem como prioridade a prática pedagógica tradicional, preparando os alunos para que consigam inserir-se no exigente e competitivo mercado de trabalho.', isRight:false},
        {description:'A Educação Inclusiva reconhece que todas as escolas e sistemas de educação precisam mudar no sentido de encontrar respostas para as necessidades individuais de todos os educandos, com ou sem especificidades.', isRight:true},
        {description:'A educação inclusiva é aquela que mantém os educandos em escolas especiais, com ensino adaptado.', isRight:false},
        {description:'A Educação Inclusiva reconhece que todas as escolas e sistemas de educação precisam mudar no sentido de incluir avaliações padronizadas no processo de ensino aprendizagem, propondo um currículo de base tradicional.', isRight:false},
      ],
      level:1
    },
    {
      title:'A perspectiva da educação inclusiva traz como premissa a prevalência de um único sistema educativo para todos, ou seja, a inclusão de',
      answers: [
        {description:'todo e qualquer tipo de especificidade ou alta habilidade, na escola de educação especial.', isRight:false},
        {description:'todas as crianças com deficiências mentais e físicas, na escola de educação especial.', isRight:true},
        {description:'todas as crianças com necessidades educacionais específicas na escola regular.', isRight:true},
        {description:'crianças surdas e cegas na escola de educação especial, a partir do ensino obrigatório de Braille e da Língua de Sinais.', isRight:false},
      ],
      level:1
    },

  ];
  
  private questionPremios = [
    1000, //1
    2000,
    3000,
    4000,
    5000, //5 //cada participante vai responder 10 perguntas somente
    10000, //10
    20000,
    30000,
    3000,
    3000,
  ];

  
  constructor(private toastCtrl: ToastController) {
    this.questions.sort((a,b) => 0.5 - Math.random());
   }

   ngOnInit(){
     this.nativeAudio.preloadSimple('certo.wav', 'assets/certo.wav').then(err => { console.log(err)});
     this.nativeAudio.preloadSimple('errou.wav', 'assets/errou.wav');
     

     this.nativeAudio.preloadComplex('suspense.wav', 'assets/suspense.wav', .2 , 1, 0).then(() => {
      this.nativeAudio.loop('backAudio');
     });

   }

   proximaQuestao(): Question {
    const randomIndex: number = Math.floor(Math.random() * this.questions.length);
    this.questionCount++;
  //  console.log(this.getPrizeInfo());
    return this.questions.splice(randomIndex, 1)[0];
  }

  getPrizeInfo(): prizeInfo {
    const curQuestionPrize  = this.questionPremios[this.questionCount -1];
    const acumulado = this.getPrizeInfo[this.questionCount -2];
    return {
      correctAnswer: curQuestionPrize,
      wrongAnswer: this.questionCount === 1 || this.questionCount  === 16 ? 0:acumulado/2, //logica padrao se errar
      quit: this.questionCount === 1 ? 0 : acumulado
    }
  }


  }