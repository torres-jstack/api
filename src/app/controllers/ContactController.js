const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(contact);
  }

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }
    const contactExisists = await ContactRepository.findByEmail(email);
    if (contactExisists) {
      console.log(`Entrei aqui, hein: ${contactExisists}`);

      return res.status(400).json({ error: 'This email is already been taken' });
    }
    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });
    res.json(contact);
  }

  update() {
    // Editar um registro
  }

  async delete(req, res) {
    const { id } = req.params;
    const contact = await ContactRepository.findById(id);
    if (!contact) {
      return res.status(404).json({ error: 'User not found' });
    }
    await ContactRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
