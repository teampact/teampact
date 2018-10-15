import axios from 'axios';

axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('[name=csrf-token]').content;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default axios;
