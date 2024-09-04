import React, { useState } from 'react'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

function RanderComments({ title, nestedCommentCheck, checkLikedCommentAndDelete }) {

    const [checkReplayClick, setCheckReplayClick] = useState(false)
    const [replayComment, setReplayComment] = useState('')

    function handleSendComment(commentId) {
        nestedCommentCheck(replayComment, commentId)
        setCheckReplayClick(false)
    }

    return (
        <>
            <li>
                {title.comment}
            </li>

            {
                !checkReplayClick ?
                    <div className='mainReplaySection'>
                        <BiLike className='likeBtn' onClick={() => checkLikedCommentAndDelete(title.id, 'increaseLike')} />
                        {title.Likes}
                        <BiDislike className='dislikeBtn' onClick={() => checkLikedCommentAndDelete(title.id, 'decreaseLike')} />
                        <button className='btnReplay' onClick={() => setCheckReplayClick(true)}>Replay</button>
                        <button className='btnReplay' onClick={() => checkLikedCommentAndDelete(title.id, 'deleteComment')}>Delete</button>
                    </div>

                    : <>
                        <input type="text" placeholder='enter replay' style={{ color: 'black' }} onChange={(e) => setReplayComment(e.target.value)} />
                        <button className='btnReplay' onClick={() => handleSendComment(title.id)}>Send</button>
                        <button className='btnReplay' onClick={() => setCheckReplayClick(false)}>Cancel</button>
                    </>
            }

            {
                title.children && title.children.map((com) => {
                    return (
                        <ul className='nestedcommment' key={com.id}>
                            <RanderComments title={com} nestedCommentCheck={nestedCommentCheck} checkLikedCommentAndDelete={checkLikedCommentAndDelete} />
                        </ul>
                    )
                })
            }
        </>
    )
}

export default RanderComments