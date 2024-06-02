import api from '../service/TokenService';
import { customedAxios } from './customedAxios';

export interface FeedDataTypes {
  content: ContentItem[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
export interface CommitMessage {
  id: number;
  commitLog: string;
}
export interface ContentItem {
  feedId: number;
  memberId: number;
  userName: string;
  commitType: string;
  time: string;
  repoUrl: string;
  profileImageUrl: string;
  commitMessages: CommitMessage[];
}
export interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
export const getFeed = async (page: number) => {
  const accessToken = api.getAccessToken();
  const { data } = await customedAxios.get<FeedDataTypes>(`/feeds/login?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};
