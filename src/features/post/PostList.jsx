import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import PostAuthor from "./PostAuthor"
import TimeAgo from "./TimeAgo"
import EmojiButtons from "./EmojiButtons"


const PostList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPost.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0.100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <EmojiButtons post={post} />
        </article>
    ))
    return (
        <section>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostList
