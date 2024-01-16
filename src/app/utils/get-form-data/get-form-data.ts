export const getFormData = (key: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};
