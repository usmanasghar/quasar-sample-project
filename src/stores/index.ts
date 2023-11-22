import {createPinia,} from 'pinia'
import {useExampleStore} from '../stores/example.store'

const store = createPinia();
export const exampleStore = useExampleStore(store);
export const useStore = () => store;
export default store;
