import { consult } from '../database/connection.js';

class WorkRepository{
  create(data) {
    const sql = 'INSERT INTO works SET ?;'
    const messageError = 'Não foi possível criar.';
    return consult(sql, data, messageError)
  }

  findAll() {
    const sql = 'SELECT * FROM works;'
    const messageError = 'Não foi possível localizar nenhuma obra.';
    return consult(sql, messageError);
  }

  findById(id) {
    const sql = 'SELECT * FROM works WHERE idWork=?;'
    const messageError = `Não foi possível localizar uma obra com id=${id}.`;
    return consult(sql, id, messageError);
  }

  findByName(name) {
    const sql = 'SELECT * FROM works WHERE name like ?';
    const messageError = `Nenhuma obra localizada com o nome ${name}`;
    return consult(sql, [`${name}%`], messageError);
  }

  update(id, data) {
    const sql = 'UPDATE works SET ? WHERE idWork=?;'
    const messageError = `Não foi possível atualizar a obra com id=${id}`;
    return consult(sql, [data, id], messageError);
  }

  delete(id) {
    const sql = 'DELETE FROM works WHERE idWork=?;'
    const messageError = `Não foi possível deletar a obra com id=${id}`;
    return consult(sql, id, messageError);
  }
}

export default new WorkRepository();