import "./App.css";
import { useEffect, useState } from "react";
import { getPosts } from "./api";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import { getRandomUser } from "./api";
function App() {
  const [data, setdata] = useState(null);
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setdata(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setuserdata(user.results[0]));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setuserdata(user.results[0]));
  };
  console.log("userdata :", userdata);
  return (
    <div className="app">
      {userdata && <UserCard data={userdata} />}
      <button
        onClick={refresh}
        style={{ color: "black", backgroundColor: "white" }}
      >
        Refresh user
      </button>
      {data ? (
        data.map((data) => <PostCard title={data.title} body={data.body} />)
      ) : (
        <li>No data</li>
      )}
    </div>
  );
}

export default App;
