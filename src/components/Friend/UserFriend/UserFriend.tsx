import { useState, useEffect } from 'react';

import { FavoriteFriendList } from '../../../components/Friend/FavoriteFriendList/FavoriteFriendList';
import { FriendList } from '../../../components/Friend/FriendList/FriendList';
import { FriendContainer } from './UserFriend.style';

import { getFriendList } from '../../../apis/getFriendList';
import { postLike } from '../../../apis/postLike';

const UserFriend = () => {
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [favoriteFriendList, setFavoriteFriendList] = useState<Friend[]>([]);
  const [trigger, setTrigger] = useState(false); // 트리거 상태 추가

  const onLikeToggle = async (friendId: number, isLiked: boolean) => {
    const params = {
      friendId: friendId,
      isLiked: !isLiked,
    };

    try {
      const response = await postLike(params);
      if (response.status === 200) {
        setTrigger((prevTrigger) => !prevTrigger);
      } else {
        console.error('postLike 요청이 실패했습니다.');
      }
    } catch (error) {
      console.error('postLike 요청이 실패했습니다:', error);
    }
  };

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const data = await getFriendList();
        setFriendList(data.friends);
        const favoriteFriends = data.friends.filter((friend: Friend) => friend.isStarred);
        setFavoriteFriendList(favoriteFriends);
      } catch (error) {
        console.error('친구 목록 가져오기 실패:', error);
      }
    };

    fetchFriendList();
  }, [trigger]);

  return (
    <FriendContainer>
      <FavoriteFriendList
        sum={favoriteFriendList.length}
        friends={favoriteFriendList}
        onLikeToggle={onLikeToggle}
      />
      <FriendList
        sum={friendList.length - favoriteFriendList.length}
        friends={friendList.filter((friend) => !favoriteFriendList.includes(friend))}
        onLikeToggle={onLikeToggle}
      />
    </FriendContainer>
  );
};

export default UserFriend;
