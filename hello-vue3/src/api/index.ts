import { userInfo } from '../constant';

const api = {
    getUserList(id: number): Promise<any[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(userInfo[id]);
            }, 500);
        });
    },
};

export default api;
