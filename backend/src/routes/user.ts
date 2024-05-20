import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput } from "@krishanand/medium-common"


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (success){
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
        },
      });
    
      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
      return c.json({
        jwt: token
      })
    }else{
      c.status (411);
      return c.json({
        msg : "inputs are not correct"
      });
    }
    
})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
    //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success){
      c.status (411);
      return c.json({
        msg : "inputs are not correct"
      })
    }
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
    password: body.password
        }
    });

    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
})


userRouter.use("/*", async (c, next) => {
  try {
    const header = c.req.header("authorization") || "";
    const token = header.split(" ")[1];
    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    } else {
      c.status(403);
      return c.json({ error: "Unauthorized " });
    }
  } catch (e) {
    c.status(403);
    return c.json({
      error: "Credentials failed",
    });
  }
});


userRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userId = await c.req.param("id");
  const authorizedUserId = c.get("userId");
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      c.status(400);
      return c.json({ error: "User does not exist" });
    }
    return c.json({
      user,
      isAuthorizedUser: authorizedUserId === userId,
      message: "Found user",
    });
  } catch (ex) {
    return c.status(403);
  }
});