export const textEllipsis = (count: number, text?: string) => {
  if (text && text.length > count) {
    return text.substring(0, count) + "...";
  }

  return text;
};
