export const getIconForLanguage = (language: string): string => {
  const iconMap: { [key: string]: string } = {
    TypeScript: "fa-brands fa-react",
    JavaScript: "fa-brands fa-js",
    Python: "fa-brands fa-python",
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css3",
    Java: "fa-brands fa-java",
    "C++": "fa-solid fa-code",
    Dart: "fa-brands fa-dart-lang",
    Ruby: "fa-brands fa-gem",
    PHP: "fa-brands fa-php",
    Go: "fa-brands fa-golang",
    Kotlin: "fa-brands fa-android",
    Rust: "fa-brands fa-rust",
    "C#": "fa-brands fa-dot-circle",
    Swift: "fa-brands fa-swift",
    Groovy: "fa-brands fa-groovy",
    PowerShell: "fa-brands fa-powershell",
    Shell: "fa-solid fa-terminal",
    VisualBasic: "fa-brands fa-windows",
    CMake: "fa-solid fa-cube",
    C: "fa-brands fa-c",
  };

  return iconMap[language] || "fa-solid fa-code";
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
