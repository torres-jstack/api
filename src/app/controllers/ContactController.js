const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const contacts = await ContactRepository.findAll();
    res.json(contacts);
  }

  show() {
    // Obter UM registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
