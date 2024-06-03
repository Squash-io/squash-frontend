interface FriendListRes {
  sum: number;
  friends: Friend[];
  // setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
  onLikeToggle: (friendId: number, isLiked: boolean) => void;
}

interface Friend {
  friendId: number;
  memberId: number;
  avartarUrl: string;
  githubName: string;
  userName: string;
  bio: string;
  isStarred: boolean;
  // setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
  onLikeToggle: (friendId: number, isLiked: boolean) => void;
}

interface PostLikeReq {
  friendId: number;
  isLiked: boolean;
}
interface PostLikeRes {
  status: number;
}

interface FriendDetail {
  friendId: number;
  memberId: number;
  avartarUrl: string;
  githubName: string;
  userName: string;
  bio: string;
  isStarred: boolean;
}
