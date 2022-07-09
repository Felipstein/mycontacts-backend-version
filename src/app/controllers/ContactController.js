const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros

    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not found' });
    }

    response.send(contact);
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro

    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);
    // 204: No Content: Requisição deu certo, porém sem corpo.
    response.sendStatus(204);
  }
}

// Design Pattern: Singleton (ter apenas uma instância de um objeto em uma aplicação)
// Todo mundo que usar esse modulo, usem a mesma instância.
module.exports = new ContactController();
