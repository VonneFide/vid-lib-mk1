import {createBrowserRouter} from "react-router-dom";

// Pages
import App from '../../src/App';
import VideoLibrary from "../pages/video-menu";
import PlayVid from "../pages/[id]/player-page";


const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <App />,
        children: [],
      },
      {
        path: "/home",
        element: <VideoLibrary />,
        children: [],
      },
      {
        path: "/video/play/:id",
        element: <PlayVid />,
        children: [],
      },
    ],
    { basename: "/vid-lib-mk1" } // the basename of this project ***essential***

);

export default router;