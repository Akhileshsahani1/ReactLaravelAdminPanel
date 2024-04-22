import  * as Yup from 'yup';
export const LoginSchema = Yup.object({
    email      :Yup.string().email().required("Email is required"),
    password   :Yup.string().min(8).max(8).required("Password is required"),
});


export const UserCreate = Yup.object({
        name                 :Yup.string().min(2).max(25).required("Please Enter Your Name"),
        email                :Yup.string().email().required("Please Enter Your Email"),
        password             :Yup.string().min(6).max(16).required("Please Enter Your Password"),
        confirm_password     :Yup.string().required().oneOf([Yup.ref('password'),null],"Password must match"),
        file                 :Yup.mixed().required('File is required'),
});
export const REACT_APP_API='http://127.0.0.1:8000/api';