import React, { useState } from 'react'
import { postAdded } from './postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from "../users/usersSlice"


const AddPostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [userId, setUserId] = useState("")
    const dispatch = useDispatch()
    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)
    console.log(userId);

    const users = useSelector(selectAllUsers)

    const userOptions = users?.map((user) =>
        <option key={user.id} value={user.id} >{user.name}</option>
    )
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const handleSubmit = () => {
        if (title && content && userId) {
            dispatch(postAdded(title, content, userId))
            setTitle("")
            setContent("")
        }
    }
    return (
        <section>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' value={title} onChange={onTitleChange} />
                <label htmlFor="author">Author:</label>
                <select name="author" id="author" onChange={onAuthorChange}>
                    <option value=""></option>
                    {userOptions}
                </select>
                <label htmlFor="content">Content</label>
                <textarea id='content' value={content} onChange={onContentChange} ></textarea>
                <button
                    type='button'
                    id='button'
                    onClick={handleSubmit}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
