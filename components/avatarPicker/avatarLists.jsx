import React, { useState } from 'react'
import { AVATARS } from './data'
import { setAvatar } from './utils'

function AvatarLists({ activeAvatarId, setActiveAvatarId, setAvatarModel }) {

    const [isPending, setIsPending] = useState(false)
    const [selectedId, setSelectedId] = useState()


    async function handleChangeAvatar(id) {
        setSelectedId(id)
        try {
            setIsPending(true)
            await setAvatar(id);
            setActiveAvatarId(id)

            setIsPending(false)
        } catch (error) {
            console.error('Failed to set avatar', error);
            setIsPending(false)
        }
    }

    return (
        <div className='avatar-lists'>
            {
                AVATARS.map((avatar) => {
                    return (
                        <div className={`avatar-main ${activeAvatarId === avatar.id && 'avatarActive'} `} onClick={() => handleChangeAvatar(avatar.id)} key={avatar.id}>
                            <img src={avatar.source} alt="" />
                            {isPending && selectedId === avatar.id && <div className='loader'></div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AvatarLists