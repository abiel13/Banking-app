import { GoHome } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { IoReceiptOutline } from "react-icons/io5";
import { TbLocationDollar } from "react-icons/tb";
import { MdOutlineAddCard } from "react-icons/md";

export const Navlinks = [
  {
    route: "/",
    label: "Home",
    Icon: GoHome,
  },
  {
    route: "/banks",
    label: "My Banks",
    Icon: CiDollar,
  },
  {
    route: "/history",
    label: "Transaction History",
    Icon: IoReceiptOutline,
  },
  {
    route: "/transfer",
    label: "Payment Transfer",
    Icon: TbLocationDollar,
  },
];
