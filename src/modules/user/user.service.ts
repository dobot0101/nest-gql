import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      firstName: 'dohyun',
      lastName: 'lee',
    },
    {
      id: 2,
      firstName: 'dohyun',
      lastName: 'lee',
    },
    {
      id: 3,
      firstName: 'dohyun',
      lastName: 'lee',
    },
  ];

  findAll() {
    return this.users;
  }

  findOneById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
