/* =====================================================
   ANIMAÇÃO DAS SEÇÕES AO ROLAR
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const elementosAnimacao = document.querySelectorAll(
        "#Sobre-Min, #Estudos, #Projetos, #Contato, " +
        ".Sobre-texto, .Sobre-img, " +
        ".projeto-card, " +
        ".contato-titulo, .contato-informacoes"
    );

    const observerScroll = new IntersectionObserver(
        function (entries) {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("mostrar");

                    observerScroll.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    elementosAnimacao.forEach(elemento => {
        observerScroll.observe(elemento);
    });

});


/* =====================================================
   ANIMAÇÃO DE DIGITAÇÃO - INÍCIO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const textoIntro = document.querySelector(".texto-digitacao");
    const nome = document.querySelector(".nome-digitacao");

    if (!textoIntro || !nome) return;


    const intro = "OLÁ, SOU";
    const nomeCompleto = "THAIS ELIANE";


    let velocidadeDigitacao = 90;
    let velocidadeApagar = 55;

    let pausaDepoisDeDigitar = 1800;
    let pausaAntesDeRecomecar = 500;


    /* ================================================
       DIGITAR TEXTO
    ================================================ */

    function digitarTexto(texto, elemento, indice = 0, callback) {

        if (indice < texto.length) {

            elemento.textContent += texto.charAt(indice);

            setTimeout(() => {

                digitarTexto(
                    texto,
                    elemento,
                    indice + 1,
                    callback
                );

            }, velocidadeDigitacao);

        } else {

            callback();

        }

    }


    /* ================================================
       APAGAR TEXTO
    ================================================ */

    function apagarTexto(elemento, callback) {

        const textoAtual = elemento.textContent;

        if (textoAtual.length > 0) {

            elemento.textContent =
                textoAtual.substring(
                    0,
                    textoAtual.length - 1
                );

            setTimeout(() => {

                apagarTexto(
                    elemento,
                    callback
                );

            }, velocidadeApagar);

        } else {

            callback();

        }

    }


    /* ================================================
       ANIMAÇÃO COMPLETA
    ================================================ */

    function iniciarAnimacao() {

        textoIntro.textContent = "";
        nome.textContent = "";


        /* 1 — OLÁ, SOU */

        digitarTexto(
            intro,
            textoIntro,
            0,
            () => {


                /* 2 — THAIS ELIANE */

                digitarTexto(
                    nomeCompleto,
                    nome,
                    0,
                    () => {


                        /* 3 — PAUSA */

                        setTimeout(() => {


                            /* 4 — APAGA O NOME */

                            apagarTexto(
                                nome,
                                () => {


                                    /* 5 — APAGA OLÁ, SOU */

                                    apagarTexto(
                                        textoIntro,
                                        () => {


                                            /* 6 — COMEÇA NOVAMENTE */

                                            setTimeout(
                                                iniciarAnimacao,
                                                pausaAntesDeRecomecar
                                            );

                                        }
                                    );

                                }
                            );

                        }, pausaDepoisDeDigitar);

                    }
                );

            }
        );

    }


    /* Começa a animação */

    iniciarAnimacao();

});


