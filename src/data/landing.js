// #region IMPORTS

// #region HEADER
import logoImage from "../assets/images/logo.png";
import backgroundNav from "../assets/icons/BackgroundNavHeader.tsx";

// #endregion HEADER

// #region HERO
// import arrowRightIcon from "../assets/icons/ArrowRightIcon.tsx";
import backgroundImage from "../assets/images/background-hero.jpg";

// #endregion HERO

// #region TECH LOOP
// import gsapIcon from "../assets/icons/GsapIcon.tsx";
// import figmaIcon from "../assets/icons/figmaIcon.tsx";
// import javaScriptIcon from "../assets/icons/javaScriptIcon.tsx";
// import htmlIcon from "../assets/icons/HTMLIcon.jsx";
// import cssIcon from "../assets/icons/CSSIcon.tsx";
// import tailwindIcon from "../assets/icons/tailwindIcon.tsx";
// import reactIcon from "../assets/icons/ReactIcon.tsx";
// import chartIcon from "../assets/icons/chartIcon.tsx";
// import nodeIcon from "../assets/icons/NodeIcon.tsx";
// import githubIcon from "../assets/icons/GitHubIcon.tsx";
// import gitIcon from "../assets/icons/GitIcon.tsx"; 
// import mySqlIcon from "../assets/icons/MySQLIcon.tsx";
// import graphGlIcon from "../assets/icons/GraphGlIcon.tsx";
// import vsCodeIcon from "../assets/icons/VSCodeIcon.tsx";

// #endregion TECH LOOP

// #region SERVICES
import landingPageIcon from "../assets/icons/LandingPageIcon.tsx";
import webApplicationIcon from "../assets/icons/WebApplicationIcon.tsx";
import ecommerceIcon from "../assets/icons/EcommerceIcon.tsx";

// #endregion SERVICES

// #region REASONS
import professionalImage from "../assets/images/professional.png";
import reliableImage from "../assets/images/reliable.jpg";
import authorityImage from "../assets/images/authority.png";

// #endregion REASONS

// #region PROJECTS
import projectImage from "../assets/images/project-1.png";

// #endregion PROJECTS
    
// #region FOOTER
import emailIcon from "../assets/icons/EmailIcon.tsx";
import phoneIcon from "../assets/icons/PhoneIcon.tsx";
import facebookIcon from "../assets/icons/FacebookIcon.tsx";
import instagramIcon from "../assets/icons/InstagramIcon.tsx";
import linkedinIcon from "../assets/icons/LinkedinIcon.tsx";
import githubIcon from "../assets/icons/GitHubIcon.tsx";

// #endregion FOOTER

// #endregion IMPORTS

export const landing = {

    header: {
        logo: logoImage,
        nav: [
            { label: "Serviços", href: "#services" },
            { label: "Propósito", href: "#purpose" },
            { label: "Projetos", href: "#projects" },
            { label: "Contato", href: "#contact" },
        ],
        cta: "Fale conosco",
        backgroundShape: backgroundNav,
    },

    hero: {
        title: "Eleve sua \n presença digital \n com a ",
        companyName: "NeoStack",
        description: "Desenvolvemos sites modernos, rápidos e profissionais que elevam a imagem da sua marca e aumentam seus resultados online.",
        cta1: "Solicitar orçamento",
        cta2: "Saiba mais",
        background: backgroundImage,
    },

    services: {
        wrapper: [
            {
                aside: "Comece com uma",
                card: {
                    label: "LandingPage",
                    icon: landingPageIcon,
                    description: "É criada para ser direta: ideal para apresentar uma oferta específica, divulgar um serviço ou lançar algo novo, focando no que realmente importa e facilitando a ação do usuário.",
                    subtitle: "Uma landing page bem pensada ajuda você a:",
                    purposes: [
                        "Atrair o público certo",
                        "Gerar confiança logo no primeiro contato",
                        "Apresentar sua oferta com clareza",
                    ],
                }
            },

            {
                aside: "Evolua para uma",
                card: {
                    label: "AplicaçãoWeb",
                    icon: webApplicationIcon,
                    description: "É desenvolvida para atender às necessidades específicas do seu negócio. Ela funciona direto no navegador e ajuda a organizar processos, simplificar tarefas e ganhar mais controle no dia a dia.",
                    subtitle: "Com uma aplicação web você pode:",
                    purposes: [
                        "Automatizar tarefas repetitivas",
                        "Facilitar o trabalho da equipe",
                        "Acompanhar o crescimento do negócio",
                    ],
                }
            },

            {
                aside: "Domine com um",
                card: {
                    label: "E-commerce",
                    icon: ecommerceIcon,
                    description: "Um e-commerce leva seus produtos para o online de forma prática e acessível. Ele organiza sua vitrine, facilita a compra e cria uma experiência simples e segura para quem compra.",
                    subtitle: "Uma loja virtual bem construída permite:",
                    purposes: [
                        "Apresentar produtos de forma clara",
                        "Tornar a compra simples e rápida",
                        "Expandir suas vendas no digital",
                    ],
                }
            },
        ],

        storyLine: [
            "Seja qual for...",
            "Não é só sobre ter um site.",
            "É sobre como sua empresa é percebida.",
        ],
    },

    reasons: {
        title: "Com a NeoStack, sua presença digital transmite:",
        cards: [
            {
                title: "Profissionalismo",
                description: "Um site bem desenvolvido transmite mais credibilidade, reforça sua imagem profissional e melhora a confiança dos clientes.",
                image: professionalImage,
            },

            {
                title: "Confiança",
                description: "Uma experiência consistente gera segurança. Design, organização e funcionamento trabalham juntos para mostrar que sua empresa é confiável.",
                image: reliableImage,
            },

            {
                title: "Autoridade",
                description: "Quando a mensagem é clara, a decisão fica mais fácil. O visitante entende rapidamente quem você é, o que faz e como entrar em contato.",
                image: authorityImage,
            },
        ],
        storyLine: [
            "Tecnologia não é detalhe",
            "É o que separa empresas comuns",
            "de marcas que se ",

            {
                emphasis: "destacam",
            },
        ],
    },

    projects: {
        title: "Projetos",
        cards: [
            {
                title: "Biblioteca Coronel",
                description: "Biblioteca Coronel é um sistema de gerenciamento bibliotecário desenvolvido para a E. E. Cel. Américo Vespúcio de Carvalho. Algumas das principais ferramentas do projeto são: mutenção do acervo escolar, ranking de leitura, notificações ao expirar o prazo de devolução, entre outras.",
                image: projectImage,
            }
        ]
    },

    footer: {
        title: "Pronto para tirar sua ideia do papel?",
        subtitle: "Solicite um orçamento e descubra o melhor caminho para o seu projeto. É gratuito!",

        contacts: {
            title: "Contatos",
            email: {
                label: "contato@neostack.com.br",
                icon: emailIcon,
            },
            phone: {
                label: "(33) 9 8818-2635",
                icon: phoneIcon,
            }
        },

        socialMedias: {
            title: "Nossas redes",
            background: "",
            icons: [
                facebookIcon,
                instagramIcon,
                githubIcon,
                linkedinIcon,
            ],
        },

        companyName: "NeoStack",
        year: "2026",
    },
}