import { Repository } from './repository.model';

export interface UserInfos {
  username: string;
  name: string;
  avatarUrl: string;
  repositorys: { string: Repository };
  [key: string]: any;
}
