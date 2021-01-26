import { useState, useEffect } from "react";
import data from "../FakeData.json";
import PostCard from "../components/PostCard.js";

function Posts(props) { 

  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    setPosts({data})
  }, [])

  const renderPosts = () => { 
    const { history } = props;

    return posts.map((post) => { 
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        image={post.image}
        history={history}
      />
    })
  }

  return (
    <div className="Posts">{ () => renderPosts() }</div>
  )


}

export default Posts;