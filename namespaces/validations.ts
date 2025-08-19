namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  export const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validations.validateText("Albi")); // true
console.log(Validations.validateText("Al")); // false
