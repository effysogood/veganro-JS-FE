import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'info':
      toast.info(message);
      break;
    default:
      toast(message);
  }
};

const Toast = ({ isDesktopOrLaptop }) => {
  return (
    <ToastContainer
      className={isDesktopOrLaptop ? 'desktop-toast' : 'mobile-toast'}
      autoClose={3000} // 자동 off 시간
      hideProgressBar={false} // 진행시간바 숨김
      closeOnClick // 클릭으로 알람 닫기
      rtl={false} // 알림 좌우 반전
      pauseOnFocusLoss // 화면을 벗어나면 알람 정지
      draggable // 드래그 가능
      pauseOnHover // 마우스를 올리면 알람 정지
      theme="light"
      limit={1} // 알람 개수 제한
    />
  );
};

export default Toast;
