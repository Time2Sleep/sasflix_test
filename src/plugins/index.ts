import {App} from 'vue';
import router from '@/plugins/router';
import pinia from '@/plugins/pinia';

export const definePlugins = (app: App): App => {
    app.use(router);
    app.use(pinia);

    return app;
};