import { Page404 } from "./pages/404";
import HomePage from "./pages/home/homePage";
import { MeetingRoomsPage } from "./pages/meeting_rooms/meeting_rooms";
import { SingleRoom } from "./pages/rooms/SingleRoom";
import { RoomsPage } from "./pages/rooms/rooms";
import { SingleMeetingRoom } from "./pages/meeting_rooms/SingleMeetingRoom";
import { Contacts } from "./pages/contacts/contacts";
import { Reservation } from "./components/reservation/reservation";

const routes = [  
    { path: '/', exact: true, name: 'Главная', element: HomePage },
    { path: '/contacts', exact: true, name: 'Контакты', element: Contacts },
    { path: '/reservation', exact: true, name: 'Контакты', element: Reservation },
    { path: '/rooms', exact: true, name: 'Комнаты', element: RoomsPage },
    { path: '/room/:id', exact: true, name: 'Заказать Комнату', element: SingleRoom },    
    { path: '/meeting_rooms', exact: true, name: 'Зал для Конференций', element: MeetingRoomsPage },    
    { path: '/meeting_room/:id', exact: true, name: 'Заказать Зал', element: SingleMeetingRoom },    
    {path: '*', name: "404", element: Page404}
]

export default routes;