export const calculateExperience = (startDate: string, endDate?: string): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months = Math.floor(
    (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30.44),
  );

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0)
    return `${years} Year${years > 1 ? "s" : ""} ${remainingMonths} Month${remainingMonths > 1 ? "s" : ""}`;
  if (years > 0) return `${years} Year${years > 1 ? "s" : ""}`;
  if (months > 0) return `${Math.round(months)} Month${months > 1 ? "s" : ""}`;

  return "< 1 mo";
};
