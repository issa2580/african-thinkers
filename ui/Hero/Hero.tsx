import Acha from "@/assets/acha.webp";
import Fred from "@/assets/fred.webp";
import Imana from "@/assets/imana.webp";
import Img1 from "@/assets/img1.jpg";
import Img2 from "@/assets/img2.jpeg";
import Img3 from "@/assets/img3.jpeg";
import Img4 from "@/assets/img4.webp";
import Img5 from "@/assets/img5.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Img1, Img2, Img3, Img4, Img5];

  const featuredThinkers = [
    {
      name: "Chimamanda Ngozi Adichie",
      title: "Écrivaine",
      country: "Nigeria",
      image: Imana,
    },
    {
      name: "Fred Swaniker",
      title: "Entrepreneur",
      country: "Ghana",
      image: Fred,
    },
    {
      name: "Acha Leke",
      title: "Consultant",
      country: "Cameroun",
      image: Acha,
    },
  ];

  // Actualités récentes
  const recentNews = [
    {
      title: "Lancement de l'incubateur panafricain pour les jeunes penseurs",
      date: "28 février 2025",
      source: "African Innovation Hub",
    },
    {
      title: "Publication du rapport sur l'état de la recherche en Afrique",
      date: "15 février 2025",
      source: "Conseil Africain de la Recherche",
    },
    {
      title: "Symposium sur les savoirs traditionnels et l'innovation",
      date: "3 février 2025",
      source: "Université de Dakar",
    },
  ];

  // Citations inspirantes
  const quotes = [
    "L'Afrique n'est pas seulement le berceau de l'humanité, mais aussi celui de la pensée moderne.",
    "Les penseurs africains façonnent un avenir fondé sur le savoir et l'innovation.",
    "Notre diversité culturelle est notre plus grande force collective.",
    "Nous construisons des ponts entre tradition et modernité pour un développement durable.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-24 mt-16 bg-background">
      {/* Titre principal centré */}
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4 animate-in fade-in duration-700">
            PENSEURS AFRICAINS
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            UN ESPACE NUMÉRIQUE PANAFRICAIN POUR LES ACTEURS DU CHANGEMENT
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row">
        {/* Partie gauche - Contenu principal */}
        <div className="lg:w-2/3 pr-0 lg:pr-10">
          {/* Carrousel d'images */}
          <div className="relative rounded-xl overflow-hidden h-80 md:h-96 shadow-2xl mb-10">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 ${
                  index === currentImage ? "block z-10" : "hidden"
                }`}
              >
                <Image
                  src={image}
                  alt={`African Thinkers slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  quality={100}
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
              <p className="text-white text-lg md:text-xl font-medium">
                {quotes[currentImage % quotes.length]}
              </p>
            </div>
          </div>

          {/* Carte des penseurs en vedette */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-accent mb-6">
              Penseurs en vedette
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredThinkers.map((thinker, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-72 overflow-hidden">
                    <Image
                      src={thinker.image || "/images/placeholder-profile.jpg"}
                      alt={thinker.name}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                      quality={90}
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-card-foreground">
                      {thinker.name}
                    </h4>
                    <p className="text-accent">{thinker.title}</p>
                    <p className="text-muted-foreground">{thinker.country}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section d'appel à l'action */}
          <div className="bg-accent rounded-xl p-8 text-accent-foreground flex flex-col items-center animate-in fade-in duration-500">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez la communauté des penseurs africains
            </h3>
            <p className="text-center mb-6">
              Connectez-vous avec d'autres innovateurs et leaders intellectuels
              à travers le continent
            </p>
            <button className="bg-background text-accent font-bold py-3 px-8 rounded-full hover:bg-secondary transition-colors">
              DÉCOUVRIR PLUS
            </button>
          </div>
        </div>

        {/* Partie droite - Sidebar */}
        <div className="lg:w-1/3 mt-12 lg:mt-0">
          <div className="bg-sidebar rounded-xl shadow-lg p-6 sticky top-32">
            {/* Section de recherche */}
            <div className="mb-8">
              <h4 className="font-bold text-sidebar-foreground text-xl mb-4">
                Rechercher
              </h4>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Chercher des penseurs africains..."
                  className="flex-1 p-3 rounded-l-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                />
                <button className="bg-sidebar-primary text-sidebar-primary-foreground p-3 rounded-r-lg hover:bg-sidebar-primary/90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Section Actualités récentes */}
            <div className="mb-8 pb-6 border-b border-sidebar-border">
              <h4 className="font-bold text-sidebar-primary text-xl mb-4">
                Actualités récentes
              </h4>
              <div className="space-y-4">
                {recentNews.map((news, index) => (
                  <div
                    key={index}
                    className="bg-sidebar-accent p-4 rounded-lg hover:bg-sidebar-accent/80 transition-colors cursor-pointer"
                  >
                    <h5 className="font-medium text-sidebar-accent-foreground mb-2">
                      {news.title}
                    </h5>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{news.date}</span>
                      <span>{news.source}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section Histoire de l'Afrique */}
            <div className="mb-8 pb-6 border-b border-sidebar-border">
              <h4 className="font-bold text-sidebar-primary text-xl mb-4">
                Histoire de l'Afrique
              </h4>
              <div className="space-y-3">
                <div className="bg-sidebar-accent p-4 rounded-lg">
                  <h5 className="font-medium text-sidebar-accent-foreground flex items-center mb-2">
                    <span className="mr-2 text-lg">🏛️</span>
                    Royaumes anciens
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    De puissants royaumes comme le Mali, le Ghana, le Songhaï et
                    l'Égypte antique ont créé des civilisations avancées avec
                    des systèmes politiques et économiques sophistiqués.
                  </p>
                </div>

                <div className="bg-sidebar-accent p-4 rounded-lg">
                  <h5 className="font-medium text-sidebar-accent-foreground flex items-center mb-2">
                    <span className="mr-2 text-lg">📚</span>
                    Centres de savoir
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Tombouctou abritait l'une des plus anciennes universités du
                    monde. Des milliers de manuscrits africains témoignent de
                    l'érudition dans les mathématiques, l'astronomie et la
                    médecine.
                  </p>
                </div>

                <div className="bg-sidebar-accent p-4 rounded-lg">
                  <h5 className="font-medium text-sidebar-accent-foreground flex items-center mb-2">
                    <span className="mr-2 text-lg">🧠</span>
                    Philosophies africaines
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    L'Ubuntu, le concept de "Je suis parce que nous sommes",
                    reflète la profondeur des philosophies africaines centrées
                    sur la communauté et l'interconnexion.
                  </p>
                </div>
              </div>
            </div>

            {/* Section "Le saviez-vous" */}
            <div className="bg-accent/20 p-4 rounded-lg">
              <h4 className="font-bold text-accent mb-2 flex items-center">
                <span className="mr-2">💡</span> Le saviez-vous ?
              </h4>
              <p className="text-sidebar-foreground text-sm">
                L'Afrique compte plus de 2000 langues différentes, représentant
                près d'un tiers des langues parlées dans le monde. Cette
                diversité linguistique est un véritable trésor pour la pensée et
                la philosophie du continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
