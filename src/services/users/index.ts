import { api } from "../axiosConfig";

const path = '/users';

export const usersServices = () => ({
    // Método para criar um usuário
    create: async (data: Object) => {
        const response = await api.post(`${path}/create`, data);
        return response;
    },

    // Método para atualizar um usuário
    update: async (id: string, data: Object) => {
        const response = await api.put(`${path}/update/${id}`, data);
        return response;
    },

    // Método para deletar um usuário
    delete: async (id: string) => {
        const response = await api.delete(`${path}/delete/${id}`);
        return response;
    },

    // Método para exibir um usuário específico
    show: async (id: string) => {
        const response = await api.get(`${path}/show/${id}`);
        return response;
    },

    // Método para listar todos os usuários
    list: async () => {
        const response = await api.get(`${path}/list`);
        return response;
    },
});