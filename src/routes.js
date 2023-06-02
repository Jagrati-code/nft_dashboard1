import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Collection.js";
import Billing from "views/Dashboard/Billing.js";
import RTLPage from "views/RTL/RTLPage.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";
import Nft from "views/Dashboard/Nft.js";
import Collectionpage from "pages/Collectionpage";


import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },

  {
    path: "/collections",
    name: "Collections",
    icon: <StatsIcon color='inherit' />,
    component: Tables,
    layout: "/admin",
  },

  {
    path: "/nfts",
    name: "NFTs",
    icon: <CreditIcon color='inherit' />,
    component: Nft,
    layout: "/admin",
  },


  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",

    views: [

      

      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },

      {
        path: "/signup",
        name: "Sign Up",
        icon: <RocketIcon color='inherit' />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },

    ],
  },
];

export default dashRoutes;
