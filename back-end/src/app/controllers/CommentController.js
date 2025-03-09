import CommentRepository from "../repositories/CommentRepository.js";

class CommentController {

  async index(request, response) {
    const row = await CommentRepository.findAll();
    response.json(row);
  }

  async showById(request, response) {
    const id = request.params.id;
    const row = await CommentRepository.findById(id);
    response.json(row)
  }

  async showByWorkId(request, response) {
    const id = request.params.id;
    const row = await CommentRepository.findByWorkId(id);
    response.json(row);
  }

  async store(request, response) {
    const data = request.body;
    const row = await CommentRepository.create(data);
    response.json(row);
  }

  async update(request, response) {
    const id = request.params.id;
    const data = request.body;
    const row = await CommentRepository.update(id, data);
    response.json(row)
  }

  async delete(request, response) {
    const id = request.params.id;
    const row = await CommentRepository.delete(id);
    response.json(row)
  }

}

export default new CommentController();