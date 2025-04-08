import dotenv from 'dotenv';

dotenv.config();
import app from './app';

import { setupSwagger } from 'config';

const PORT = process.env.PORT || 3000;

setupSwagger(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
