import { faker } from '@faker-js/faker';

class Company {
  constructor() {
    this._id = Company.incrementId();
    // this._id = faker.datatype.uuid();
    this.name = faker.company.companyName();
    this.address = faker.address.streetAddress();
    this.street = faker.address.streetName();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.postalCode = faker.address.zipCode();
    this.country = faker.address.country();
  }

  static incrementId() {
    if (!this.latestId) {
      this.latestId = 1;
    } else {
      this.latestId++;
    }

    return this.latestId;
  }
}

export default Company;