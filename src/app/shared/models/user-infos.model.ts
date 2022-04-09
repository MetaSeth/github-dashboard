import { Repository } from './repository.model';

export interface UserInfos {
  name: string;
  avatarUrl: string;
  repositorys?: Repository[];
}
