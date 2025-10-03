export const unslugify = (slug: string): string =>
  slug
    .replace(/\-/g, " ")
    .replace(
      /\w\s*/g,
      (text: string): string =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );

export const getIds = (arr: string | null | undefined): number[] =>
  arr && !!arr.length ? arr.split(",").map((item: string): number => Number(item)) : [];
