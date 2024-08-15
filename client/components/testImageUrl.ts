export const validateLink = (value:string) => {

  const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
  return urlPattern.test(value)}