interface FriendDetailRes {
  feedId: number;
  memberId: number;
  userName: string;
  profileImageUrl: string;
  commitType: string;
  time: string;
  repoUrl: string;
  commitMessages: CommitMessage[];
}

interface CommitMessage {
  id: number;
  commitLog: string;
}

interface FriendDetail {
  friendId: number;
  avartarUrl: string;
  githubName: string;
  userName: string;
  bio: string;
  isStarred: boolean;
}

interface ActivityListProps {
  friendId: number;
}

interface ActivityItemProps {
  id: number;
  commitType: string;
  activityTitle: string;
  repoUrl: string;
}
