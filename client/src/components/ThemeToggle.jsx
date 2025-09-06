import useThemeStore from "../store/useThemeStore";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  // Apply theme to body as a data attribute (CSS can use [data-theme="color"])
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        className="bi bi-palette-fill"
        viewBox="0 0 16 16"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      >
        <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
      </svg>
    </>
  );
};

export default ThemeToggle;
