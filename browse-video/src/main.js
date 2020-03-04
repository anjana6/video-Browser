import Vue from 'vue';
import App from './App';


new Vue({
    

    // render: function(createElement){
    //     return createElement(App);
    // }
    // ***********usual way(createElement = h)
    // render: function(h){
    //     return h(App);
    // }

    //************* */ now using method
    render: (h) => h(App)
}).$mount('#app');