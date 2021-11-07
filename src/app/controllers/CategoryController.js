const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const categories = await CategoryRepository.findAll();
    res.json(categories);
  }

  show(req, res) {
    res.send('ok - show');
  }

  async store(req, res) {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const category = await CategoryRepository.create({ name });
    res.json(category);
  }

  update(req, res) {
    res.send('ok - update');
  }

  delete(req, res) {
    res.send('ok - delete');
  }
}

module.exports = new CategoryController();
