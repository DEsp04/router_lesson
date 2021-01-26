import data from '../FakeData.json';

function Post(props) { 
  console.log(props)

  const { match: { params: { post_id}}} =props

  // const post = data.find(
  //   (post) => post.id === parseInt(post_id)
  // )

  const post = data.filter(
		(post) => post.id === parseInt(props.match.params.post_id)
	)



   return (
		<div className="post">
			<div className="hero">
				<img src={post.image} alt="post banner" />
			</div>
			<div className="content">
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		</div>
	)

}

export default Post;