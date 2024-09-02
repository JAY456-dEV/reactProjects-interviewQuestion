import React, { useState } from 'react'
import './avatar.css'
import AvatarRender from './avatarRender'

function Avatar() {
    const [activeAvatarId, setActiveAvatarId] = useState(1)
    const [avatarModel, setAvatarModel] = useState(false)

    return (
        <>
            <div className='container'>
                <div className='avatar'>
                    {
                        <AvatarRender activeAvatarId={activeAvatarId} setActiveAvatarId={setActiveAvatarId} setAvatarModel={setAvatarModel} avatarModel={avatarModel} />
                    }
                </div>
            </div>
        </>
    )
}

export default Avatar