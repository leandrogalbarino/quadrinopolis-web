import WorkRepository from '../repositories/WorkRepository.js';

class WorkController {

  async index(request, response) {
    const row = await WorkRepository.findAll();
    response.json(row);
  }

  async showById(request, response) {
    const id = request.params.id;
    const row = await WorkRepository.findById(id);
    response.json(row)
  }

  async showByName(request, response) {
    const name = request.params.name;
    const row = await WorkRepository.findByName(name);
    response.json(row);
  }

  async store(request, response) {
    const data = request.body;
    const row = await WorkRepository.create(data);
    response.json(row);
  }

  async update(request, response) {
    const id = request.params.id;
    const data = request.body;
    const row = await WorkRepository.update(id, data);
    response.json(row)
  }

  async delete(request, response) {
    const id = request.params.id;
    const row = await WorkRepository.delete(id);
    response.json(row)
  }

}

export default new SelectionController();