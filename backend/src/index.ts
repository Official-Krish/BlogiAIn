import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { bookRouter } from './routes/blog';
import { cors } from 'hono/cors'
import { bookmarkRouter } from './routes/bookmarks';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();
app.use('/*', cors())
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', bookRouter)
app.route('/api/v1/bookmark', bookmarkRouter)

export default app
