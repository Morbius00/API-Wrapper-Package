import { fetchData } from '../apiClient.js';

export async function fetchUsers() {
  return fetchData('/users');
}
