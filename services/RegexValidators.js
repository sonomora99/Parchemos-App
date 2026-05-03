import moment from "moment";

export const ageAddmited = (date) =>{
  const selected = moment(date);
  const current = moment();
  const different = current.diff(selected,'years');
  return (different+1) >= 18? true:false;
}
export const validatePhoneNumber = (number) =>{
  const strongRegex = new RegExp("^[0-9]{9}");
  const result = strongRegex.test(number);
  
  return result;
}

export const validatePasswords = (password, passwordConfirm) => {
  return password === passwordConfirm
}
export const validateFields = (field) => {

  if (field != undefined && field != null && field != "") {
    return true;
  }
  return false;
}

const validatePasswordFormat = (password) =>{
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_-])(?=.{8,})");
    const result = strongRegex.test(password);

    return result;
  }

  export default validatePasswordFormat;

