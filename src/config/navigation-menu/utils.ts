export const getActiveMenu = (
  currentLink: string,
  menuLink: string,
): boolean => {
  return currentLink.includes(menuLink);
};
