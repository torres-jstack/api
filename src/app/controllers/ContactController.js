class ContactController {
  index(req, res) {
    // Listar todos os registros
    res.send('Send from contact controller');
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
