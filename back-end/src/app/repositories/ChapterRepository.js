import { consult } from '../database/connection.js'

class CommentRepository {

  create(data) {
    const sql = 'INSERT INTO chapters SET ?';
    const mensageError = 'Não foi possível inserir capítulo';
    return consult(sql, data, mensageError);
  }

  findAll() {
    const sql = 'SELECT * FROM chapters';
    const mensageError = 'Não foi possível encontrar nenhum capítulo';
    return consult(sql, mensageError);
  }

  
  findById(id) {
    const sql = 'SELECT * FROM chapters WHERE idChapter=?';
    const mensageError = 'Não foi possível encontrar o capítulo';
    return consult(sql, id, mensageError);
  }
  
  findByWorkId(idWork) {
    const sql = 'SELECT * FROM chapters WHERE idWork=?';
    const mensageError = 'Não foi possível encontrar capítulos';
    return consult(sql, idWork, mensageError);
  }
  
  update(id, data) {
    const sql = 'UPDATE chapters SET ? WHERE idChapter=?';
    const mensageError = 'Erro ao atualizar comentário';
    return consult(sql, [data, id], mensageError); 
  }

  delete(id) {
    const sql = 'DELETE FROM chapters WHERE idChapter=?';
    const mensageError = 'Erro ao atualizar comentário';
    return consult(sql, id, mensageError); 
  }


}

export default new CommentRepository();