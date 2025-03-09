import { consult } from '../database/connection.js';

class WorkRepository{
  create(data) {
    const sql = 'INSERT INTO works SET ?;'
    const mensageError = 'Não foi possível criar.';
    return consult(sql, data, mensageError)
  }

  findAll() {
    const sql = 'SELECT * FROM works;'
    const mensageError = 'Não foi possível localizar nenhuma obra.';
    return consult(sql, mensageError);
  }

  findById(id) {
    const sql = 'SELECT * FROM works WHERE idWork=?;'
    const mensageError = `Não foi possível localizar uma obra com id=${id}.`;
    return consult(sql, id, mensageError);
  }

  findByName(name) {
    const sql = 'SELECT * FROM works WHERE name=?';
    const mensageError = `Nenhuma obra localizada com o nome ${name}`;
    return consult(sql, name, mensageError);
  }

  update(id, data) {
    const sql = 'UPDATE works SET ? WHERE idWork=?;'
    const mensageError = `Não foi possível atualizar a obra com id=${id}`;
    return consult(sql, [data, id], mensageError);
  }

  delete(id) {
    const sql = 'DELETE FROM works WHERE idWork=?;'
    const mensageError = `Não foi possível deletar a obra com id=${id}`;
    return consult(sql, id, mensageError);
  }
}

export default new WorkRepository();