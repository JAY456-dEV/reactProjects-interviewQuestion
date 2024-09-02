import React, { useState } from 'react'
import { HeartIcon, SpinnerIcon } from "./Icons";

function LikeButton() {

    const [btnClicked, setBtnClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const WaitForSomeTime = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("https://www.greatfrontend.com/api/questions/like-button", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: btnClicked ? "unlike" : "like",
                }),
            })

            if (response.status >= 200 && response.status < 300) {
                setBtnClicked(!btnClicked)
            } else {
                const data = await response.json()
                setError('Error Request Failed')
                return
            }
        } finally {
            setLoading(false)
        }
    }

    console.log(error)

    return (
        <>
            <div className={`main-likeCompo `}>
                <div className={`button-likeCommponent ${btnClicked && !loading && 'active'}`} onClick={() => WaitForSomeTime()}>
                    {!loading ? <HeartIcon className={`heartIcon ${btnClicked && !loading && 'activeHeart'}`} /> :
                        <SpinnerIcon className={`spinner ${btnClicked && !loading && 'spinnerActive'}`} />}
                    <p className={`textLike ${btnClicked && 'activeLike'}`}>{!btnClicked && !loading ? 'Like' : 'Unlike'}</p>
                </div>
                <p style={{ color: 'white' }}>{error}</p>
            </div>
        </>
    )
}

export default LikeButton