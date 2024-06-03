import { Container } from './Friend.style';
import api from '../../service/TokenService';
import UserFriend from '../../components/Friend/UserFriend/UserFriend';
import GuestFriend from '../../components/Friend/GuestFriend/GuestFriend';

const Friend = () => {
  return <Container>{api.getAccessToken() ? <UserFriend /> : <GuestFriend />}</Container>;
};

export default Friend;
