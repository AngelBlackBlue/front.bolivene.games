import Home from '@/pages/Home';
import About from '@/pages/AboutUs';


interface Route {
  path: string;
  element: React.ComponentType;
}

const routes: Route[] = [
  { path: '/', element: Home },
  { path: '/about', element: About  },

];

export default routes;
