export const formatPostDate = (date?: string) => {
  if (!date) return "Fresh draft";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
};

export const trimBrief = (brief: string, limit = 150) => {
  if (brief.length <= limit) return brief;

  return `${brief.slice(0, limit).trim()}...`;
};
