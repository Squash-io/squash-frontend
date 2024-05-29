import GuestMy from '../../components/My/GuestMy/GuestMy';
import UserMy from '../../components/My/UserMy/UserMy';
import api from '../../service/TokenService';
import { MyContainer } from './My.style';

const My = () => {
  return <MyContainer>{api.getAccessToken() ? <UserMy /> : <GuestMy />}</MyContainer>;
};

export default My;
