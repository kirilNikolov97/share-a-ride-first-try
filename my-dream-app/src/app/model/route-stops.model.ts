import {User} from './user.model';
import {Address} from './address.model';
import {PassengerEnum} from './passenger-enum.model';

export class RouteStop {

  id: number;
  routeId: number;
  addressId: Address;
  userId: User;
  passengerEnum: PassengerEnum;

  constructor() {
    this.id = null;
    this.routeId = null;
    this.addressId = null;
    this.userId = null;
    this.passengerEnum = null;
  }

}
