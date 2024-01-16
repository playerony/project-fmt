export const setFormData = (key: string, data: object) => {
  localStorage.setItem(key, JSON.stringify(data));
};
