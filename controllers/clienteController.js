const Cliente = require('../models/Cliente');

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los clientes', error });
    }
};

// Obtener un cliente por ID
exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el cliente', error });
    }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
    const { nombre, nit } = req.body;
    try {
        const nuevoCliente = await Cliente.create({ nombre, nit });
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el cliente', error });
    }
};

// Actualizar un cliente
exports.updateCliente = async (req, res) => {
    const { nombre, nit } = req.body;
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.update({ nombre, nit }); 
        res.status(200).json(cliente); 
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente', error });
    }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el cliente', error });
    }
};