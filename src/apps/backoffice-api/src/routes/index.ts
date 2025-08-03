import { Router } from 'express';

const backofficeRoutes = Router();

// Rota atual do backoffice-api
backofficeRoutes.get('/', (req, res) => {
    res.send({ message: 'Hello from Backoffice API', service: 'backoffice-api' });
});

// Aqui você pode adicionar mais rotas do backoffice
backofficeRoutes.get('/users', (req, res) => {
    res.json({
        users: [
            { id: 1, name: 'Admin User', role: 'admin' },
            { id: 2, name: 'Manager User', role: 'manager' }
        ]
    });
});

export { backofficeRoutes };
