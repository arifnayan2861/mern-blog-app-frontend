import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/home/Homepage";
import ArticleDetailPage from "./pages/ArticleDetails/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Header from "./pages/admin/components/header/Header";

function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/admin" element={<ManagePosts />}> */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route path="/admin" element={<Header />}> */}
          {/* <Route index element={<ManagePosts />} /> */}
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
