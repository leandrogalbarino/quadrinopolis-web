import { consult } from '../database/connection.js'

class CommentRepository {

  create(data) {
    const sql = 'INSERT INTO comments SET ?';
    const mensageError = 'Não foi possível inserir comentário';
    return consult(sql, data, mensageError);
  }

  findByWorkId(idWork) {
    const sql = 'SELECT * FROM comments WHERE idWork=?';
    const mensageError = 'Não foi possível encontrar comentários';
    return consult(sql, idWork, mensageError);
  }

  findById(id) {
    const sql = 'SELECT * FROM comments WHERE idComment=?';
    const mensageError = 'Não foi possível encontrar comentários';
    return consult(sql, id, mensageError);
  }

  update(id, data) {
    const sql = 'UPDATE comments SET ? WHERE idComment=?';
    const mensageError = 'Erro ao atualizar comentário';
    return consult(sql, [data, id], mensageError); 
  }

  delete(id) {
    const sql = 'DELETE FROM comments WHERE idComment=?';
    const mensageError = 'Erro ao atualizar comentário';
    return consult(sql, id, mensageError); 
  }


}

export default new CommentRepository();