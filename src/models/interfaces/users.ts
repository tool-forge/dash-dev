import { DatabaseBaseInterface } from '.';
import { UserRoleEnum } from '../enums';

export interface CreateUserInterface {
  email: string;
  org: string;
  role: UserRoleEnum;
}

export interface UpdateUserInterface extends CreateUserInterface {
  id: number;
  active: boolean;
}

export interface UserInterface
  extends DatabaseBaseInterface,
    CreateUserInterface {
  active: boolean;
}
