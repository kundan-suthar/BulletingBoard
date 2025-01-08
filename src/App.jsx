import PostList from "./features/post/PostList"
import AddPostForm from "./features/post/AddPostForm"

function App() {

  return (
    <main className="App">
      <h1>Bulletin Board</h1>
      <AddPostForm />
      <PostList />
    </main>
  )
}

export default App
