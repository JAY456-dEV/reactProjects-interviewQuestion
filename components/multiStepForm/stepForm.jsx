import React from 'react'
import './form.css'

function StepForm({ formData, setFormData, setPageForm }) {

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleNextPage() {
        setPageForm(prev => prev + 1)
    }

    return (
        <>
            <div className='form-main'>
                <h1>Enter User Details</h1>
                <div className='form-1'>
                    <input type="text" placeholder='enter firstname' name='firstname' value={formData.firstname} onChange={handleChange} />
                    <input type="text" placeholder='enter lastname' name='lastname' value={formData.lastname} onChange={handleChange} />
                    <input type="text" placeholder='enter email' name='email' value={formData.email} onChange={handleChange} />
                </div>
                <button className='form-continue' onClick={handleNextPage}>Continue</button>

            </div>
        </>
    )
}

export default StepForm