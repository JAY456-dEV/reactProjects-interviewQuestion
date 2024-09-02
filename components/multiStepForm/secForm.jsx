import React from 'react'

function SecForm({ formData, setPageForm, setFormData }) {

    function handleNextPage() {
        setPageForm(prev => prev + 1)
    }

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleBackPage() {
        setPageForm(prev => prev - 1)
    }

    return (
        <div className='form-main'>
            <h1>Enter User Details</h1>
            <div className='form-1'>
                <input type="text" placeholder='enter occupation' value={formData.occupation} name='occupation' onChange={handleChange} />
                <input type="text" placeholder='enter city' name='city' value={formData.city} onChange={handleChange} />
                <input type="text" placeholder='enter bio' name='bio' value={formData.bio} onChange={handleChange} />
            </div>
            <button className='form-continue' onClick={handleNextPage}>Continue</button>
            <button className='form-continue' onClick={handleBackPage}>Back</button>
        </div>
    )
}

export default SecForm