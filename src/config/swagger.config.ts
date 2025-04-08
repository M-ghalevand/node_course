import { Express } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerSpecV1 = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'node course Version 1',
      version: '1.0.0',
      description: 'API documentation for the node course'
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server'
      }
    ]
  },
  apis: ['./src/components/v1/*/controllers/*.ts']
});

export function setupSwagger(app: Express) {
  app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecV1));
}
