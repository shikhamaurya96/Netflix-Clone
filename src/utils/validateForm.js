function validateForm(email,password){
const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
if(!checkEmail) return " please enter correct email"
 if(!checkPassword) return "enter right password"
 return null;
}
export default validateForm;