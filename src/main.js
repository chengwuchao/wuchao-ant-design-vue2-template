// 启动装载vue

import Vue from 'vue';
import router from './router';
import { Menu, Layout, Icon, Button, Form, Input, Card, Checkbox } from 'ant-design-vue';
import App from './App.vue';

Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Card);
Vue.use(Checkbox);

new Vue({ el: '#app', router, template: '<App/>', components: { App } });
