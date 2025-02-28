import React from "react";

// React.memo() : 필요한 영역만 렌더링 하기 위해 사용(성능개선의 도구)
const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  return (
    <li key={post.id}>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </ul>
  );
});

// 여러 컴포넌트로 나눈 예시 (A와 결과값이 같음)
const B = ({ message, posts }) => {
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} />
    </div>
  );
};

export default B;
