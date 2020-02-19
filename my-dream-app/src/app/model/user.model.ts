import {Address} from './address.model';
import {Role} from './role.model';
import {Car} from './car.model';


export class User {

  id: number;
  username: string;
  enabled: boolean;
  accountExpired: boolean;
  credentialExpired: boolean;
  accountLocked: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  driver: boolean;
  roles: Role[];
  addresses: Address[];
  cars: Car[];

  constructor() {
    this.id = null;
    this.username = null;
    this.enabled = null;
    this.accountExpired = null;
    this.credentialExpired = null;
    this.accountLocked = null;
    this.firstName = null;
    this.lastName = null;
    this.phone = null;
    this.email = null;
    this.driver = null;
    this.roles = null;
    this.addresses = null;
    this.cars = null;
  }

}
