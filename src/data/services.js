import imgHero1 from '../assets/imagem2orc.svg';
import adoteUmPostinho from '../assets/Adote-um-postinho.png';
import hakuna from '../assets/Hakuna-Matata.png';
import seasons from '../assets/four-seasons-copy.png';
import imgHero2 from '../assets/Imagem1orc.svg';
import edwiges from '../assets/edwiges-copy.png';
import pegasus from '../assets/meteoro-pegasus-copy.png';
import moonlight from '../assets/moonlight-copy.png';
import img3 from '../assets/imagem3orc.svg';
import fitflow from '../assets/fitflow-copy.png';
import img4 from '../assets/imagem4orc.svg';
import ect from '../assets/ECT.png';
import elas from '../assets/elas-projetam-copy.png';
import nutrir from '../assets/nutrir-copy.png';
import img5 from '../assets/imagem5orc.svg';
import allegro from '../assets/allegro-copy.png';
import camaro from '../assets/camaro-amarelo-copy.png';
import meninos from '../assets/Meninos-porteira.png';

// Dica: para quebrar um texto em parágrafos, use "\n\n" dentro do texto.
// Funciona em: texto2, funcionamento, ajudaIntro e no "text" dos passos.

export const SERVICOS = {
  "desenvolvimento-gamificado": {


    name: "Desenvolvimento Gamificado",
    imageHero: imgHero1,
    texto1:"Software pensado para funcionar, evoluir e criar experiências que as pessoas queiram continuar utilizando.",
    texto2:"Desenvolvemos sistemas, plataformas e aplicações digitais personalizadas a partir das necessidades do seu negócio e dos seus usuários.\n\nQuando a gamificação faz sentido para o problema, utilizamos seus princípios para tornar a experiência mais clara, envolvente e capaz de orientar comportamentos.",
    textButao: "Quero desenvolver meu produto",


    //seção de detalhamento
    titulo:"Como funciona o Desenvolvimento Gamificado?",
    funcionamento:"Nosso desenvolvimento combina Engenharia de Software, estratégia e experiência. Antes de escrever código, buscamos compreender o problema, definir requisitos e estruturar uma solução que possa gerar valor de forma sustentável.",
    passos: [
      { n: 1, title: "Projeto de Software", text: "Estruturamos o produto, seus requisitos, funcionalidades, arquitetura e principais decisões técnicas antes e durante o desenvolvimento." },
      { n: 2, title: "Código-fonte", text: "Desenvolvemos o software com tecnologias adequadas ao contexto do produto e às necessidades definidas no projeto." },
      { n: 3, title: "Testes", text: "Avaliamos funcionalidades e comportamentos para reduzir erros e garantir que o produto atenda aos requisitos definidos." },
      { n: 4, title: "Documentação", text: "Registramos informações importantes para facilitar o uso, a manutenção e a evolução do produto." },
      { n: 5, title: "Implantação", text: "Preparamos e disponibilizamos o software no ambiente adequado para que ele possa ser utilizado pelos usuários." },
      { n: 6, title: "Manutenção e suporte", text: "Durante o período previsto em contrato, acompanhamos o funcionamento da solução, corrigimos problemas e apoiamos sua utilização." }
    ],

    //seção de beneficios
    tituloBeneficios: "Como o Desenvolvimento Gamificado pode ajudar?",
    ajudaIntro: "Um bom produto digital precisa fazer mais do que funcionar tecnicamente. Ele precisa ser compreensível, confiável e adequado às pessoas que irão utilizá-lo.",
    beneficios: [
      {
        title: "Experiência mais envolvente",
        text: "Projetamos interações que ajudam o usuário a compreender o produto, perceber seu progresso e continuar avançando."
      },
      {
        title: "Feedback claro",
        text: "Criamos respostas e mecanismos de feedback que ajudam as pessoas a entender o impacto de suas ações dentro do produto."
      },

      {
        title: "Solução personalizada",
        text: "Cada projeto parte de uma realidade diferente. Por isso, desenvolvemos soluções adaptadas ao contexto, aos objetivos e às necessidades de cada cliente."
      }
    ],

    //seção para projetos
    tituloProjetos: "Conheça alguns dos produtos que já desenvolvemos",
    projetos: [
      {
        id: 1,
        name: "Adote um Postinho",
        resumo: "O Adote um Postinho foi desenvolvido para apoiar o acompanhamento de problemas identificados em Unidades Básicas de Saúde. A solução utilizou uma experiência gamificada para incentivar a participação de voluntários e tornar o processo de acompanhamento mais acessível e colaborativo.",
        image: adoteUmPostinho
      },
      {
        id: 2,
        name: "Hakuna Matata",
        resumo: "O Hakuna foi uma plataforma digital voltada à aprendizagem sobre gerenciamento de projetos. A experiência foi organizada em diferentes trilhas de conteúdo, utilizando elementos de gamificação para tornar o progresso mais visível e estimular a continuidade do aprendizado.",
        image: hakuna
      },
      {
        id: 3,
        name: "Four Seasons",
        resumo: "O Four Seasons foi desenvolvido para trabalhar conteúdos de educação ambiental de maneira interativa. A solução utilizou uma experiência inspirada em jogos de tabuleiro para transformar conteúdos de capacitação em uma jornada mais participativa.",
        image: seasons
      }
    ]

  },
  "consultoria-gamificada": {

    name: "Consultoria Gamificada",
    imageHero: imgHero2,
    texto1:"Entenda o que está funcionando na sua gamificação e o que pode ser melhorado.",
    texto2:"Analisamos experiências gamificadas existentes para identificar problemas de participação, motivação e continuidade.\n\nA partir do comportamento dos usuários, dos objetivos da organização e das mecânicas utilizadas, propomos melhorias capazes de tornar a experiência mais clara, envolvente e consistente.",
    textButao: "Quero melhorar minha experiência",

    //seção de detalhamento
    titulo:"Como funciona a Consultoria Gamificada?",
    funcionamento:"A consultoria parte da análise da experiência existente. Avaliamos objetivos, público, jornada, mecânicas e resultados para identificar oportunidades de melhoria.",
    passos: [
      { n: 1, title: "Estudo dos objetivos", text: "Compreendemos quais resultados e comportamentos a gamificação deveria apoiar." },
      { n: 2, title: "Análise da experiência", text: "Avaliamos o funcionamento atual, a jornada dos usuários e os principais pontos de fricção." },
      { n: 3, title: "Proposta de melhorias", text: "Estruturamos recomendações a partir dos problemas identificados." },
      { n: 4, title: "Plano Geral de Gamificação", text: "Consolidamos as principais decisões e alterações propostas para a experiência." },
      { n: 5, title: "Manual da Gamificação", text: "Organizamos as orientações necessárias para apoiar a aplicação das melhorias." }
    ],

    //seção de beneficios
    tituloBeneficios: "Como a Consultoria Gamificada pode ajudar?",
    ajudaIntro: "Gamificação não é automaticamente eficiente. Uma experiência mal projetada pode gerar confusão, desinteresse ou comportamentos diferentes daqueles esperados.\n\nA consultoria ajuda a compreender o que está acontecendo antes de propor mudanças.",
    beneficios: [
      {
        title: "Identificar pontos de fricção",
        text: "Analisamos onde a experiência pode estar dificultando a participação ou reduzindo o engajamento."
      },
      {
        title: "Propor melhorias",
        text: "Transformamos os problemas identificados em recomendações práticas para evoluir a experiência."
      },
      {
        title: "Revisar objetivos",
        text: "Verificamos se as mecânicas existentes realmente estão conectadas aos comportamentos e resultados pretendidos."
      }
    ],

    //seção para projetos
    tituloProjetos: "Conheça as Consultorias que já fizemos!",
    projetos: [
      {
        id: 1,
        name: "Edwiges",
        resumo: "No projeto Edwiges, analisamos e redesenhamos uma experiência utilizada em processo seletivo e trainee. A proposta buscou aumentar o envolvimento dos participantes e fortalecer a conexão entre a experiência e a cultura da organização.",
        image: edwiges
      },
      {
        id: 2,
        name: "Meteoro de Pegasus",
        resumo: "No Meteoro de Pegasus, trabalhamos sobre uma experiência interativa voltada ao aprendizado de astrologia. A consultoria analisou a jornada dos usuários e propôs ajustes para tornar as etapas da experiência mais claras e envolventes.",
        image: pegasus
      },
      {
        id: 3,
        name: "Moonlight Sonata",
        resumo: "O Moonlight Sonata envolveu a revisão de uma experiência gamificada utilizada por uma equipe de vendas. Foram analisados elementos da jornada, conteúdos e mecanismos de pontuação para adaptar a solução ao contexto de trabalho remoto.",
        image: moonlight
      }
    ]
  },
  "concepção-de-software":{


    name: "Concepção de Software",
    imageHero: img3,
    texto1 : "Transforme sua ideia em um produto digital estruturado antes de investir no desenvolvimento.",
    texto2:"Ajudamos você a compreender o problema, organizar requisitos, validar ideias e visualizar como o produto pode funcionar antes de avançar para sua implementação.",
    textButao: "Quero estruturar minha ideia",

    //seção de detalhamento
    titulo:"Como funciona a Concepção de Software?",
    funcionamento:"A Concepção organiza as decisões fundamentais de um produto antes do desenvolvimento, reduzindo incertezas e criando uma base mais clara para as próximas etapas.",
    passos: [
      { n: 1, title: "Requisitos iniciais", text: "Identificamos os principais objetivos, necessidades, funcionalidades e comportamentos esperados para o produto." },
      { n: 2, title: "Estratégia de experiência e gamificação", text: "Analisamos como a experiência pode orientar o usuário e, quando fizer sentido, avaliamos a aplicação de princípios de gamificação." },
      { n: 3, title: "Prototipação", text: "Criamos representações do produto para visualizar fluxos, interfaces e interações antes do desenvolvimento." },
      { n: 4, title: "Refinamento de requisitos", text: "A partir das validações realizadas, refinamos as funcionalidades e decisões do produto." },
      { n: 5, title: "MVP", text: "Estruturamos a versão mínima necessária para validar a proposta de valor do produto com menor risco e investimento inicial." }
    ],

    //seção de beneficios
    tituloBeneficios: "Como a Concepção de Software pode ajudar?",
    ajudaIntro: "Uma boa ideia precisa ser compreendida antes de ser construída. A Concepção ajuda a reduzir incertezas e transformar ideias abstratas em produtos mais claros e viáveis.",
    beneficios: [
      {
        title: "Mais clareza para apresentar o projeto",
        text: "Com requisitos, fluxos e protótipos definidos, sua ideia se torna mais fácil de comunicar para parceiros, equipes e possíveis investidores."
      },
      {
        title: "Mais segurança para tomar decisões",
        text: "Visualizar o produto antes do desenvolvimento permite identificar riscos, avaliar prioridades e compreender melhor o investimento necessário."
      },
      {
        title: "Desenvolvimento mais organizado",
        text: "Uma concepção bem estruturada reduz ambiguidades e fornece uma base mais clara para quem irá desenvolver e manter o produto."
      }
    ],

    //seção para projetos
    tituloProjetos: "Conheça as Concepções de Software que já fizemos!",
    projetos: [
      {
        id: 1,
        name: "FitFlow",
        resumo: "O FitFlow foi concebido como um aplicativo voltado ao acompanhamento de hábitos relacionados a alimentação, treino e sono. Durante a concepção, foram estruturadas funcionalidades e experiências capazes de apoiar o usuário na construção de uma rotina mais consistente, incluindo mecanismos de progresso e desafios.",
        image: fitflow
      }
    ]
  },
  "treinamento-gamificado":{


    name: "Treinamento Gamificado",
    imageHero: img4,
    texto1:"Transforme conhecimento em uma experiência de aprendizagem mais prática e envolvente.",
    texto2:"Criamos treinamentos personalizados para compartilhar conhecimentos sobre tecnologia, Engenharia de Software, gamificação e práticas utilizadas no mercado.",
    textButao: "Quero capacitar minha equipe",

    //seção de detalhamento
    titulo:"Como funciona o Treinamento Gamificado?",
    funcionamento:"Estruturamos o conteúdo de acordo com o público, o contexto e os objetivos de aprendizagem, combinando conceitos e atividades práticas.",
    passos: [
      { n: 1, title: "Escolha do tema", text: "Definimos o conteúdo que será trabalhado de acordo com as necessidades da equipe.\n\nOs treinamentos podem envolver temas como gamificação, Scrum, Engenharia de Requisitos e Gestão do Tempo." },
      { n: 2, title: "Público e formato", text: "Definimos o perfil e a quantidade de participantes, além do formato presencial ou remoto." },
      { n: 3, title: "Formato da experiência", text: "Dependendo do objetivo, o treinamento pode seguir uma abordagem tradicional ou utilizar uma dinâmica mais interativa, como o Orc’shop." }
    ],

    secaoExtra: {
      titulo: "Como assim Orc'shop?",
      texto: "O Orc'shop é o nome que damos para o nosso Workshop focado em treinamento com gamificação. Você irá aprender sobre um dos conteúdos (Gamificação, Scrum, Engenharia de Requisitos, dentre outros assuntos relacionados à Engenharia de Software) utilizando técnicas de gamificação...",
      botao: "Quero treinar minha equipe"
    },

    //seção de beneficios (no documento de textos se chama "Engajamento")
    tituloBeneficios: "Aprender também é uma experiência.",
    ajudaIntro: "Não basta apresentar conteúdo. Buscamos criar momentos em que os participantes consigam compreender, experimentar e aplicar aquilo que estão aprendendo.\n\nNos treinamentos relacionados à gamificação, apresentamos conceitos e métodos que ajudam os participantes a compreender como projetar experiências mais envolventes de forma estratégica.",
    beneficios: [
      {
        title: "Processos mais ágeis",
        text: "O treinamento de SCRUM traz conhecimentos gerais sobre o framework e conceitos de agilidade, fundamental para qualquer empresa que queira que seus processos sejam mais rápidos e com resultados satisfatórios."
      },
      {
        title: "Melhor elicitação de requisitos",
        text: "O treinamento de requisitos fornece conteúdos sobre a engenharia de requisitos, umas das principais disciplinas da engenharia de software, mas seus conceitos podem ser aplicados em diversas áreas para entender melhor as necessidades de cada projeto."
      },
      {
        title: "Engajamento",
        text: "O treinamento de gamificação apresenta e ensina a utilizar os principais frameworks para se montar uma gamificação, essencial para quem quer aprender a engajar e motivar um público específico."
      }
    ],

    //seção para projetos
    tituloProjetos: "Conheça os Desenvolvimentos que já fizemos!",
    projetos: [
      {
        id: 1,
        name: "ECT 2016",
        resumo: "Este foi o nosso Orc’shop de gamificação apresentado no Encontro de Ciência e Tecnologia de 2016, evento realizado na Universidade de Brasília (UnB) com o objetivo de divulgar trabalhos científicos e disseminar conhecimento ligados à tecnologia. A gamificação do Orc’shop consistiu na distribuição de pontos que, ao final das atividades, podiam ser trocados por souveniers como adesivos, canecas e cadernos.",
        image: ect
      },
      {
        id: 2,
        name: "Elas Projetam",
        resumo: "Elas Projetam é um hub profissional para mulheres que buscam capacitação profissional na área de gestão de projetos e inovação, o Orc’shop teve como temática uma ilha de desafios em que os desafios eram dinâmicas diferentes a cada etapa e foi apresentado sobre o desafio de engajamento de equipes, gamificação em projetos e a importância de conciliar a vida profissional e pessoal, incluindo a família no dia-a-dia.",
        image: elas
      },
      {
        id: 3,
        name: "Nutrir Jr",
        resumo: "Este projeto foi desenvolvido para uma empresa júnior da Universidade de Brasília (UnB), que se interessou no treinamento de gamificação para que pudessem aplicar as técnicas de engajamento em seus processos internos. Com o conteúdo aprendido, tiveram a chance de identificar as dificuldades que estavam enfrentando e superá-las utilizando técnicas desenvolvidas por eles mesmos.",
        image: nutrir
      }
    ]
  },
  "design-de-gamificacao":{


    name: "Design de Gamificação",
    imageHero: img5,
    texto1:"Crie experiências que aumentem o engajamento, incentivem a participação e tornem jornadas mais envolventes.",
    texto2:"Projetamos experiências gamificadas personalizadas para estimular comportamentos, fortalecer a motivação e criar relações mais ativas entre pessoas, produtos e organizações.\n\nA gamificação não começa com pontos, rankings ou recompensas. Ela começa entendendo o que faz as pessoas participarem, o que reduz seu interesse e como podemos criar uma jornada capaz de manter o engajamento ao longo do tempo.",
    textButao: "Quero criar uma experiência",

    //seção de detalhamento
    titulo:"Como funciona o Design de Gamificação?",
    funcionamento:"Analisamos o contexto antes de definir qualquer mecânica. A partir disso, estruturamos uma experiência coerente com os objetivos e com o público.",
    passos: [
      { n: 1, title: "Análise do contexto", text: "Entendemos o problema, os objetivos, o público e os comportamentos que precisam ser estimulados.\n\nTambém buscamos identificar o que hoje reduz o engajamento ou dificulta a participação das pessoas." },
      { n: 2, title: "Conceito da experiência", text: "Definimos narrativa, linguagem e elementos de interação capazes de gerar identificação e tornar a experiência mais significativa para o público." },
      { n: 3, title: "Jornada e engajamento", text: "Estruturamos etapas, desafios, progressão e feedbacks para incentivar a participação contínua e tornar o avanço perceptível ao usuário." },
      { n: 4, title: "Plano Geral de Gamificação", text: "Documentamos as mecânicas, regras, objetivos, comportamentos esperados e estratégias de engajamento da experiência." },
      { n: 5, title: "Manual da Gamificação", text: "Organizamos as orientações necessárias para que a experiência seja aplicada de forma consistente e consiga manter seus mecanismos de engajamento ao longo do tempo." }
    ],

    //seção de beneficios
    tituloBeneficios: "Onde a gamificação pode ajudar?",
    ajudaIntro: "A gamificação pode ajudar quando existe uma jornada em que as pessoas precisam participar, aprender, colaborar, evoluir ou manter determinado comportamento.\n\nAo tornar objetivos mais claros, oferecer feedback, mostrar progresso e criar desafios significativos, ela pode fortalecer o engajamento e tornar a experiência mais interessante para quem participa.",
    beneficios: [
      {
        title: "Processos seletivos",
        text: "Criamos jornadas capazes de aumentar a participação dos candidatos, fortalecer a conexão com a cultura da organização e tornar cada etapa mais envolvente."
      },
      {
        title: "Eventos e experiências",
        text: "Desenvolvemos mecanismos que estimulam participação, exploração, interação e continuidade ao longo de eventos, workshops e experiências presenciais ou digitais."
      },
      {
        title: "Engajamento de equipes",
        text: "Projetamos experiências que tornam objetivos, conquistas e progresso mais visíveis, incentivando participação, colaboração e envolvimento com as atividades da organização."
      },
      {
        title: "Aprendizagem",
        text: "Utilizamos gamificação para tornar conteúdos mais interativos, criar senso de progressão e incentivar a continuidade durante processos de aprendizagem."
      }
    ],

    //seção para projetos
    tituloProjetos: "Conheça os Designs de Gamificação que já fizemos!",
    projetos: [
      {
        id: 1,
        name: "Allegro",
        resumo: "No projeto Allegro, trabalhamos a experiência de usuários dentro de uma plataforma digital. A proposta buscou facilitar a realização de tarefas e fortalecer a percepção de progresso e pertencimento por meio de uma experiência gamificada estruturada.",
        image: allegro
      },
      {
        id: 2,
        name: "Camaro Amarelo",
        resumo: "O projeto Camaro Amarelo utilizou uma experiência inspirada em reality shows para tornar atividades internas mais envolventes e fortalecer a participação dos membros na rotina da organização.",
        image: camaro
      },
      {
        id: 3,
        name: "Meninos da Porteira",
        resumo: "O projeto Meninos da Porteira foi criado para apoiar a capacitação de participantes de um processo seletivo. A experiência utilizou desafios e mecanismos de descoberta para incentivar o contato dos participantes com diferentes conteúdos de formação.",
        image: meninos
      }
    ]
  }
};
