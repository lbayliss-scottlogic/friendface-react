import Layout from "./components/layout/Layout.js";
import PostForm from "./components/PostForm.js";
import { Route, Routes } from "react-router-dom";

import NewsFeed from "./pages/NewsFeed";
import CreatePost from "./pages/CreatePost";
import NavigationBar from './components/layout/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<NewsFeed />} exact />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
