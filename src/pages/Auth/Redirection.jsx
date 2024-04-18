import React, { useEffect } from 'react';
import Spinner from '@/components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from '@/hooks/useUser';
import { usePostAuth } from '@/hooks/useAuth';

const Redirection = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code');
  const postAuth = usePostAuth();
  const {
    data: userData,
    isLoading: userLoading,
    refetch: refetchUser,
  } = useGetUser();

  useEffect(() => {
    const handlePostAuth = async () => {
      try {
        if (code) {
          const authData = await postAuth(code);
          if (authData && authData.token) {
            localStorage.setItem('Authorization', authData.token);
            refetchUser();
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    handlePostAuth();
  }, [code, postAuth, refetchUser]);

  useEffect(() => {
    if (!userLoading && userData) {
      if (userData.nickname) {
        navigate('/home');
      } else {
        navigate('/signup');
      }
    }
  }, [userLoading, userData, navigate]);

  return (
    <div>
      <Spinner />
    </div>
  );
};

export default Redirection;
