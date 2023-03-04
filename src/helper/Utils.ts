export const genClassList = (classes: string[] | undefined): string => {
  let s = '';

  if (classes)
    classes.map((c) => {
      s += `${c} `;
    });
  return s;
};
