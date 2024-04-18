import  * as Yup from 'yup';
export const LoginSchema = Yup.object({
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(8).max(8).required("Password is required"),
});

export const REACT_APP_API='http://127.0.0.1:8000/api';