export  const isEmail = (value) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
}
export const isEmpty = (value) => {
  return (!value)
}

export const getLength = (value) => {
  return (value.length)
}

export const isValidName = (name) => {
  const nameRegex = /^[a-zA-Z\s]{2,30}$/;

  return nameRegex.test(name);
}