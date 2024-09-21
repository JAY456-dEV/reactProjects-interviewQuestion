import React from 'react'
import './form.css'
import { useFormik } from 'formik'
import { signUpSchema } from './schema'

function FormValidation() {

    let initialValues = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    let { values, handleChange, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            action.resetForm()
        }
    })

    return (
        <>
            <div className="card" data-v0-t="card">
                <div className="card-header">
                    <h3 className="card-title">Create an Account</h3>
                    <p className="card-subtitle">Sign up to start using our amazing app.</p>
                </div>
                <div className="form">
                    <form className="form-grid" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label" htmlFor="name">Name</label>
                            <input className="input" id="name" name='name' value={values.name} placeholder="Enter your name" onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name && <p className='error-formik'>{errors.name}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">Email</label>
                            <input className="input" id="email" name='email' value={values.email} placeholder="Enter your email" type="email" onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email && <p className='error-formik'>{errors.email}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">Password</label>
                            <input className="input" id="password" name='password' value={values.password} placeholder="Enter a password" type="password" onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password && <p className='error-formik'>{errors.password}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="confirmPassword">Confirm Password</label>
                            <input className="input" id="confirmPassword" name='confirm_password' value={values.confirm_password} placeholder="Confirm your password" type="password" onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirm_password && touched.confirm_password && <p className='error-formik'>{errors.confirm_password}</p>}
                        </div>
                        <button className='signup text-white' type='submit'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default FormValidation