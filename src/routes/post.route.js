import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost
} from '../controllers/post.controller.js';
import { Router } from 'express';

const router = new Router();

router.get('/all', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.post('/create', createPost);

export default router;
