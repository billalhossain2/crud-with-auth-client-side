import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home/Home";
import PostedJobs from "../pages/PostedJobs/PostedJobs";
import BidRequests from "../pages/BidRequests/BidRequests";
import Bids from "../pages/Bids/Bids";
import User from "../pages/User/User";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import AddJob from "../pages/AddJob/AddJob";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/add-job",
            element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path:"/update-job/:jobId",
            element:<UpdateJob></UpdateJob>
        },
        {
            path:"/my-posted-jobs",
            element:<PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>
        },
        {
            path:"/bid-requests",
            element:<PrivateRoute><BidRequests></BidRequests></PrivateRoute>
        },
        {
            path:"/my-bids",
            element:<PrivateRoute><Bids></Bids></PrivateRoute>
        },
        {
            path:"/user",
            element:<User></User>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/job-details/:jobId",
            element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>
        },
    ]
},
]);

export default router;
