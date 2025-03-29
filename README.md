
# 🎯 API de Clientes con Express.js y MySQL

Esta API permite gestionar clientes mediante operaciones CRUD utilizando **Express.js**, **Sequelize** y **MySQL**. También incluye documentación interactiva con Swagger.

---

## 🚀 **Características**
✅ CRUD completo para clientes.  
✅ Base de datos MySQL conectada mediante Sequelize.  
✅ Documentación interactiva con Swagger para probar los endpoints.  

---

## 📚 **Instalación y Uso**

### 1. Clonar el repositorio
```bash
git clone https://github.com/MrxSteve/CrudClientesExpressDS2.git
```

### 2. Instalar dependencias
```bash
cd Clase6-mt22i04001
npm install
```

---

## ⚙️ **Ejecutar el Proyecto**

1. Iniciar el servidor:
```bash
npm start
```

2. Acceder a la documentación Swagger:
```
http://localhost:3000/api-docs
```

---

## 🔥 **Endpoints Principales**

- `GET /api/clientes` → Obtener todos los clientes.  
- `GET /api/clientes/:id` → Obtener cliente por ID.  
- `POST /api/clientes` → Crear un nuevo cliente.  
- `PUT /api/clientes/:id` → Actualizar un cliente existente.  
- `DELETE /api/clientes/:id` → Eliminar un cliente.  

---

## 📄 **Documentación Swagger**

Accede a la documentación Swagger para probar los endpoints:
👉 [Swagger UI - Documentación](http://localhost:3000/api-docs)

---

## 🛠️ **Tecnologías Utilizadas**

- Express.js
- Sequelize ORM
- MySQL
- Swagger para documentación
