import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required('please enter your name'),
    email: Yup.string().email().required('please enter email'),
    password: Yup.string().min(6).required('please enter password'),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null], 'password not match')
})