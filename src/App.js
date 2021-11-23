import Layout from "./components/layout/Layout.js";
import { Route, Routes } from "react-router-dom";

import NewsFeed from "./pages/NewsFeed";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<NewsFeed />} exact />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
