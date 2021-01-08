import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vant from 'vant';
import 'vant/lib/index.css';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';
import { CountDown } from 'vant';
import { Tab, Tabs } from 'vant';
import { Divider } from 'vant';
import { Sidebar, SidebarItem } from 'vant';
import { Toast } from 'vant';
import { NavBar } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Sku } from 'vant';
import { ShareSheet } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(ShareSheet);
Vue.use(Sku);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Divider);
Vue.use(Tab);
Vue.use(Tabs)
Vue.use(CountDown);
Vue.use(NoticeBar);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Vant);
require("./mock")
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')