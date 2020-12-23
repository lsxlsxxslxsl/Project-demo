import { ref, computed } from 'vue';

export default function useRepositoryNameSearch(userList: any) {
    const searchQuery = ref('');
    const userListMatchSearchQuery = computed(() => {
        return userList.value.filter((item: any) => item.name.includes(searchQuery.value));
    });

    return {
        searchQuery,
        userListMatchSearchQuery,
    };
}
