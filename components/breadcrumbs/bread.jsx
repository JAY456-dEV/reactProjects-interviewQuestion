import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumbs() {

    const { pathname } = useLocation()
    console.log(pathname)
    const pathnames = pathname.split('/').filter(x => x)
    let breadcrumbpath = ''

    return (
        <>
            <div>
                {pathnames.length > 0 && <Link to={'/'}>Home</Link>}
                {pathnames.map((name, idx) => {
                    breadcrumbpath += `/${name}`
                    const islast = idx == pathname.length - 1

                    return islast ? <span> / {name}</span> : <Link to={breadcrumbpath}> / {name}</Link>
                })}
            </div>
        </>
    )
}

export default Breadcrumbs