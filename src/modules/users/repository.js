import { AppDataSource } from '../../data-source.js';
import { User } from './entity.js';

export class UserRepository {
  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  async findMany() {
    return await this.repository.find();
  }
  async findOne(numberId) {
    return await this.repository.findOneBy(numberId);
  }

  async create(name, age) {
    const newUser = this.repository.create({
      name,
      age,
    });

    return await this.repository.save(newUser);
  }

  async update(name, age, numberId) {
    return await this.repository.update(numberId.id, { name, age });
  }

  async delete(numberId) {
    return await this.repository.delete(numberId);
  }
}
