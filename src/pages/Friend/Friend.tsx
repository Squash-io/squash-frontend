import { useState, useEffect } from 'react';

import { FavoriteFriendList } from '../../components/Friend/FavoriteFriendList/FavoriteFriendList';
import { FriendList } from '../../components/Friend/FriendList/FriendList';
import { FriendContainer } from './Friend.style';

import { getFriendList } from '../../apis/getFriendList';
import { postLike } from '../../apis/postLike';

const Friend = () => {
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [favoriteFriendList, setFavoriteFriendList] = useState<Friend[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [trigger, setTrigger] = useState(false); // 트리거 상태 추가

  const onLikeToggle = async (friendId: number, isLiked: boolean) => {
    const params = {
      friendId: friendId,
      isLiked: !isLiked,
    };

    try {
      await postLike(params);
      setTrigger((prevTrigger) => !prevTrigger);
    } catch (error) {
      console.error('즐겨찾기 실패:', error);
    }
  };

  useEffect(() => {
    const fetchFriendList = async () => {
      try {
        const params = { page: currentPage };
        const data = await getFriendList(params);
        setFriendList(data.friends);
        const favoriteFriends = data.friends.filter((friend: Friend) => friend.isStarred);
        setFavoriteFriendList(favoriteFriends); // 기존 목록에 새로운 목록 추가
      } catch (error) {
        console.error('친구 목록 가져오기 실패:', error);
      }
    };

    fetchFriendList();
  }, [currentPage, trigger]);

  return (
    <FriendContainer>
      <FavoriteFriendList
        sum={favoriteFriendList.length}
        friends={favoriteFriendList}
        onLikeToggle={onLikeToggle}
      />
      <FriendList
        sum={friendList.length}
        friends={friendList}
        // setIsStarred={setIsStarred}
        onLikeToggle={onLikeToggle}
      />
    </FriendContainer>
  );
};

export default Friend;
