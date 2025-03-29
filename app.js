const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');
const sequelize = require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/api/clientes', clienteRoutes);

// Conectar a la bd
sequelize.sync({ force: false })
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.error('Error al conectar la bd:', error));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
});