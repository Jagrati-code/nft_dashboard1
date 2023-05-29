// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
import avatar10 from "assets/img/avatars/avatar10.png";

// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";

import { AiOutlineExclamation } from "react-icons/ai";

import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";

import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Meta Generation",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "10%",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "r/NFT",
    members: [avatar3, avatar2],
    budget: "5%",
    progression: 20,
  },
  {
    logo: SlackLogo,
    name: "OpenSea",
    members: [avatar5, avatar4],
    budget: "Not set",
    progression: 10,
  },
  {
    logo: SpotifyLogo,
    name: "Ralible",
    members: [avatar2, avatar3, avatar7, avatar4],
    budget: "60%",
    progression: 86,
  },
  {
    logo: JiraLogo,
    name: "Decentraland",
    members: [avatar2, avatar3, avatar7, avatar5],
    budget: "40%",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "VeeFriends",
    members: [avatar5, avatar3, avatar2],
    budget: "7%",
    progression: 4,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "The Captainz",
    date: "114 ETH",
    color: "green",
  },
  {
    logo: FaHtml5,
    title: "Bitcoin Punks",
    date: "12 ETH",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Meebits",
    date: "40 ETH",
    color: "cyan",
  },
  {
    logo: FaCreditCard,
    title: "Nakamigos",
    date: "26",
    color: "orange",
  },
  {
    logo: SiDropbox,
    title: "Art Blocks",
    date: "100 ETH",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "Consotrium Key",
    date: "80 ETH",
  },
];

export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Vision UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Azuki",
    category: "Music",
    collectionid: "DeGods",
    ownerid: "Karan",
    status: "3",
    date: "12/03/2022",
  },
  {
    logo: avatar2,
    name: "Degods",
    category: "Art",
    collectionid: "Gods",
    ownerid: "Komal",
    status: "-",
    date: "04/03/2021",
  },
  {
    logo: avatar3,
    name: "Mutant Ape",
    category: "Drawings",
    collectionid: "Ape",
    ownerid: "Jitendra",
    status: "143",
    date: "07/03/2023",
  },
  {
    logo: avatar4,
    name: "Wrapped Cryptopunks",
    category: "Crypto",
    collectionid: "Bitcoin",
    ownerid: "Jagrati",
    status: "-",
    date: "12/03/2023",
  },
  {
    logo: avatar5,
    name: "Milady Maker",
    category: "Music",
    collectionid: "ITtects",
    ownerid: "Karan",
    status: "1",
    date: "15/03/2023",
  },
  {
    logo: avatar7,
    name: "Decentra",
    category: "Photo",
    collectionid: "Bront",
    ownerid: "Anjali",
    status: "1",
    date: "12/03/2022",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "SandBox",
    nftid: "$14,000",
    value: "-0.43%",
    owner: 60,
    collectionid:123,
  },
  {
    logo: AtlassianLogo,
    name: "Axie Infinity",
    nftid: "$3,000",
    value: "+1.98%",
    owner: 10,
    collectionid:234,
  },
  {
    logo: SlackLogo,
    name: "Enjin Coin",
    nftid: "Not set",
    value: "-1.77%",
    owner: 50,
    collectionid:456,
  },
  {
    logo: SpotifyLogo,
    name: "Audius",
    nftid: "$32,000",
    value: "0.18%",
    owner: 100,
    collectionid:478,
  },
  {
    logo: JiraLogo,
    name: "Fetch",
    nftid: "$400",
    value: "-4.53%",
    owner: 25,
    collectionid:789,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];
