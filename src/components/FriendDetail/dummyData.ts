import imgProfile from '../../assets/image/dummy_profile.jpg';

// 더미 데이터
export const dummyFriendInfo = {
  id: 1,
  profile: imgProfile,
  userId: 'HI-JIN2',
  name: '유진',
  description: '점심형인간',
};

export const dummyFriendActivity = [
  {
    day: 20240317,
    data: [
      {
        id: 3,
        category: 'pr',
        activityTitle: 'FIX : Merge Conflict',
        activitySubTitle: '',
        repositoryImg: imgProfile,
        repository: 'YourSSU/YDSAndroid',
        language: 'Kotlin',
      },
      {
        id: 2,
        category: 'commit',
        activityTitle: 'FEAT : 버튼 컴포넌트 개발',
        activitySubTitle: '나왜또버튼만들어',
        repositoryImg: imgProfile,
        repository: 'YourSSU/YDSAndroid',
        language: 'Kotlin',
      },
      {
        id: 1,
        category: 'pr',
        activityTitle: 'FEAT : 버튼 컴포넌트 개발',
        activitySubTitle: '나왜또버튼만들어',
        repositoryImg: imgProfile,
        repository: 'YourSSU/YDSAndroid',
        language: 'Kotlin',
      },
    ],
  },
  {
    day: 20240316,
    data: [
      {
        id: 1,
        category: 'pr',
        activityTitle: 'FEAT : 버튼 컴포넌트 개발',
        activitySubTitle: '나왜또버튼만들어',
        repositoryImg: imgProfile,
        repository: 'YourSSU/YDSAndroid',
        language: 'Kotlin',
      },
    ],
  },
];
