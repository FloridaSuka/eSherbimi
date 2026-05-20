const swaggerJsdoc = require('swagger-jsdoc');
const { serviceDefinitions } = require('./models');

function buildSwaggerDocument() {
  const paths = {
    '/api/health': {
      get: {
        tags: ['System'],
        summary: 'Health check',
        responses: { 200: { description: 'API is healthy' } }
      }
    },
    '/api/auth/register': {
      post: {
        tags: ['Authentication'],
        summary: 'Register a tenant user',
        requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/RegisterRequest' } } } },
        responses: { 201: { description: 'Registered' } }
      }
    },
    '/api/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'Login and receive JWT token',
        requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/LoginRequest' } } } },
        responses: { 200: { description: 'Authenticated' } }
      }
    },
    '/api/auth/me': {
      get: {
        tags: ['Authentication'],
        security: [{ bearerAuth: [] }],
        summary: 'Current user profile',
        responses: { 200: { description: 'Current user' } }
      }
    },
    '/api/ai/chat': {
      post: {
        tags: ['AI'],
        security: [{ bearerAuth: [] }],
        summary: 'Queue an OpenAI chatbot request',
        requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', properties: { message: { type: 'string' } } } } } },
        responses: { 202: { description: 'Background job queued' } }
      }
    },
    '/api/ai/analyze': {
      post: {
        tags: ['AI'],
        security: [{ bearerAuth: [] }],
        summary: 'Queue a text analysis request',
        requestBody: { required: true, content: { 'application/json': { schema: { type: 'object', properties: { text: { type: 'string' } } } } } },
        responses: { 202: { description: 'Background job queued' } }
      }
    },
    '/api/ai/history': {
      get: {
        tags: ['AI'],
        security: [{ bearerAuth: [] }],
        summary: 'List AI interactions for the current tenant',
        responses: { 200: { description: 'AI interaction history' } }
      }
    },
    '/api/jobs': {
      get: {
        tags: ['System'],
        security: [{ bearerAuth: [] }],
        summary: 'List latest background jobs',
        responses: { 200: { description: 'Job list' } }
      }
    }
  };

  serviceDefinitions.forEach((definition) => {
    const base = `/api/services/${definition.key}`;
    paths[base] = {
      get: {
        tags: ['Services'],
        security: [{ bearerAuth: [] }],
        summary: `Search and filter ${definition.publicName} records`,
        parameters: [
          { name: 'q', in: 'query', schema: { type: 'string' } },
          { name: 'status', in: 'query', schema: { type: 'string' } },
          { name: 'limit', in: 'query', schema: { type: 'integer' } },
          { name: 'offset', in: 'query', schema: { type: 'integer' } }
        ],
        responses: { 200: { description: 'Filtered list' } }
      },
      post: {
        tags: ['Services'],
        security: [{ bearerAuth: [] }],
        summary: `Create ${definition.publicName}`,
        requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/ServiceRecordInput' } } } },
        responses: { 201: { description: 'Created' } }
      }
    };
    paths[`${base}/{id}`] = {
      get: {
        tags: ['Services'],
        security: [{ bearerAuth: [] }],
        summary: `Get ${definition.publicName} by id`,
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Record' }, 404: { description: 'Not found' } }
      },
      put: {
        tags: ['Services'],
        security: [{ bearerAuth: [] }],
        summary: `Update ${definition.publicName}`,
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        requestBody: { required: true, content: { 'application/json': { schema: { $ref: '#/components/schemas/ServiceRecordInput' } } } },
        responses: { 200: { description: 'Updated' } }
      },
      delete: {
        tags: ['Services'],
        security: [{ bearerAuth: [] }],
        summary: `Delete ${definition.publicName}`,
        parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { 200: { description: 'Deleted' } }
      }
    };
  });

  return swaggerJsdoc({
    definition: {
      openapi: '3.0.3',
      info: {
        title: 'SSH Gr32 Electronic Services API',
        version: '2.0.0',
        description: 'REST API with multi-tenancy, role authorization, caching, background jobs and OpenAI integration.'
      },
      servers: [{ url: 'http://127.0.0.1:5001' }],
      components: {
        securitySchemes: {
          bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
        },
        schemas: {
          RegisterRequest: {
            type: 'object',
            required: ['tenantName', 'tenantSlug', 'name', 'email', 'password'],
            properties: {
              tenantName: { type: 'string' },
              tenantSlug: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
              password: { type: 'string' },
              role: { type: 'string', enum: ['admin', 'manager', 'citizen'] }
            }
          },
          LoginRequest: {
            type: 'object',
            required: ['email', 'password'],
            properties: { email: { type: 'string' }, password: { type: 'string' } }
          },
          ServiceRecordInput: {
            type: 'object',
            required: ['title'],
            properties: {
              referenceNo: { type: 'string' },
              title: { type: 'string' },
              status: { type: 'string' },
              amount: { type: 'number' },
              metadata: { type: 'object' }
            }
          }
        }
      },
      paths
    },
    apis: []
  });
}

module.exports = { buildSwaggerDocument };
