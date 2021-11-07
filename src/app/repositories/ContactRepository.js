const { v4 } = require('uuid');

const db = require('../../database');

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

  findByEmail(email) {
    const findedContact = contacts.find((contact) => contact.email === email);
    return new Promise((resolve) => resolve(findedContact));
  }

  delete(id) {
    contacts = contacts.filter((con) => con.id !== id);
    return new Promise((resolve) => resolve());
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, category_id]);
    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    const updatedContact = {
      id, name, email, phone, category_id,
    };
    contacts = contacts.map((contact) => {
      if (contact.id === id) {
        return updatedContact;
      }
      return contact;
    });
    return new Promise((resolve) => resolve(updatedContact));
  }
}

module.exports = new ContactRepository();
