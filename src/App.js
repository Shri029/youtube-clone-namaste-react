import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import { Head } from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';


/**
 * 
 * Head
 * Body
 *  Sidebar
 *    Menu
 *  MainContainer
 *    ButtonList
 *    VideoContainer
 *      VideoCard
 */

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element : <MainContainer/>,
    },
    {
      path: "watch",
      element: <WatchPage/>,
    },
   ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="text-xl">
        <Head/>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
