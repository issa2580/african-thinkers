import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Images placeholder (à remplacer par vos vraies images)
import NewsImage1 from "@/assets/img1.jpg";
import NewsImage2 from "@/assets/img2.jpeg";
import NewsImage3 from "@/assets/img3.jpeg";
import NewsImage4 from "@/assets/img4.webp";
import NewsImage5 from "@/assets/img5.jpg";

const News = () => {
  // État pour suivre l'article en surbrillance
  const [highlightedNews, setHighlightedNews] = useState(1);

  // Données des actualités
  const newsData = [
    {
      id: 1,
      title:
        "Le forum panafricain sur l'innovation se tiendra à Dakar en mai 2025",
      excerpt:
        "Cet événement majeur réunira des penseurs, entrepreneurs et décideurs de tout le continent pour discuter des futures innovations africaines.",
      category: "ÉVÉNEMENT",
      date: "3 mars 2025",
      author: "Aminata Diallo",
      authorRole: "Journaliste culturelle",
      image: NewsImage1,
      readTime: "4 min",
    },
    {
      id: 2,
      title:
        "Une nouvelle étude révèle l'impact des philosophes africains sur la pensée mondiale",
      excerpt:
        "La recherche menée par l'Université de Cape Town montre comment les philosophes africains contemporains transforment les paradigmes intellectuels globaux.",
      category: "RECHERCHE",
      date: "28 février 2025",
      author: "Kofi Mensah",
      authorRole: "Correspondant académique",
      image: NewsImage2,
      readTime: "6 min",
    },
    {
      id: 3,
      title: "Prix d'excellence pour trois jeunes penseurs africains innovants",
      excerpt:
        "La fondation African Minds a décerné son prix annuel à trois jeunes intellectuels pour leurs contributions exceptionnelles dans leurs domaines respectifs.",
      category: "RÉCOMPENSES",
      date: "25 février 2025",
      author: "Fatou Ndiaye",
      authorRole: "Rédactrice en chef",
      image: NewsImage3,
      readTime: "3 min",
    },
    {
      id: 4,
      title:
        "Lancement d'une bibliothèque numérique de manuscrits africains anciens",
      excerpt:
        "Un nouveau projet numérique permet désormais d'accéder à des milliers de manuscrits historiques provenant de diverses régions d'Afrique.",
      category: "PATRIMOINE",
      date: "20 février 2025",
      author: "Ahmed Touré",
      authorRole: "Spécialiste du patrimoine",
      image: NewsImage4,
      readTime: "5 min",
    },
    {
      id: 5,
      title: "Débat sur l'avenir des langues africaines à l'ère du numérique",
      excerpt:
        "Des linguistes et technologues africains se sont réunis pour discuter des stratégies de préservation et d'adaptation des langues africaines aux nouvelles technologies.",
      category: "CULTURE",
      date: "15 février 2025",
      author: "Ngozi Okafor",
      authorRole: "Analyste culturel",
      image: NewsImage5,
      readTime: "7 min",
    },
  ];

  // Article principal (le plus récent)
  const featuredNews = newsData[0];

  // Articles secondaires
  const secondaryNews = newsData.slice(1, 3);

  // Articles tertiaires
  const tertiaryNews = newsData.slice(3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-accent mb-3">À La Une</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Restez informé des dernières actualités du monde intellectuel
              africain.
            </p>
          </div>
          <Link
            href="/actualites"
            className="mt-6 md:mt-0 inline-flex items-center bg-background border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted/10 transition-colors"
          >
            Toutes les actualités
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article principal */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={500}
                style={{ height: "500px" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {featuredNews.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-white/90 mb-6 line-clamp-2">
                  {featuredNews.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold mr-3">
                      {featuredNews.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium">
                        {featuredNews.author}
                      </p>
                      <p className="text-white/70 text-sm">
                        {featuredNews.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-white/70 space-x-4 text-sm">
                    <span>{featuredNews.date}</span>
                    <span>•</span>
                    <span>{featuredNews.readTime} de lecture</span>
                  </div>
                </div>
                <Link
                  href={`/actualites/${featuredNews.id}`}
                  className="absolute inset-0 z-30"
                  aria-label={`Lire l'article: ${featuredNews.title}`}
                ></Link>
              </div>
            </div>
          </div>

          {/* Articles secondaires (colonne de droite) */}
          <div className="flex flex-col space-y-8">
            {secondaryNews.map((news) => (
              <div
                key={news.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                  <span className="absolute top-4 left-4 bg-accent/90 text-accent-foreground text-xs px-3 py-1 rounded-full font-semibold">
                    {news.category}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl text-card-foreground mb-3 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {news.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{news.date}</span>
                    <span>{news.readTime} de lecture</span>
                  </div>
                </div>
                <Link
                  href={`/actualites/${news.id}`}
                  className="absolute inset-0"
                  aria-label={`Lire l'article: ${news.title}`}
                ></Link>
              </div>
            ))}
          </div>
        </div>

        {/* Articles tertiaires (ligne du bas) */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tertiaryNews.map((news) => (
              <div
                key={news.id}
                className={`flex gap-4 p-5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer ${
                  highlightedNews === news.id ? "bg-accent/5" : "bg-background"
                }`}
                onMouseEnter={() => setHighlightedNews(news.id)}
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-accent mb-1">
                    {news.category}
                  </span>
                  <h5 className="font-bold text-foreground mb-2 line-clamp-2">
                    {news.title}
                  </h5>
                  <div className="mt-auto flex justify-between items-center text-xs text-muted-foreground">
                    <span>{news.date}</span>
                    <span>{news.readTime}</span>
                  </div>
                  <Link
                    href={`/actualites/${news.id}`}
                    className="absolute inset-0"
                    aria-label={`Lire l'article: ${news.title}`}
                  ></Link>
                </div>
              </div>
            ))}

            {/* Carte "Plus d'actualités" */}
            <div className="flex gap-4 p-5 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer bg-background">
              <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-accent/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="font-bold text-foreground mb-1">
                  Plus d'actualités
                </h5>
                <p className="text-xs text-muted-foreground">
                  Découvrez toutes les dernières actualités
                </p>
                <Link
                  href="/actualites"
                  className="absolute inset-0"
                  aria-label="Voir plus d'actualités"
                ></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bannière newsletter */}
        <div className="mt-20 bg-accent/10 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Restez à jour avec notre newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
                Recevez une sélection hebdomadaire des meilleures actualités,
                événements et réflexions des penseurs africains.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 p-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                />
                <button className="bg-accent text-accent-foreground py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap">
                  S'inscrire
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                En vous inscrivant, vous acceptez notre politique de
                confidentialité. Nous respectons votre vie privée.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
