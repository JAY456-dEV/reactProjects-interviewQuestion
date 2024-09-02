import React, { useRef } from 'react'
import { AVATARS } from './data'
import AvatarLists from './avatarLists'
import useOutSideClick from './useOutSideClick'


function AvatarRender({ activeAvatarId, setActiveAvatarId, setAvatarModel, avatarModel }) {
    const getAavtarById = AVATARS.find((item) => item.id === activeAvatarId)
    const modelRef = useRef()

    useOutSideClick(modelRef, () => setAvatarModel(false))

    return (
        <>
            <div className='main-model-avatar' ref={modelRef}>
                <div className='avatar-main'>
                    <img src={getAavtarById.source} alt="" onClick={() => setAvatarModel(prev => !prev)} />
                    <p>{getAavtarById.label}</p>
                </div>

                <div>
                    {
                        avatarModel && (
                            <AvatarLists activeAvatarId={activeAvatarId} setActiveAvatarId={setActiveAvatarId} setAvatarModel={setAvatarModel} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default AvatarRender