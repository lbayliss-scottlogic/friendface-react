import Layout from "./components/layout/Layout.js";
import { Route, Routes } from "react-router-dom";

import NewsFeed from "./pages/NewsFeed";
import CreatePost from "./pages/CreatePost";
import TicTacToe from './pages/TicTacToe';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<NewsFeed />} exact />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/tic-tac-toe" element={<TicTacToe/>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
