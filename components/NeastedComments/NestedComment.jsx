import React, { useState } from 'react'
import './nestedComments.css'
import RanderComments from './randerComments'

function NestedComment() {

    const [inputtext, setInputText] = useState('')

    const [commentData, setCommentData] = useState([])

    function addComment(inputtext) {
        setCommentData(prev => [...prev, addNewComment(inputtext)])
    }

    function addNewComment(inputtext) {
        return { id: crypto.randomUUID(), comment: inputtext, children: [], Likes: 0 }
    }


    function nestedCommentCheck(replay, ParentId) {
        const commentDataCopy = [...commentData]
        mainCheckReplay(commentDataCopy, replay, ParentId)
        setCommentData(commentDataCopy)
    }

    function mainCheckReplay(commentDataCopy, replay, ParentId) {
        for (let i = 0; i < commentDataCopy.length; i++) {
            const comment = commentDataCopy[i]
            if (comment.id == ParentId) {
                comment.children.unshift(addNewComment(replay))
            }
        }

        for (let i = 0; i < commentDataCopy.length; i++) {
            const comment = commentDataCopy[i]
            mainCheckReplay(comment.children, replay, ParentId)
        }
    }

    function checkLikedCommentAndDelete(commentLikeId, nameOfBtn) {
        const commentDataCopy = [...commentData]
        IncreaseLike(commentDataCopy, commentLikeId, nameOfBtn)
        setCommentData(commentDataCopy)
    }

    function IncreaseLike(commentDataCopy, commentLikeId, nameOfBtn) {
        for (let i = 0; i < commentDataCopy.length; i++) {
            const comment = commentDataCopy[i]
            if (comment.id == commentLikeId) {
                if (nameOfBtn === 'increaseLike') {
                    return comment.Likes += 1
                } else if (nameOfBtn === 'decreaseLike') {
                    return comment.Likes > 0 ? comment.Likes -= 1 : 0
                } else if (nameOfBtn === 'deleteComment') {
                    return commentDataCopy.splice(commentLikeId, 1)
                }
            }
        }

        for (let i = 0; i < commentDataCopy.length; i++) {
            const comment = commentDataCopy[i]
            IncreaseLike(comment.children, commentLikeId, nameOfBtn)
        }
    }

    return (
        <>
            <div>
                <div>
                    <input type="text" placeholder='Enter Comment' className='inputComment' onChange={(e) => setInputText(e.target.value)} />
                    <button style={{ backgroundColor: 'black' }} onClick={() => addComment(inputtext)}>Search</button>
                </div>

                <ul className='comment'>
                    {
                        commentData.map((title) => {
                            return (
                                <RanderComments title={title} key={title.id} nestedCommentCheck={nestedCommentCheck} checkLikedCommentAndDelete={checkLikedCommentAndDelete} />
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default NestedComment