import React from 'react'

function DataShow({ props }) {
    return (
        <>
            {
                props && props.length && props.map((data) => {
                    return (
                        <div className='data-paginate' key={data.id}>
                            <p>{data.title}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DataShow