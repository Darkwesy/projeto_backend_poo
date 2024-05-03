import Express from 'express';
import cors from 'cors';
import { cadastroRouter } from './controllers/cadastrarUsuario.js';
import { loginRouter } from './controllers/loginUsuario.js';

const app = Express();
const PORT = process.env.PORT ?? 3000;

app.use(Express.json());
app.use(cors());

app.use('/cadastrarPessoa', cadastroRouter);
app.use('/login', loginRouter);

app.get('/', (request, response) => {
  response.json({ message: 'Welcome!' });
});

app.listen(PORT, () => {
  console.clear();
  console.log(`API online at http://localhost:${PORT}`);
});
