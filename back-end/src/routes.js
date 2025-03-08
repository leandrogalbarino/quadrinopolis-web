import { Router } from 'express';
import WorkController from './app/controllers/WorkController';
import ChapterController from './app/controllers/ChapterController';
import CommentRepository from './app/repositories/CommentRepository';

const routes = Router();

// ROTAS
// Works
routes.post('/works', WorkController.store);
routes.get('/works', WorkController.index);
routes.get('/works/:id', WorkController.showById);
routes.get('/works/name/:name', WorkController.showByName);
routes.put('/works/:id', WorkController.update);
routes.delete('/works/:id', WorkController.delete);

// Comments
routes.post('/comments', CommentRepository.store);
routes.get('/comments', CommentRepository.index);
routes.get('/comments/:id', CommentRepository.showById);
routes.get('/comments/work/:id', CommentRepository.showByWorkId);
routes.put('/comments/:id', CommentRepository.update);
routes.delete('/comments/:id', CommentRepository.delete);

// Chapters
routes.post('/chapters/', ChapterController.store);
routes.get('/chapters/', ChapterController.index);
routes.get('/chapters/:id', ChapterController.showById);
routes.get('/chapters/work/:id', ChapterController.showByWorkId);
routes.put('/chapters/:id', ChapterController.update);
routes.delete('/chapters/:id', ChapterController.delete);

export default routes;  