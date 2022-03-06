import { Page404 } from "./pages/404";
import HomePage from "./pages/home/homePage";
import { MeetingRoomsPage } from "./pages/meeting_rooms/meeting_rooms";
import { SingleRoom } from "./pages/rooms/SingleRoom";
import { RoomsPage } from "./pages/rooms/rooms";

const routes = [    
    { path: '/', exact: true, name: 'Home' },
    { path: '/home', exact: true, name: 'HomenPage', element: HomePage },
    { path: '/rooms', exact: true, name: 'HomenPage', element: RoomsPage },
    { path: '/meeting_rooms', exact: true, name: 'HomenPage', element: MeetingRoomsPage },    
    { path: '/room/:id', exact: true, name: 'Room', element: SingleRoom },    
    {path: '*', name: "404", element: Page404}
]

export default routes;