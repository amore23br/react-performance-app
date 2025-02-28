import React from "react";

// 하나의 요소안에 몽땅 있는 예시
// props로 전달받은 message, posts값을 렌더링
// posts가 가져오는 값은 app.js에서 fetch로 가져온 api
const A = ({ message, posts }) => {
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          );
        })}
      </ul>
      <footer>Footer</footer>
    </div>
  );
};

export default A;
