import express from 'express';
import cors from 'cors';
import routes from './routes/auth.routes.ts'
import morgan from 'morgan'

const app = express();
app.use(express.json());
app.use(cors());
// app.use(morgan("dev"))

app.use("/api", routes);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app
