import { Route, Routes } from 'react-router-dom';
import { PATH } from '@/constants/router';
import Home from '@/pages/Home/Home';
import Auth from '@/pages/Auth/Auth';
import EmailAuth from '@/pages/EmailAuth/EmailAuth';
import SignUp from '@/pages/SignUp/SignUp';
import Logout from '@/pages/Logout/Logout';
import AddPlace from '@/pages/AddPlace/AddPlace';
import Review from '@/pages/ReviewDetail/ReviewDetail';
import Search from '@/pages/Search/Search';
import PlaceDetail from '@/pages/PlaceDetail/PlaceDetail';
import MyPage from '@/pages/MyPage/MyPage';
import EditMyPage from '@/pages/EditMyPage/EditMyPage';
import NotFound from '@/pages/NotFound/NotFound';
import Redirection from '@/pages/Auth/Redirection';

const MyRouter = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<Home />} />
      <Route path={PATH.AUTH} element={<Auth />} />
      <Route path={PATH.LOGIN} element={<EmailAuth />} />
      <Route path={PATH.LOGOUT} element={<Logout />} />
      <Route path={PATH.REDIRECTION} element={<Redirection />} />
      <Route path={PATH.SIGNUP} element={<SignUp />} />
      <Route path={PATH.ADDPLACE} element={<AddPlace />} />
      <Route path={PATH.REVIEW} element={<Review />} />
      <Route path={PATH.SEARCH} element={<Search />} />
      <Route path={PATH.PLACEDETAIL} element={<PlaceDetail />} />
      <Route path={PATH.MY} element={<MyPage />} />
      <Route path={PATH.MYEDIT} element={<EditMyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRouter;
