import { getRepository } from 'typeorm';
import { compareSync } from 'bcryptjs';

import { abort } from '../../helper/error';
import { generate } from '../../helper/jwt';
import { UserStatus } from '../../enums/User';
import Users from '../entities/Users';

interface SignInParams {
  username: string;
  password: string;
}

export async function signIn({ username, password }: SignInParams): Promise<any> {
  const userRepository = getRepository(Users);

  const user = await userRepository.findOne({ username });
  if (!user) return abort(400, 'Invalid username');
  if (user.status === UserStatus.INACTIVE) return abort(400, 'User blocked');

  const isTruePassword = compareSync(password, user.password);
  if (!isTruePassword) return abort(400, 'Password is not valid');
  const accessToken = generate({ userId: user.id });

  return {
    userId: user.id,
    accessToken,
  };
}
