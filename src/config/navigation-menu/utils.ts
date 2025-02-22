export const isMenuActive = (
  rootLink: RootLink = "/",
  currentPath: string,
  link: string,
): boolean => {
  return currentPath === rootLink && link !== rootLink
    ? false
    : link.startsWith(currentPath);
};

type RootLink = `/${string}`;
