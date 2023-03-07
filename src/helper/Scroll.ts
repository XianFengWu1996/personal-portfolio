export const scrollTo = (id: string) => {
  const element = document.getElementById(id);

  if (!element) return;
  const offset = -85;
  const y = element.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({ top: y, behavior: 'smooth' });
};
