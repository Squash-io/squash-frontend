import { useSearchParams } from 'react-router-dom';
import postLogin from '../../apis/postLogin';
import api from '../../service/TokenService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchLogin = async () => {
      const code = searchParams.get('code');
      if (code) {
        const data = { code };
        try {
          const res = await postLogin(data);
          if (res.token) {
            api.setAccessToken(res.token);
            navigate('/feed');
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchLogin();
  }, [searchParams]);

  return <div>로그인중</div>;
};
export default LoginRedirect;