/* =====================================================
   IDIOMAS + TEMA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const botoesIdioma = document.querySelectorAll(".idioma");
    const botaoTema = document.querySelector("#botao-tema");


    /* =================================================
       TRADUÇÕES
    ================================================= */

    const traducoes = {

        /* =================================================
           PORTUGUÊS
        ================================================= */

        pt: {

            /* HEADER */

            home: "Home",
            about: "Sobre Mim",
            skills: "Estudos/Habilidades",
            projects: "Meus Projetos",
            contact: "Contato",


            /* SOBRE MIM */

            aboutTitle: "Sobre Mim",

            aboutText: `Olá! Meu nome é Thais Eliane e atualmente sou estudante de Análise e Desenvolvimento de Sistemas (ADS) pelo Instituto Senac Santo Amaro.

Meu interesse pela área de tecnologia começou durante minha formação técnica em Informática, quando tive meus primeiros contatos com programação e desenvolvimento web.

Posteriormente, cursei Ciência da Computação por aproximadamente um ano, período em que participei de projetos acadêmicos e desenvolvi conhecimentos em programação, algoritmos, números binários e outros fundamentos da computação.

Ao longo dessa experiência, conheci diferentes áreas da tecnologia e percebi que meus principais interesses estão voltados para o Desenvolvimento Web e a Análise de Dados.

Por isso, decidi transferir minha graduação para ADS, buscando uma formação mais alinhada aos meus objetivos profissionais.

Atualmente, busco aprimorar minhas habilidades em programação, desenvolvimento Front-End e Back-End, banco de dados e análise de dados.

Também possuo experiência com mídias sociais, incluindo administração e gerenciamento de redes sociais e produção de roteiros para conteúdos digitais.

Além disso, tenho interesse em Inteligência Artificial e Cibersegurança, áreas que pretendo explorar e aprofundar ao longo da minha trajetória.

Busco constantemente novas oportunidades para aprender, desenvolver minhas habilidades e adquirir experiências que contribuam para meu crescimento profissional na área de tecnologia.`,


            /* ESTUDOS / HABILIDADES */

            studiesTitle: "Estudos e Habilidades",
            studiesSubtitle: "Conhecimentos e tecnologias que fazem parte da minha formação.",

            curriculum: "Baixar Currículo",


            /* PROJETOS */

            projectsTitle: "Meus Projetos",

            projectSalvatoreCategory: "WEB",
            projectSalvatoreType: "FRONT-END",
            projectSalvatoreTitle: "Salvatore",
            projectSalvatoreText: "Sistema web desenvolvido para uma hamburgueria, com páginas de apresentação, cardápio, galeria e área de login.",

            projectClaudiaCategory: "LANDING PAGE",
            projectClaudiaType: "WEB DESIGN",
            projectClaudiaTitle: "Landing Page Cláudia",
            projectClaudiaText: "Landing page desenvolvida para divulgação de um encontro online, com foco em apresentação, conversão e experiência do usuário.",

            projectClaudiaSalesCategory: "SALES PAGE",
            projectClaudiaSalesType: "DESENVOLVIMENTO WEB",
            projectClaudiaSalesTitle: "Mentoria Blindagem Emocional",
            projectClaudiaSalesText: "Página de vendas desenvolvida para apresentar uma mentoria, destacando sua proposta, benefícios, método e chamada para ação.",

            projectHarryCategory: "GAME",
            projectHarryType: "HTML • CSS • JAVASCRIPT",
            projectHarryTitle: "Wizarding World",
            projectHarryText: "Experiência web interativa inspirada no universo de Harry Potter, desenvolvida com HTML, CSS e JavaScript.",

            projectAutonomoCategory: "AUTOMAÇÃO",
            projectAutonomoType: "C# • POO • ALGORITMOS",
            projectAutonomoTitle: "Sistema Autônomo Predadores",
            projectAutonomoText: "Projeto acadêmico desenvolvido em C# com conceitos de programação orientada a objetos e algoritmos.",

            projectView: "VER PROJETO →",


            /* CONTATO */

            contactTitle: "Contato",

            contactSubtitle: "Tem um projeto, oportunidade ou alguma ideia? Vamos conversar!",

            contactTalk: "Vamos conversar?",

            contactText: "Você também pode entrar em contato comigo através das minhas redes.",

            email: "E-mail",
            linkedin: "LinkedIn",
            github: "GitHub",
            instagram: "Instagram",

            contactFooter: "Vamos construir algo incrível juntos! ♡"

        },


        /* =================================================
           INGLÊS
        ================================================= */

        en: {

            home: "Home",
            about: "About Me",
            skills: "Studies/Skills",
            projects: "My Projects",
            contact: "Contact",


            aboutTitle: "About Me",

            aboutText: `Hello! My name is Thais Eliane and I am currently studying Systems Analysis and Development (ADS) at Senac Santo Amaro Institute.

My interest in technology began during my technical training in Information Technology, when I had my first contact with programming and web development.

Later, I studied Computer Science for approximately one year, during which I participated in academic projects and developed knowledge in programming, algorithms, binary numbers, and other computing fundamentals.

Throughout this experience, I explored different areas of technology and realized that my main interests are focused on Web Development and Data Analysis.

For this reason, I decided to transfer my degree to Systems Analysis and Development, seeking an education more aligned with my professional goals.

Currently, I am working to improve my skills in programming, Front-End and Back-End development, databases, and data analysis.

I also have experience with social media, including social media management and the creation of scripts for digital content.

In addition, I am interested in Artificial Intelligence and Cybersecurity, areas that I intend to explore and develop throughout my career.

I am constantly looking for new opportunities to learn, develop my skills, and gain experiences that contribute to my professional growth in technology.`,


            studiesTitle: "Studies and Skills",
            studiesSubtitle: "Knowledge and technologies that are part of my professional development.",

            curriculum: "Download Resume",


            projectsTitle: "My Projects",

            projectSalvatoreCategory: "WEB",
            projectSalvatoreType: "FRONT-END",
            projectSalvatoreTitle: "Salvatore",
            projectSalvatoreText: "Web system developed for a burger restaurant, featuring presentation pages, menu, gallery and login area.",

            projectClaudiaCategory: "LANDING PAGE",
            projectClaudiaType: "WEB DESIGN",
            projectClaudiaTitle: "Cláudia Landing Page",
            projectClaudiaText: "Landing page developed to promote an online event, focusing on presentation, conversion and user experience.",

            projectClaudiaSalesCategory: "SALES PAGE",
            projectClaudiaSalesType: "WEB DEVELOPMENT",
            projectClaudiaSalesTitle: "Emotional Shielding Mentorship",
            projectClaudiaSalesText: "Sales page developed to present a mentorship, highlighting its proposal, benefits, method and call to action.",

            projectHarryCategory: "GAME",
            projectHarryType: "HTML • CSS • JAVASCRIPT",
            projectHarryTitle: "Wizarding World",
            projectHarryText: "Interactive web experience inspired by the Harry Potter universe, developed with HTML, CSS and JavaScript.",

            projectAutonomoCategory: "AUTOMATION",
            projectAutonomoType: "C# • OOP • ALGORITHMS",
            projectAutonomoTitle: "Autonomous Predators System",
            projectAutonomoText: "Academic project developed in C# using object-oriented programming concepts and algorithms.",

            projectView: "VIEW PROJECT →",


            contactTitle: "Contact",

            contactSubtitle: "Have a project, opportunity or idea? Let's talk!",

            contactTalk: "Let's talk?",

            contactText: "You can also get in touch with me through my social networks.",

            email: "E-mail",
            linkedin: "LinkedIn",
            github: "GitHub",
            instagram: "Instagram",

            contactFooter: "Let's build something amazing together! ♡"

        },


        /* =================================================
           ESPANHOL
        ================================================= */

        es: {

            home: "Inicio",
            about: "Sobre Mí",
            skills: "Estudios/Habilidades",
            projects: "Mis Proyectos",
            contact: "Contacto",


            aboutTitle: "Sobre Mí",

            aboutText: `¡Hola! Mi nombre es Thais Eliane y actualmente estudio Análisis y Desarrollo de Sistemas (ADS) en el Instituto Senac Santo Amaro.

Mi interés por la tecnología comenzó durante mi formación técnica en Informática, cuando tuve mis primeros contactos con la programación y el desarrollo web.

Posteriormente, estudié Ciencias de la Computación durante aproximadamente un año, período en el que participé en proyectos académicos y desarrollé conocimientos en programación, algoritmos, números binarios y otros fundamentos de la informática.

A lo largo de esta experiencia, conocí diferentes áreas de la tecnología y descubrí que mis principales intereses están enfocados en el Desarrollo Web y el Análisis de Datos.

Por eso, decidí transferir mi carrera a Análisis y Desarrollo de Sistemas, buscando una formación más alineada con mis objetivos profesionales.

Actualmente, busco mejorar mis habilidades en programación, desarrollo Front-End y Back-End, bases de datos y análisis de datos.

También tengo experiencia con redes sociales, incluyendo la administración y gestión de redes sociales y la creación de guiones para contenidos digitales.

Además, tengo interés en Inteligencia Artificial y Ciberseguridad, áreas que pretendo explorar y profundizar a lo largo de mi trayectoria.

Busco constantemente nuevas oportunidades para aprender, desarrollar mis habilidades y adquirir experiencias que contribuyan a mi crecimiento profesional en el área de tecnología.`,


            studiesTitle: "Estudios y Habilidades",
            studiesSubtitle: "Conocimientos y tecnologías que forman parte de mi desarrollo profesional.",

            curriculum: "Descargar Currículum",


            projectsTitle: "Mis Proyectos",

            projectSalvatoreCategory: "WEB",
            projectSalvatoreType: "FRONT-END",
            projectSalvatoreTitle: "Salvatore",
            projectSalvatoreText: "Sistema web desarrollado para una hamburguesería, con páginas de presentación, menú, galería y área de inicio de sesión.",

            projectClaudiaCategory: "LANDING PAGE",
            projectClaudiaType: "DISEÑO WEB",
            projectClaudiaTitle: "Landing Page Cláudia",
            projectClaudiaText: "Landing page desarrollada para promocionar un evento online, enfocada en presentación, conversión y experiencia del usuario.",

            projectClaudiaSalesCategory: "SALES PAGE",
            projectClaudiaSalesType: "DESARROLLO WEB",
            projectClaudiaSalesTitle: "Mentoría Blindaje Emocional",
            projectClaudiaSalesText: "Página de ventas desarrollada para presentar una mentoría, destacando su propuesta, beneficios, método y llamada a la acción.",

            projectHarryCategory: "GAME",
            projectHarryType: "HTML • CSS • JAVASCRIPT",
            projectHarryTitle: "Wizarding World",
            projectHarryText: "Experiencia web interactiva inspirada en el universo de Harry Potter, desarrollada con HTML, CSS y JavaScript.",

            projectAutonomoCategory: "AUTOMATIZACIÓN",
            projectAutonomoType: "C# • POO • ALGORITMOS",
            projectAutonomoTitle: "Sistema Autónomo de Depredadores",
            projectAutonomoText: "Proyecto académico desarrollado en C# utilizando conceptos de programación orientada a objetos y algoritmos.",

            projectView: "VER PROYECTO →",


            contactTitle: "Contacto",

            contactSubtitle: "¿Tienes un proyecto, una oportunidad o alguna idea? ¡Hablemos!",

            contactTalk: "¿Hablamos?",

            contactText: "También puedes ponerte en contacto conmigo a través de mis redes.",

            email: "E-mail",
            linkedin: "LinkedIn",
            github: "GitHub",
            instagram: "Instagram",

            contactFooter: "¡Construyamos algo increíble juntos! ♡"

        }

    };


    /* =================================================
       APLICAR IDIOMA
    ================================================= */

    function aplicarIdioma(idioma) {

        const textos = traducoes[idioma];

        if (!textos) return;


        /* Elementos com data-i18n */

        document.querySelectorAll("[data-i18n]").forEach(elemento => {

            const chave = elemento.dataset.i18n;

            if (textos[chave]) {

                if (
                    elemento.tagName === "INPUT" ||
                    elemento.tagName === "TEXTAREA"
                ) {

                    elemento.placeholder = textos[chave];

                } else {

                    elemento.textContent = textos[chave];

                }

            }

        });


        /* =================================================
           ESTUDOS
        ================================================= */

        const tituloEstudos =
            document.querySelector("#Estudos h2");

        if (tituloEstudos && textos.studiesTitle) {
            tituloEstudos.textContent = textos.studiesTitle;
        }


        /* =================================================
           PROJETOS
        ================================================= */

        const tituloProjetos =
            document.querySelector(
                "#Projetos .projetos-titulo h2"
            );

        if (tituloProjetos && textos.projectsTitle) {
            tituloProjetos.textContent = textos.projectsTitle;
        }


        const projetos =
            document.querySelectorAll(".projeto-card");


        projetos.forEach((card, index) => {

            const mapaProjetos = [

                {
                    category: "projectSalvatoreCategory",
                    type: "projectSalvatoreType",
                    title: "projectSalvatoreTitle",
                    text: "projectSalvatoreText"
                },

                {
                    category: "projectClaudiaCategory",
                    type: "projectClaudiaType",
                    title: "projectClaudiaTitle",
                    text: "projectClaudiaText"
                },

                {
                    category: "projectClaudiaSalesCategory",
                    type: "projectClaudiaSalesType",
                    title: "projectClaudiaSalesTitle",
                    text: "projectClaudiaSalesText"
                },

                {
                    category: "projectHarryCategory",
                    type: "projectHarryType",
                    title: "projectHarryTitle",
                    text: "projectHarryText"
                },

                {
                    category: "projectAutonomoCategory",
                    type: "projectAutonomoType",
                    title: "projectAutonomoTitle",
                    text: "projectAutonomoText"
                }

            ];


            const projeto = mapaProjetos[index];

            if (!projeto) return;


            const categoria =
                card.querySelector(".projeto-categoria");

            const tipo =
                card.querySelector(".projeto-tipo");

            const titulo =
                card.querySelector(".projeto-conteudo h3");

            const descricao =
                card.querySelector(".projeto-conteudo p");

            const link =
                card.querySelector(".projeto-link");


            if (categoria) {
                categoria.textContent =
                    textos[projeto.category];
            }

            if (tipo) {
                tipo.textContent =
                    textos[projeto.type];
            }

            if (titulo) {
                titulo.textContent =
                    textos[projeto.title];
            }

            if (descricao) {
                descricao.textContent =
                    textos[projeto.text];
            }

            if (link) {

                const textoLink =
                    Array.from(link.childNodes)
                        .find(node =>
                            node.nodeType === Node.TEXT_NODE
                        );

                if (textoLink) {
                    textoLink.textContent =
                        textos.projectView + " ";
                }

            }

        });


        /* =================================================
           CONTATO
        ================================================= */

        const contatoTitulo =
            document.querySelector(
                "#Contato .contato-titulo h2"
            );

        if (contatoTitulo) {
            contatoTitulo.textContent =
                textos.contactTitle;
        }


        const contatoSubtitulo =
            document.querySelector(
                "#Contato .contato-titulo p"
            );

        if (contatoSubtitulo) {
            contatoSubtitulo.textContent =
                textos.contactSubtitle;
        }


        const contatoConversar =
            document.querySelector(
                "#Contato .contato-informacoes h3"
            );

        if (contatoConversar) {
            contatoConversar.textContent =
                textos.contactTalk;
        }


        const contatoTexto =
            document.querySelector(
                "#Contato .contato-informacoes > p"
            );

        if (contatoTexto) {
            contatoTexto.textContent =
                textos.contactText;
        }


        /* Títulos dos contatos */

        const contatoItens = {
            "E-mail": "email",
            "LinkedIn": "linkedin",
            "GitHub": "github",
            "Instagram": "instagram"
        };


        document.querySelectorAll(".contato-item").forEach(item => {

            const titulo =
                item.querySelector("h3, h4");

            if (!titulo) return;


            const textoOriginal =
                titulo.textContent.trim();

            const chave =
                contatoItens[textoOriginal];


            if (chave && textos[chave]) {
                titulo.textContent =
                    textos[chave];
            }

        });


        /* =================================================
           BOTÃO DE IDIOMA ATIVO
        ================================================= */

        botoesIdioma.forEach(botao => {

            botao.classList.toggle(
                "ativo",
                botao.dataset.lang === idioma
            );

        });


        /* =================================================
           SALVAR IDIOMA
        ================================================= */

        localStorage.setItem(
            "idiomaSelecionado",
            idioma
        );

    }


    /* =================================================
       CLIQUE NOS IDIOMAS
    ================================================= */

    botoesIdioma.forEach(botao => {

        botao.addEventListener("click", () => {

            aplicarIdioma(
                botao.dataset.lang
            );

        });

    });


    /* =================================================
       TEMA CLARO / ESCURO
       
       IMPORTANTE:
       O INÍCIO NÃO É ALTERADO.
       O TEMA CLARO É APLICADO APENAS
       ÀS SEÇÕES A PARTIR DE SOBRE MIM.
    ================================================= */

    function aplicarTema(tema) {

        if (tema === "claro") {

            document.body.classList.add("tema-claro");

            /*
             * Marca especificamente as áreas que
             * devem responder ao tema.
             */

            document.body.classList.add(
                "tema-claro-secoes"
            );


            if (botaoTema) {

                botaoTema.textContent = "☀";

                botaoTema.setAttribute(
                    "aria-label",
                    "Ativar tema escuro"
                );

            }

        } else {

            document.body.classList.remove(
                "tema-claro"
            );

            document.body.classList.remove(
                "tema-claro-secoes"
            );


            if (botaoTema) {

                botaoTema.textContent = "☾";

                botaoTema.setAttribute(
                    "aria-label",
                    "Ativar tema claro"
                );

            }

        }


        /* =================================================
           SALVAR TEMA
        ================================================= */

        localStorage.setItem(
            "temaSelecionado",
            tema
        );

    }


    /* =================================================
       CLIQUE NO TEMA
    ================================================= */

    if (botaoTema) {

        botaoTema.addEventListener("click", () => {

            const temaAtual =
                document.body.classList.contains(
                    "tema-claro"
                )
                    ? "claro"
                    : "escuro";


            const novoTema =
                temaAtual === "claro"
                    ? "escuro"
                    : "claro";


            aplicarTema(novoTema);

        });

    }


    /* =================================================
       RECUPERAR CONFIGURAÇÕES
    ================================================= */

    const idiomaSalvo =
        localStorage.getItem(
            "idiomaSelecionado"
        ) || "pt";


    const temaSalvo =
        localStorage.getItem(
            "temaSelecionado"
        ) || "escuro";


    aplicarIdioma(idiomaSalvo);

    aplicarTema(temaSalvo);

});