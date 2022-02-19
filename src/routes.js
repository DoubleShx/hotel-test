import { Page404 } from "./pages/404";
import LoginPage from "./pages/loginPage/login";
import PushNotifications from "./pages/pushNotifications/pushNotifications";

const routes = [    
    { path: '/', exact: true, name: 'Home' },
    { path: '/login', name: 'LoginPage', element: LoginPage },
    { path: '/pushnotifications', name: 'LoginPage', element: PushNotifications },
    {path: '*', name: "404", element: Page404}
]

export default routes;