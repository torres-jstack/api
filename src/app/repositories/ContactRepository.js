const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '1234567890',
    category: v4(),
  },
];
class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
