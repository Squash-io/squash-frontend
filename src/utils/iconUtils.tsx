import { IcPullRequest, IcCommit, IcAlertCircle, IcFork } from '../assets';

// 활동 category에 따른 아이콘 컴포넌트 리턴하는 함수
export const getIconByCategory = (category?: string) => {
  // category별 case 추가
  switch (category) {
    case 'pr':
      return <IcPullRequest />;
    case 'commit':
      return <IcCommit />;
    case 'PUSH_EVENT':
      return <IcCommit />;
    case 'FORK_EVENT':
      return <IcFork />;
    case 'issue':
      return <IcAlertCircle />;
    default:
      return null;
  }
};
