//Email
export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//Fullname
export const validateFullname = (fullname) => fullname.length >= 8;

//Password
export const validatePassword = (password) => /^[A-Za-z]\w{8}$/.test(password);
