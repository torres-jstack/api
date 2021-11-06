const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '1234567890',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@mail.com',
    phone: '1234567890',
    category: v4(),
  },
];
class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    const findedContact = contacts.find((contact) => contact.id === id);
    return new Promise((resolve) => resolve(findedContact));
  }

  delete(id) {
    contacts = contacts.filter((con) => con.id !== id);
    return new Promise((resolve) => resolve());
  }
}

module.exports = new ContactRepository();
