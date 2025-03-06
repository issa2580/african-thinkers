import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Importer des images placeholder (à remplacer par vos vraies images)
import ExampleImage1 from "@/assets/img1.jpg";
import ExampleImage2 from "@/assets/img2.jpeg";
import ExampleImage3 from "@/assets/img3.jpeg";
import ExampleImage4 from "@/assets/img4.webp";

const Discovery = () => {
  // État pour suivre l'onglet actif
  const [activeTab, setActiveTab] = useState("tendances");

  // Données pour les différentes sections
  const discoverySections = {
    tendances: {
      title: "Tendances intellectuelles",
      description:
        "Explorez les mouvements de pensée qui façonnent actuellement le paysage intellectuel africain.",
      items: [
        {
          id: 1,
          title: "Afrofuturisme et identité numérique",
          category: "PHILOSOPHIE",
          image: ExampleImage1,
          excerpt:
            "Comment les créateurs africains réinventent l'avenir à travers le prisme de technologies émergentes et d'héritages culturels.",
          author: "Nnedi Okorafor",
          date: "10 février 2025",
        },
        {
          id: 2,
          title: "Économie circulaire et savoirs traditionnels",
          category: "ÉCONOMIE",
          image: ExampleImage2,
          excerpt:
            "Le retour aux pratiques durables ancestrales comme solution aux défis environnementaux contemporains.",
          author: "Hindou Oumarou Ibrahim",
          date: "28 janvier 2025",
        },
        {
          id: 3,
          title: "Décolonisation des connaissances scientifiques",
          category: "SCIENCES",
          image: ExampleImage3,
          excerpt:
            "Vers une approche africaine des méthodologies de recherche et de transmission du savoir scientifique.",
          author: "Felwine Sarr",
          date: "15 janvier 2025",
        },
      ],
    },
    evenements: {
      title: "Événements à venir",
      description:
        "Restez informé des conférences, forums et festivals qui célèbrent la pensée africaine.",
      items: [
        {
          id: 1,
          title: "Forum Panafricain sur l'Innovation Sociale",
          category: "CONFÉRENCE",
          image: ExampleImage2,
          excerpt:
            "Trois jours de discussions sur les solutions innovantes aux défis sociaux du continent.",
          location: "Kigali, Rwanda",
          date: "15-18 avril 2025",
        },
        {
          id: 2,
          title: "Festival des Savoirs Traditionnels",
          category: "FESTIVAL",
          image: ExampleImage3,
          excerpt:
            "Célébration des connaissances ancestrales et leur pertinence dans le monde moderne.",
          location: "Ouagadougou, Burkina Faso",
          date: "5-12 mai 2025",
        },
        {
          id: 3,
          title: "Symposium sur l'Intelligence Artificielle en Afrique",
          category: "SYMPOSIUM",
          image: ExampleImage4,
          excerpt:
            "Exploration des implications éthiques et pratiques de l'IA pour les sociétés africaines.",
          location: "Le Caire, Égypte",
          date: "22-24 mars 2025",
        },
      ],
    },
    publications: {
      title: "Publications récentes",
      description:
        "Découvrez les derniers livres, articles et recherches des penseurs africains contemporains.",
      items: [
        {
          id: 1,
          title: "Réimaginer les Futurs Africains",
          category: "LIVRE",
          image: ExampleImage1,
          excerpt:
            "Une analyse profonde des multiples trajectoires possibles pour le développement du continent.",
          author: "Achille Mbembe",
          publisher: "Éditions du Baobab",
          year: "2025",
        },
        {
          id: 2,
          title: "La Renaissance des Langues Africaines à l'Ère Numérique",
          category: "RECHERCHE",
          image: ExampleImage4,
          excerpt:
            "Comment les technologies modernes contribuent à la préservation et à la revitalisation des langues africaines.",
          author: "Ngũgĩ wa Thiong'o",
          publisher: "Journal Africain des Sciences Humaines",
          year: "2025",
        },
        {
          id: 3,
          title: "Écosystèmes d'Innovation en Afrique : Étude de Cas",
          category: "RAPPORT",
          image: ExampleImage3,
          excerpt:
            "Cartographie des hubs d'innovation émergents et analyse de leur impact sur les économies locales.",
          author: "Nanjala Nyabola",
          publisher: "Centre Africain de Politique Économique",
          year: "2025",
        },
      ],
    },
    collaborations: {
      title: "Collaborations intellectuelles",
      description:
        "Explorez les projets qui connectent les penseurs africains à travers les disciplines et les frontières.",
      items: [
        {
          id: 1,
          title: "Initiative Afrique-Diaspora pour les Savoirs Partagés",
          category: "PROJET",
          image: ExampleImage2,
          excerpt:
            "Un pont intellectuel entre les chercheurs africains et ceux de la diaspora pour faciliter l'échange de connaissances.",
          partners: "Universités de Lagos, Howard, et Cape Town",
          status: "En cours",
        },
        {
          id: 2,
          title: "Réseau Panafricain des Penseurs Climatiques",
          category: "RÉSEAU",
          image: ExampleImage3,
          excerpt:
            "Coalition de scientifiques, activistes et philosophes dédiés à l'élaboration de réponses africaines au changement climatique.",
          partners: "15 pays africains représentés",
          status: "Actif",
        },
        {
          id: 3,
          title: "Archives Numériques des Philosophies Africaines",
          category: "ARCHIVE",
          image: ExampleImage1,
          excerpt:
            "Projet de préservation et numérisation des textes philosophiques du continent, des manuscrits anciens aux publications contemporaines.",
          partners: "Bibliothèques nationales de 7 pays africains",
          status: "Phase 2",
        },
      ],
    },
  };

  // Déterminer la section active
  const activeSection = discoverySections[activeTab];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-accent mb-3">À Découvrir</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Plongez dans la richesse et la diversité des contributions
            intellectuelles africaines à travers nos sélections thématiques.
          </p>
        </div>

        {/* Navigation par onglets */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {Object.keys(discoverySections).map((sectionKey) => (
            <button
              key={sectionKey}
              onClick={() => setActiveTab(sectionKey)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === sectionKey
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-background text-foreground hover:bg-background/80"
              }`}
              aria-selected={activeTab === sectionKey}
            >
              {sectionKey === "tendances" && "Tendances"}
              {sectionKey === "evenements" && "Événements"}
              {sectionKey === "publications" && "Publications"}
              {sectionKey === "collaborations" && "Collaborations"}
            </button>
          ))}
        </div>

        {/* Affichage de la section active */}
        {activeSection && (
          <div className="animate-in fade-in duration-500">
            <div className="max-w-5xl mx-auto mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                {activeSection.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {activeSection.description}
              </p>
            </div>

            {/* Grille de cartes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {activeSection.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-accent/20 z-10"></div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      width={400}
                      height={225}
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-accent/90 text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-xl text-card-foreground mb-3 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* Affichage conditionnel en fonction du type d'élément */}
                    <div className="flex justify-between items-center text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                      {item.author && (
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          {item.author}
                        </span>
                      )}

                      {item.location && (
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {item.location}
                        </span>
                      )}

                      {item.partners && (
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          {item.status}
                        </span>
                      )}

                      {item.date && (
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {item.date}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      href={`/decouvrir/${activeTab}/${item.id}`}
                      className="inline-flex items-center text-accent hover:text-accent/90 font-medium transition-colors"
                    >
                      Lire plus
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
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
              ))}
            </div>

            {/* Bouton "voir plus" */}
            <div className="text-center mt-16">
              <Link
                href={`/decouvrir/${activeTab}`}
                className="inline-flex items-center bg-background text-foreground border border-border px-8 py-3 rounded-lg font-medium hover:bg-muted/20 transition-colors"
              >
                Voir plus de {activeTab}
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Discovery;
