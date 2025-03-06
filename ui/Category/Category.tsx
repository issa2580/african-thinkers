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
    },
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

        {/* Affichage de la catégorie sélectionnée */}
        {activeCategory && (
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image de la catégorie */}
              <div className="relative h-80 lg:h-auto">
                {activeCategory.image && (
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                    width={600}
                    height={600}
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

              {/* Contenu de la catégorie */}
              <div className="p-8">
                <div className="prose prose-lg">
                  <p className="text-card-foreground mb-6">
                    {activeCategory.description}
                  </p>

                  <h4 className="text-xl font-bold text-accent mt-6 mb-3">
                    Figures emblématiques
                  </h4>
                  <ul className="mb-6">
                    {activeCategory.keyFigures.map((figure, index) => (
                      <li key={index} className="mb-2 text-card-foreground">
                        <span className="font-medium">{figure}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-bold text-accent mb-3">Impact</h4>
                  <p className="text-card-foreground mb-6">
                    {activeCategory.achievements}
                  </p>

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
