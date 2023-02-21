import { User } from '@repo/libs/api/user.ts';

export class UserRepository {
  save(user: User): void {
    console.log(user);
  }
}
