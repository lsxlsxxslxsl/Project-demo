import { ref, onMounted, watch } from 'vue';
import api from '../api';

export default function useUserRepositories(id: any) {
    const userList: any = ref([]);
    const getUserList = async () => {
        userList.value = await api.getUserList(id.value);
    };

    onMounted(getUserList);

    watch(id, getUserList);

    return {
        userList,
        getUserList,
    };
}
