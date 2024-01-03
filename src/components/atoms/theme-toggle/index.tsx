import { FC, ReactElement, useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const ThemeToggle: FC = (): ReactElement => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className={`flex h-4 mt-4 bg-gray-400 items-center justify-center rounded-full pr-6 shadow "
      } `}
      onClick={toggleDarkMode}
    >
      <div
        id="switch-toggle"
        className="transform translate-x-0 dark:translate-x-7 rotate-180 dark:rotate-0 transition-all duration-300 ease-linear rounded-full bg-yellow-500 dark:bg-dark-blue-100 p-1 text-white focus:rotate-180 justify-center"
      >
        {theme === "light" ? (
          <Icon icon="ph:sun-fill" width={25} />
        ) : (
          <Icon icon="ph:moon-fill" width={25} />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
