import { useTheme } from "@/lib/ThemeProvider";
import Link from "next/link";

const Contact = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  // Liens rapides
  const quickLinks = {
    explorer: [
      { name: "Artistes", href: "/categories/artists" },
      { name: "Économistes", href: "/categories/economists" },
      { name: "Ingénieurs", href: "/categories/engineers" },
      { name: "Entrepreneurs", href: "/categories/entrepreneurs" },
      { name: "Philosophes", href: "/categories/philosophers" },
      { name: "Écrivains", href: "/categories/writers" },
    ],
    decouvrir: [
      { name: "Tendances", href: "/decouvrir/tendances" },
      { name: "Événements", href: "/decouvrir/evenements" },
      { name: "Publications", href: "/decouvrir/publications" },
      { name: "Collaborations", href: "/decouvrir/collaborations" },
    ],
    navigation: [
      { name: "Accueil", href: "/" },
      { name: "À propos", href: "/a-propos" },
      { name: "Explorer", href: "/explorer" },
      { name: "Actualités", href: "/actualites" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  };

  // Réseaux sociaux
  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/africanthinkers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/africanthinkers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/africanthinkers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/africanthinkers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/africanthinkers",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Grille principale du footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo et à propos */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground font-bold text-lg">
                AT
              </span>
              <span className="text-xl font-bold text-foreground tracking-tight">
                African Thinkers
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Un espace numérique panafricain dédié aux penseurs, innovateurs et
              acteurs du changement qui façonnent l'avenir du continent
              africain.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explorer */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Explorer</h3>
            <ul className="space-y-3">
              {quickLinks.explorer.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Découvrir */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">
              Découvrir
            </h3>
            <ul className="space-y-3">
              {quickLinks.decouvrir.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Navigation (pour mobile) */}
            <div className="mt-8 lg:hidden">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-3 mt-0.5"
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
                <address className="text-muted-foreground not-italic">
                  Centre d'Innovation Panafricain
                  <br />
                  12 Boulevard des Penseurs
                  <br />
                  Dakar, Sénégal
                </address>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@africanthinkers.org"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  contact@africanthinkers.org
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-accent mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+221123456789"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +221 12 345 6789
                </a>
              </li>
            </ul>

            {/* Newsletter (seulement pour desktop) */}
            <div className="mt-8 hidden md:block lg:hidden xl:block">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Newsletter
              </h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 p-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground text-sm"
                />
                <button className="bg-accent text-accent-foreground p-2 rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bannière newsletter (mobile uniquement) */}
        <div className="mb-10 md:hidden bg-accent/10 rounded-xl p-6">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Restez informé
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Abonnez-vous à notre newsletter pour recevoir les dernières
            actualités.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 p-2 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
            />
            <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors">
              OK
            </button>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Mentions légales */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <Link
              href="/mentions-legales"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/conditions-utilisation"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Conditions d'utilisation
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Gestion des cookies
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} African Thinkers. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
