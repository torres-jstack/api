const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '1234567890',
    category: uuid(),
  },
];
class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
