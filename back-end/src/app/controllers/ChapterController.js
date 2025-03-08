import ChapterRepository from '../repositories/ChapterRepository.js';

class ChapterController{

  async index(request, response) {
    const row = await ChapterRepository.findAll();
    response.json(row);
  }

  async showByWorkId(request, response) {
    const id = request.params.workId;
    const row = await ChapterRepository.findByWorkId(id);
    response.json(row)
  }

  async showById(request, response) {
    const id = request.params.id;
    const row = await ChapterRepository.findById(id);
    response.json(row);
  }

  async store(request, response) {
    const data = request.body;
    const row = await ChapterRepository.create(data);
    response.json(row);
  }

  async update(request, response) {
    const id = request.params.id;
    const data = request.body;
    const row = await ChapterRepository.update(id, data);
    response.json(row)
  }

  async delete(request, response) {
    const id = request.params.id;
    const row = await ChapterRepository.delete(id);
    response.json(row)
  }
}

export default new ChapterController();