import {createBrowserRouter} from "react-router-dom";

// Pages
import App from '../../src/App';
import VideoLibrary from "../pages/video-menu";


const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [],
      },
      {
        path: "/video/home",
        element: <VideoLibrary />,
        children: [],
      },
    ],
    { basename: "/vid-lib-mk1" } // the basename of this project ***essential***

);

export default router;