// lib/ThemeProvider.tsx - Ajout d'une vérification pour le rendu côté serveur
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Valeur par défaut pour le contexte
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // État du thème avec initialisation côté client uniquement
  const [theme, setTheme] = useState<Theme>("light");

  // Flag pour savoir si on est côté client
  const [isMounted, setIsMounted] = useState(false);

  // Initialiser le thème depuis localStorage ou les préférences système
  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Appliquer le thème au document
  useEffect(() => {
    if (!isMounted) return;

    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme, isMounted]);

  // Basculer entre thème clair et sombre
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte de thème
export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
