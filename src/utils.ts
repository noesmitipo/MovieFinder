export const getApiUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  return url as string;
};

export const getApiKey = () => {
  const key = import.meta.env.VITE_API_KEY;
  return key as string;
};

export const getImagePath = () => {
  const path = import.meta.env.VITE_IMAGE_PATH;
  return path as string;
};
