import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/home/Homepage";
import ArticleDetailPage from "./pages/ArticleDetails/ArticleDetailPage";

function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
