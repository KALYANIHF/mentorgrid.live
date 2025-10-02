const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MentorGrid API",
      version: "1.0.0",
      description: "API documentation for MentorGrid application",
    },
    servers: [
      {
        url: "http://localhost:4033/api/v1",
        description: "Development server",
      },
    ],
    components: {
      //   securitySchemes: {
      //     bearerAuth: {
      //       type: "http",
      //       scheme: "bearer",
      //       bearerFormat: "JWT",
      //     },
      //   },
    },
    security: [
      //   {
      //     bearerAuth: [],
      //   },
    ],
  },
  apis: ["./routes/*.js", "./models/*.js"], // where your route files are
};

const swaggerSpec = swaggerJsDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;
