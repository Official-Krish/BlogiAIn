import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'
import { bookmarkRouter } from './routes/bookmarks';
import { clapRouter } from './routes/clap';
import { tagRouter } from './routes/tag';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();
app.use('/*', cors())
app.route('/api/v1/user', userRouter)
app.route('/api/v1/blog', blogRouter)
app.route('/api/v1/bookmark', bookmarkRouter)
app.route('/api/v1/clap', clapRouter)
app.route('/api/v1/tag', tagRouter)

export default app
