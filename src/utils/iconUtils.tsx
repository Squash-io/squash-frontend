import { IcPullRequest, IcCommit, IcAlertCircle } from '../assets';

// 활동 category에 따른 아이콘 컴포넌트 리턴하는 함수
export const getIconByCategory = (category: string) => {
  // category별 case 추가
  switch (category) {
    case 'pr':
      return <IcPullRequest />;
    case 'commit':
      return <IcCommit />;
    case 'issue':
      return <IcAlertCircle />;
    default:
      return null;
  }
};
