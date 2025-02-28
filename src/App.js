import { useEffect, useState } from "react";
import "./App.css";
import A from "./components/A";
import B from "./components/B";

function App() {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  //랜더링될 때 특정 작업 실행을 도와주는 Hook
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  //props : message -> value 전달, posts -> posts 전달
  return (
    <div style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: "flex" }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
