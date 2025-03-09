import { Router } from 'express';
import WorkController from './app/controllers/WorkController.js';
import ChapterController from './app/controllers/ChapterController.js';
import CommentController from './app/controllers/CommentController.js';

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
routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);
routes.get('/comments/:id', CommentController.showById);
routes.get('/comments/work/:id', CommentController.showByWorkId);
routes.put('/comments/:id', CommentController.update);
routes.delete('/comments/:id', CommentController.delete);

// Chapters
routes.post('/chapters/', ChapterController.store);
routes.get('/chapters/', ChapterController.index);
routes.get('/chapters/:id', ChapterController.showById);
routes.get('/chapters/work/:id', ChapterController.showByWorkId);
routes.put('/chapters/:id', ChapterController.update);
routes.delete('/chapters/:id', ChapterController.delete);

export default routes;  