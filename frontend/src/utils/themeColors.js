/**
 * Theme utility colors for consistent dark/light mode styling
 * Usage: Apply theme colors using these objects in components
 */

export const themeColors = {
  // Backgrounds
  bgPrimary: "bg-white dark:bg-slate-950",
  bgSecondary: "bg-slate-50 dark:bg-slate-900",
  bgTertiary: "bg-slate-100 dark:bg-slate-800",
  bgHover: "hover:bg-slate-100 dark:hover:bg-slate-800",

  // Borders
  border: "border-slate-200 dark:border-slate-700",
  borderHover: "hover:border-blue-500 dark:hover:border-blue-400",

  // Text
  textPrimary: "text-slate-900 dark:text-white",
  textSecondary: "text-slate-600 dark:text-slate-400",
  textTertiary: "text-slate-500 dark:text-slate-500",
  textMuted: "text-slate-400 dark:text-slate-600",

  // Cards
  card: "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
  cardHover:
    "hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md dark:hover:shadow-lg",

  // Inputs
  input:
    "border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
  inputDisabled: "disabled:opacity-50 disabled:cursor-not-allowed",

  // Buttons
  buttonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
  buttonSecondary:
    "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700",
  buttonGhost:
    "bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",

  // Badges
  badgePrimary:
    "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-300",
  badgeSecondary:
    "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200",
  badgeSuccess:
    "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300",
  badgeDanger: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300",

  // Other
  scrollbar:
    "scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700",
};

/**
 * Combines multiple theme color classes
 * @param {...string} classes - Theme color strings to combine
 * @returns {string} Combined class string
 */
export const combineThemeClasses = (...classes) => {
  return classes.join(" ");
};
