export class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async handle(req, res) {
    const data = await this.userService.findMany();
    return res.json(data);
  }

  async handleOne(req, res) {
    const data = await this.userService.findOne({ id: +req.params.id });
    return res.json(data);
  }

  async handleCreate(req, res) {
    const { name, age } = req.body;

    if (typeof name != 'string') {
      return res.status(400).json({ code: 400, message: 'name must be a string.' });
    }
    if (typeof age != 'number') {
      return res.status(400).json({ code: 400, message: 'age must be a number.' });
    }
    const data = await this.userService.create(name, age);
    return res.json(data);
  }

  async handleUpdate(req, res) {
    const { name, age } = req.body;
    console.log(name);
    if ((typeof name !== 'string' && name !== undefined) || name == '') {
      return res.status(400).json({ code: 400, message: 'name must be a string.' });
    }
    if ((typeof age != 'number' && age !== undefined) || age <= 0) {
      return res.status(400).json({ code: 400, message: 'age must be a valid number.' });
    }
    const data = await this.userService.update(name, age, { id: +req.params.id });
    return res.json(data);
  }

  async handleDelete(req, res) {
    try {
      const data = await this.userService.delete({ id: +req.params.id });
      return res.json(data);
    } catch (error) {
      return res.status(404).json({ code: 404, message: error.message });
    }
  }
}
