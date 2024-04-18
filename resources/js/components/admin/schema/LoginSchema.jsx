import  * as Yup from 'yup';
export const LoginSchema = Yup.object({
    email:Yup.string().email().required("Email is required"),
    password:Yup.string().min(8).max(8).required("Password is required"),
});
