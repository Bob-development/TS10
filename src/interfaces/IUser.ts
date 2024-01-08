import { UserType } from "../../../InterPlastServiceStore/src/enums/UserType";

export interface IUser {
  getId(): string;
  getLogin(): string;
  getPassword(): string;
  getUserType(): UserType;
}
