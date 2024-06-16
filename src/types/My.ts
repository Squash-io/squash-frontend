export interface RepositoryInterface {
  category: CategoryInterface;
  repositories: RespositoriesInteface[];
}
export interface CategoryInterface {
  id: number;
  name: string;
}

export interface RespositoriesInteface {
  id: number;
  name: string;
  url: string;
  description: string;
}
export interface PostCategoryInterface {
  name: string;
  repositoriyIds: number[];
}

export interface PostStreakInterface {
  name: string;
  repositoryId: number;
}

export interface GetStreakInterface {
  goalId: number;
  goalName: string;
  commitLength: number;
  repositoryDto: RepositoryDtoInterface;
}
export interface RepositoryDtoInterface {
  id: number;
  name: string;
  url: string;
  description: string;
}
export type GetMemberReposiotryRes = RepositoryInterface[];
export type PostMemberRepositoryReq = PostCategoryInterface;
export type PostStreakReq = PostStreakInterface;
export type GetStreakRes = GetStreakInterface;
