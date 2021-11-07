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

      return res.status(400).json({ error: 'This email is already in use' });
    }
    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });
    res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const contactIdExisists = await ContactRepository.findById(id);
    if (!contactIdExisists) {
      return res.status(404).json({ error: "Contact don't exists" });
    }
    const contactEmailExisists = await ContactRepository.findByEmail(email);
    if (contactEmailExisists && contactEmailExisists.id !== id) {
      return res.status(400).json({ error: 'This email is already in use' });
    }

    const contact = await ContactRepository.update(id, {
      name, email, phone, category_id,
    });

    res.json(contact);
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
