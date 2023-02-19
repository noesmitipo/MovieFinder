export const getApiUrl = () => {
  const url = process.env.VITE_API_URL;
  return url as string;
};

export const getApiKey = () => {
  const key = process.env.VITE_API_KEY;
  return key as string;
};

export const getImagePath = () => {
  const path = process.env.VITE_IMAGE_PATH;
  return path as string;
};
