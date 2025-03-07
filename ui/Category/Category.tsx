import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Imana from "@/assets/imana.webp";

const Category = () => {
  const [activeTab, setActiveTab] = useState("artists");
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);

  const categories = [
    {
      id: "artists",
      name: "ARTISTES AFRICAINS",
      icon: "🎨",
      description:
        "Les artistes africains expriment l'héritage culturel et l'identité du continent à travers diverses formes d'art, du traditionnel au contemporain. Ils utilisent leur créativité pour aborder des problématiques sociales, politiques et environnementales, tout en préservant et réinventant les traditions artistiques africaines.",
      image: Imana,
      keyFigures: ["El Anatsui", "Yinka Shonibare", "Julie Mehretu"],
      achievements:
        "Révolutionnent l'art contemporain mondial avec des perspectives uniques enracinées dans les traditions africaines.",
      examples: [
        "Installations monumentales faites de matériaux recyclés",
        "Œuvres qui interrogent l'héritage colonial et l'identité contemporaine",
        "Peintures abstraites qui fusionnent les traditions africaines et occidentales",
      ],
      impact: [
        "Reconnaissance internationale dans les plus grands musées du monde",
        "Influence grandissante sur les mouvements artistiques contemporains",
        "Valorisation des matériaux et techniques traditionnels africains",
      ],
      challenges: [
        "Accès limité aux infrastructures et financement pour les artistes émergents",
        "Besoin de plus de plateformes de diffusion locales",
        "Protection de la propriété intellectuelle et lutte contre l'appropriation culturelle",
      ],
    },
    {
      id: "economists",
      name: "ÉCONOMISTES AFRICAINS",
      icon: "📊",
      description:
        "Les économistes africains développent des modèles et stratégies adaptés aux réalités du continent. Leurs travaux sont essentiels pour élaborer des politiques économiques qui favorisent un développement inclusif et durable, tenant compte des spécificités des marchés africains et des enjeux de réduction de la pauvreté.",
      image: Imana,
      keyFigures: ["Ngozi Okonjo-Iweala", "Celestin Monga", "Dambisa Moyo"],
      achievements:
        "Élaborent des stratégies économiques innovantes adaptées aux défis spécifiques du continent africain.",
      examples: [
        "Théories économiques intégrant les structures sociales africaines",
        "Modèles de croissance adaptés aux économies à forte informalité",
        "Recherches sur le rôle des technologies mobiles dans l'inclusion financière",
      ],
      impact: [
        "Influence sur les politiques de développement des institutions internationales",
        "Réorientation des stratégies économiques vers des solutions endogènes",
        "Prise en compte croissante des spécificités africaines dans les modèles économiques globaux",
      ],
      challenges: [
        "Dépendance persistante aux cadres théoriques occidentaux",
        "Manque de données fiables pour la recherche économique",
        "Difficultés d'implémentation des politiques économiques innovantes",
      ],
    },
    {
      id: "engineers",
      name: "INGÉNIEURS AFRICAINS",
      icon: "⚙️",
      description:
        "Les ingénieurs africains conçoivent des solutions techniques innovantes pour répondre aux besoins spécifiques du continent. Ils créent des infrastructures résilientes, développent des technologies adaptées au contexte local et participent à la transformation digitale de l'Afrique.",
      image: Imana,
      keyFigures: ["Kamau Gachigi", "Arlene Isaacs-Lowe", "Arthur Zang"],
      achievements:
        "Développent des technologies frugales et durables qui répondent aux défis locaux avec des ressources limitées.",
      examples: [
        "Cardiopad : dispositif médical portable pour diagnostics cardiaques en zones rurales",
        "Systèmes d'irrigation alimentés à l'énergie solaire pour petits agriculteurs",
        "Applications mobiles adaptées aux réalités des marchés africains",
      ],
      impact: [
        "Amélioration de l'accès aux services essentiels dans les zones mal desservies",
        "Création de solutions technologiques spécifiquement adaptées aux contextes africains",
        "Formation d'une nouvelle génération d'innovateurs techniques",
      ],
      challenges: [
        "Accès limité aux infrastructures et aux financements pour la R&D",
        "Besoin de renforcer les écosystèmes d'innovation locaux",
        "Fuite des cerveaux vers les marchés internationaux mieux rémunérés",
      ],
    },
    {
      id: "entrepreneurs",
      name: "ENTREPRENEURS AFRICAINS",
      icon: "💼",
      description:
        "Les entrepreneurs africains transforment les défis en opportunités commerciales. Ils créent des entreprises innovantes qui génèrent de l'emploi, stimulent l'économie locale et proposent des solutions adaptées aux besoins des communautés africaines.",
      image: Imana,
      keyFigures: ["Aliko Dangote", "Bethlehem Tilahun Alemu", "Fred Swaniker"],
      achievements:
        "Bâtissent des entreprises à fort impact social qui transforment les écosystèmes économiques africains.",
      examples: [
        "Plateformes de commerce électronique adaptées aux marchés africains",
        "Entreprises de transformation agricole qui valorisent les produits locaux",
        "Start-ups technologiques résolvant des problèmes spécifiques au continent",
      ],
      impact: [
        "Création d'emplois formels et développement économique local",
        "Intégration de millions d'Africains dans l'économie formelle",
        "Attraction d'investissements étrangers vers des secteurs innovants",
      ],
      challenges: [
        "Difficultés d'accès au financement pour les PME",
        "Obstacles réglementaires et administratifs",
        "Infrastructures insuffisantes (énergie, connectivité, transport)",
      ],
    },
    {
      id: "journalists",
      name: "JOURNALISTES AFRICAINS",
      icon: "📰",
      description:
        "Les journalistes africains jouent un rôle crucial dans la documentation et l'analyse des réalités sociales, politiques et économiques du continent. Ils donnent une voix aux communautés marginalisées et contribuent à la promotion de la transparence et de la bonne gouvernance.",
      image: Imana,
      keyFigures: ["Anas Aremeyaw Anas", "Hopewell Chin'ono", "Femi Oke"],
      achievements:
        "Défendent la liberté de la presse et révèlent des vérités essentielles pour le développement démocratique du continent.",
      examples: [
        "Reportages d'investigation sur la corruption et les abus de pouvoir",
        "Couverture médiatique des zones de conflit oubliées",
        "Podcasts et médias numériques offrant des perspectives africaines authentiques",
      ],
      impact: [
        "Renforcement de la transparence et de la responsabilité des institutions",
        "Sensibilisation du public aux enjeux sociaux et politiques cruciaux",
        "Création d'espaces de dialogue et de débat démocratique",
      ],
      challenges: [
        "Menaces à la liberté de la presse dans plusieurs pays",
        "Risques personnels pour les journalistes d'investigation",
        "Modèles économiques fragiles pour les médias indépendants",
      ],
    },
    {
      id: "leaders",
      name: "LEADERS AFRICAINS",
      icon: "👑",
      description:
        "Les leaders africains guident des initiatives de transformation sociale, politique et économique. Ils inspirent le changement positif, mobilisent les ressources et les talents pour relever les défis du continent et construire un avenir prospère pour les générations futures.",
      image: Imana,
      keyFigures: ["Paul Kagame", "Ellen Johnson Sirleaf", "Wangari Maathai"],
      achievements:
        "Impulsent des réformes audacieuses et établissent des visions pour le développement durable du continent.",
      examples: [
        "Programmes de reforestation et de conservation environnementale",
        "Réformes de gouvernance et lutte contre la corruption",
        "Initiatives d'autonomisation des femmes et des jeunes",
      ],
      impact: [
        "Transformation de sociétés post-conflit en modèles de développement",
        "Promotion de modèles africains de leadership et de gouvernance",
        "Influence sur les agendas internationaux concernant l'Afrique",
      ],
      challenges: [
        "Résistance aux réformes structurelles",
        "Défis liés à la consolidation démocratique",
        "Équilibre entre traditions et modernité dans le leadership",
      ],
    },
    // Les autres catégories suivent le même modèle
    // J'ai simplifié pour la lisibilité, mais vous pouvez ajouter des données similaires
    // pour les catégories restantes
    {
      id: "philosophers",
      name: "PHILOSOPHES AFRICAINS",
      icon: "🧠",
      description:
        "Les philosophes africains enrichissent la pensée mondiale avec des perspectives uniques sur l'éthique, l'identité, la justice et le bien commun. Ils réinterprètent les traditions philosophiques africaines et les mettent en dialogue avec les courants philosophiques globaux.",
      image: Imana,
      keyFigures: [
        "Souleymane Bachir Diagne",
        "Achille Mbembe",
        "Paulin Hountondji",
      ],
      achievements:
        "Développent des systèmes de pensée qui intègrent sagesse traditionnelle et défis contemporains.",
      examples: [
        "Théories sur la décolonisation des savoirs",
        "Réflexions sur l'Ubuntu et l'éthique communautaire africaine",
        "Analyses critiques du postcolonialisme",
      ],
      impact: [],
      challenges: [],
    },
    {
      id: "writers",
      name: "ÉCRIVAINS AFRICAINS",
      icon: "✍️",
      description:
        "Les écrivains africains capturent la richesse et la complexité des expériences africaines à travers leurs œuvres. Ils explorent les thèmes de l'identité, de l'histoire, de la colonisation, de la tradition et de la modernité, contribuant ainsi à la littérature mondiale.",
      image: Imana,
      keyFigures: [
        "Chimamanda Ngozi Adichie",
        "Ngugi wa Thiong'o",
        "Léopold Sédar Senghor",
      ],
      achievements:
        "Façonnent les narratifs littéraires mondiaux en apportant des perspectives africaines riches et nuancées.",
      examples: [],
      impact: [],
      challenges: [],
    },
    {
      id: "analysts",
      name: "ANALYSTES AFRICAINS",
      icon: "🔍",
      description:
        "Les analystes africains interprètent les tendances sociales, politiques et économiques qui façonnent le continent. Leurs analyses informent les décisions politiques, les stratégies d'investissement et la compréhension des dynamiques complexes qui caractérisent l'Afrique contemporaine.",
      image: Imana,
      keyFigures: ["Jakkie Cilliers", "Robtel Neajai Pailey", "Ibrahim Mayaki"],
      achievements:
        "Produisent des analyses approfondies qui éclairent la prise de décision et les politiques publiques.",
      examples: [],
      impact: [],
      challenges: [],
    },
    {
      id: "bloggers",
      name: "BLOGUEURS AFRICAINS",
      icon: "💻",
      description:
        "Les blogueurs africains utilisent les plateformes numériques pour partager des perspectives authentiques sur la vie quotidienne, la culture, la politique et l'innovation en Afrique. Ils construisent des communautés en ligne et contribuent à changer les récits sur le continent.",
      image: Imana,
      keyFigures: ["Afua Hirsch", "Edith Brou", "TMS Ruge"],
      achievements:
        "Créent des espaces numériques dynamiques qui amplifient les voix africaines sur la scène mondiale.",
      examples: [],
      impact: [],
      challenges: [],
    },
    {
      id: "scholars",
      name: "CHERCHEURS AFRICAINS",
      icon: "🎓",
      description:
        "Les chercheurs africains produisent des connaissances scientifiques vitales pour relever les défis du continent. Leurs travaux dans des domaines aussi variés que la santé, l'agriculture, l'environnement et les technologies contribuent au développement durable et à l'innovation en Afrique.",
      image: Imana,
      keyFigures: ["Tebello Nyokong", "Calestous Juma", "Catherine Nakalembe"],
      achievements:
        "Conduisent des recherches pionnières qui transforment des secteurs clés comme la santé, l'agriculture et les énergies renouvelables.",
      examples: [],
      impact: [],
      challenges: [],
    },
  ];

  // Diviser les catégories en deux rangées
  const firstRowCategories = categories.slice(0, 6);
  const secondRowCategories = categories.slice(6);

  // Effet de parallaxe au défilement
  useEffect(() => {
    const handleScroll = () => {
      if (firstRowRef.current && secondRowRef.current) {
        const scrollPosition = window.scrollY;
        // Déplacer la première rangée vers la droite et la seconde vers la gauche
        firstRowRef.current.style.transform = `translateX(-${
          scrollPosition * 0.1
        }px)`;
        secondRowRef.current.style.transform = `translateX(${
          scrollPosition * 0.1
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Trouver la catégorie active
  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-3">
            Explorez Nos Catégories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez la diversité des penseurs africains qui façonnent l'avenir
            du continent à travers différentes disciplines et domaines
            d'expertise.
          </p>
        </div>

        {/* Navigation par icônes pour sélectionner les catégories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`p-4 rounded-xl flex flex-col items-center transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-accent text-accent-foreground scale-110 shadow-lg"
                  : "bg-card text-card-foreground hover:bg-card/80"
              }`}
              aria-selected={activeTab === category.id}
            >
              <span className="text-2xl mb-2">{category.icon}</span>
              <span className="text-xs font-semibold">
                {category.name.split(" ")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Affichage de la catégorie sélectionnée - Version améliorée */}
        {activeCategory && (
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image de la catégorie - redimensionnée pour être moins dominante */}
              <div className="relative lg:col-span-5">
                {activeCategory.image && (
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                    width={600}
                    height={600}
                    style={{ maxHeight: "600px" }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-black/70 flex items-end lg:items-center p-8">
                  <div>
                    <span className="text-4xl mb-3 block">
                      {activeCategory.icon}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {activeCategory.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Contenu de la catégorie - Plus d'espace et contenu enrichi */}
              <div
                className="p-8 lg:col-span-7 overflow-y-auto"
                style={{ maxHeight: "600px" }}
              >
                <div className="prose prose-lg">
                  <p className="text-card-foreground mb-6">
                    {activeCategory.description}
                  </p>

                  <h4 className="text-xl font-bold text-accent mt-6 mb-3">
                    Figures emblématiques
                  </h4>
                  <ul className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeCategory.keyFigures.map((figure, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                        <span className="font-medium text-card-foreground">
                          {figure}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-accent mb-3">Impact</h4>
                  <p className="text-card-foreground mb-6">
                    {activeCategory.achievements}
                  </p>

                  {/* Nouvelle section: Exemples concrets */}
                  {activeCategory.examples &&
                    activeCategory.examples.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-accent mb-3">
                          Exemples concrets
                        </h4>
                        <ul className="mb-6 space-y-2">
                          {activeCategory.examples.map((example, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span className="text-card-foreground">
                                {example}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  {/* Nouvelle section: Impact détaillé */}
                  {activeCategory.impact &&
                    activeCategory.impact.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-accent mb-3">
                          Contributions majeures
                        </h4>
                        <ul className="mb-6 space-y-2">
                          {activeCategory.impact.map((impact, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span className="text-card-foreground">
                                {impact}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  {/* Nouvelle section: Défis */}
                  {activeCategory.challenges &&
                    activeCategory.challenges.length > 0 && (
                      <>
                        <h4 className="text-xl font-bold text-accent mb-3">
                          Défis actuels
                        </h4>
                        <ul className="mb-6 space-y-2">
                          {activeCategory.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span className="text-card-foreground">
                                {challenge}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  <div className="mt-8">
                    <Link
                      href={`/categories/${activeCategory.id}`}
                      className="inline-flex items-center bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                    >
                      Explorer cette catégorie
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Category;
