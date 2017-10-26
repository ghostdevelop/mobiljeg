import validator from 'validator';

export default function validateInput(value, validation){
  let error = false;

  value = String(value)

  if (validation){

    if (validation.required && validator.isEmpty(value)){
      error = "A mező kitöltése kötelező"
    }

    if (validation.type === "email" && !validator.isEmail(value)){
      error = "Hibás email formátum"
    }

    if (validation.type === "number" && !validator.isNumeric(value)){
      error = "Csak szám adható meg"
      value = 1;
    }

    if (validation.type === "phone" && !validator.isMobilePhone(value, validation.locale)){
      error = "Hibás telefonszám formátum"
    }
  }

  return {error: error, value: value};
}
