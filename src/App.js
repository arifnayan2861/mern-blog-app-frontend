import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/home/Homepage";
import ArticleDetailPage from "./pages/ArticleDetails/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
