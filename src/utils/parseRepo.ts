export const parseRepo = (repoUrl: String) => {
  const parts = repoUrl.split('/');
  return `${parts[3]}/${parts[4]}`;
};
