import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  // Utiliser IntersectionObserver pour déclencher l'animation au défilement
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Les statistiques à afficher
  const stats = [
    {
      value: 54,
      label: "PAYS AFRICAINS",
      description: "Une diversité de perspectives et de cultures",
      icon: "🌍",
    },
    {
      value: 3000,
      label: "LANGUES ET DIALECTES",
      description: "Un riche patrimoine linguistique",
      icon: "🗣️",
    },
    {
      value: 25,
      label: "PRIX NOBELS",
      description: "Reconnaissance internationale d'excellence",
      icon: "🏆",
    },
    {
      value: 720,
      label: "MILLIONS D'HABITANTS",
      description: "Le deuxième continent le plus peuplé",
      icon: "👥",
    },
  ];

  // Les faits marquants
  const highlights = [
    {
      title: "Plus jeune population du monde",
      description:
        "60% de la population africaine a moins de 25 ans, représentant un immense potentiel d'innovation et de créativité.",
      icon: "👩‍🎓",
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
    },
    {
      title: "Croissance technologique",
      description:
        "L'Afrique connaît la croissance la plus rapide au monde dans l'adoption des technologies mobiles et des solutions fintech.",
      icon: "📱",
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
    },
    {
      title: "Richesse culturelle",
      description:
        "Le continent abrite sept des sites du patrimoine mondial de l'UNESCO, témoignant d'une histoire intellectuelle millénaire.",
      icon: "🏛️",
      color: "bg-amber-500/10",
      textColor: "text-amber-500",
    },
  ];

  // État pour l'animation des chiffres
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  // Animation des chiffres quand la section est visible
  useEffect(() => {
    if (inView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000; // 2 secondes pour l'animation
        const steps = 20; // nombre d'étapes d'animation
        const stepValue = stat.value / steps;
        let currentStep = 0;

        return setInterval(() => {
          if (currentStep < steps) {
            setAnimatedValues((prev) => {
              const newValues = [...prev];
              newValues[index] = Math.round(stepValue * (currentStep + 1));
              return newValues;
            });
            currentStep++;
          } else {
            clearInterval(intervals[index]);
          }
        }, duration / steps);
      });

      return () => intervals.forEach((interval) => clearInterval(interval));
    }
  }, [inView, stats]);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-accent mb-3">
            La Puissance Intellectuelle Africaine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Des chiffres qui témoignent de l'influence et du potentiel des
            penseurs africains sur la scène mondiale.
          </p>
        </div>

        {/* Statistiques en chiffres */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl shadow-lg p-8 text-center transform transition-all duration-500 ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-accent/10 text-4xl">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-bold text-accent mb-3">
                {inView ? animatedValues[index].toLocaleString() : 0}
              </h3>
              <p className="font-semibold text-sm tracking-wider mb-2">
                {stat.label}
              </p>
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Citation inspirante */}
        <div className="max-w-4xl mx-auto mb-20">
          <blockquote className="relative p-10 bg-accent/5 rounded-2xl border-l-4 border-accent">
            <svg
              className="absolute top-3 left-3 text-accent/20 w-12 h-12"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl text-foreground italic mb-4 pl-6">
              L'Afrique n'est pas seulement le berceau de l'humanité, mais aussi
              celui de la pensée innovante qui façonnera l'avenir mondial.
            </p>
            <footer className="text-right text-muted-foreground">
              <span className="font-medium text-foreground">
                Ngũgĩ wa Thiong'o
              </span>
              , Écrivain et philosophe kenyan
            </footer>
          </blockquote>
        </div>

        {/* Faits marquants */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`${highlight.color} ${highlight.textColor} rounded-2xl p-8 transition-all hover:shadow-lg hover:-translate-y-1 duration-300`}
            >
              <div className="text-3xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-foreground/80">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Appel à l'action */}
        <div className="mt-16 text-center">
          <a
            href="#explorer"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors shadow-md hover:shadow-lg"
          >
            Explorer l'impact
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
