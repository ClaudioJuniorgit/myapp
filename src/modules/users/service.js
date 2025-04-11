export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async findMany() {
    return await this.userRepository.findMany();
  }

  async findOne(numberId) {
    return await this.userRepository.findOne(numberId);
  }

  async create(name, age) {
    return await this.userRepository.create(name, age);
  }

  async update(name, age, numberId) {
    return await this.userRepository.update(name, age, numberId);
  }

  async delete(numberId) {
    const userExists = await this.userRepository.findOne(numberId);
    if (!userExists) {
      throw new Error('User not found');
    }
    return await this.userRepository.delete(numberId);
  }
}
