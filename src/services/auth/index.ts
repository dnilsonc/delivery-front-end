import { api } from "../axiosConfig";

const path = '/sessions';

export const authServices = () => ({
    // Método para criar um usuário
    create: async (data: Object) => {
        console.log('cachorada')

        const response = await api.post(`${path}`, data);
        return response.data;
    },
});