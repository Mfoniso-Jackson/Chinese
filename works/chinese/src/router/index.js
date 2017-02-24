import Vue from 'vue';
import Router from 'vue-router';
// import Hello from 'components/Hello';
import Home from 'components/home/Home';

Vue.use(Router);

export default new Router({
	mode:'history',
	scrollBehaviour: function(to,from,foo){
		if(to.hash){
				return {selector: to.hash}
		} else {
			return {x:0,Y:0}
		}
	},
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ],
});
