/** Returns a "Q{n}" label for the nearest upcoming quarter, with 1.5 months of forward padding. */
export function getNearestQuarterLabel(): string {
  const amountOfMonthsPadding = 1.5;
  const date = new Date();
  const totalDaysPadding = Math.round(amountOfMonthsPadding * 30.436875);
  date.setDate(date.getDate() + totalDaysPadding);
  const quarter = Math.ceil((date.getMonth() + 1) / 3);
  return `Q${quarter}`;
}

export function getPrevPathFromExtension(path: string, extension = ".mdx") {
  const regex = new RegExp(`/[^/]+${extension}$`);
  const match = path.match(regex);
  return match
    ? path.slice(path.lastIndexOf("/", path.length - match[0].length - 1) + 1, path.length - match[0].length)
    : "";
}

/** Returns true if the given date falls within the current calendar quarter and year. */
export function isInCurrentQuarter(date: Date): boolean {
  const now = new Date();
  const currentQuarter = Math.ceil((now.getMonth() + 1) / 3);
  const articleQuarter = Math.ceil((date.getMonth() + 1) / 3);
  return date.getFullYear() === now.getFullYear() && articleQuarter === currentQuarter;
}
