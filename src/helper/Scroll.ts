export const scrollTo = (id: string, offset: number = -85) => {
  const element = document.getElementById(id);

  if (!element) return;
  const y = element.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({ top: y, behavior: 'smooth' });
};
