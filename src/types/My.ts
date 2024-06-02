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
export type GetMemberReposiotryRes = RepositoryInterface[];
