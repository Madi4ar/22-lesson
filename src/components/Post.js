function Post(props) {
  console.log(props);
  return (
    <>
      <p>№:{props.id}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </>
  );
}

export default Post;
