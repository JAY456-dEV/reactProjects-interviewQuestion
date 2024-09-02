import React from 'react'

function ThirdForm({ formData, setPageForm }) {
    console.log(formData)

    function handleBackPage() {
        setPageForm(prev => prev - 1)
    }

    return (
        <div>
            <p>firstname : {formData.firstname}</p>
            <p>lastname : {formData.lastname}</p>
            <p>email : {formData.email}</p>
            <p>occupation: {formData.occupation}</p>
            <p>city : {formData.city}</p>
            <p>bio :{formData.bio}</p>
            <button className='form-continue' onClick={handleBackPage}>Back</button>
        </div>
    )
}

export default ThirdForm