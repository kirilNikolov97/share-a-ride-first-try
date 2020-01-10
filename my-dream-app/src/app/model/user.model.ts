import {Address} from './address.model';
import {Role} from './role.model';

export class User {

  id: number;
  username: string;
  password: string;
  enabled: boolean;
  accountExpired: boolean;
  credentialExpired: boolean;
  accountLocked: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  roles: Role[];
  addresses: Address[];

  constructor() {
    this.id = null;
    this.username = null;
    this.password = null;
    this.enabled = null;
    this.accountExpired = null;
    this.credentialExpired = null;
    this.accountLocked = null;
    this.firstName = null;
    this.lastName = null;
    this.phone = null;
    this.email = null;
    this.roles = null;
    this.addresses = null;
  }

}
