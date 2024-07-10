import {
  ArrowRightLeft,
  BellDot,
  CircleDollarSign,
  Clock,
  Globe,
  HandCoins,
  Languages,
  ScrollText,
  ShoppingCart,
  SquarePercent,
  Store,
  Truck,
  Users,
  Warehouse,
} from "lucide-react";
import { FaRegAddressCard } from "react-icons/fa6";
import { FaSpider } from "react-icons/fa";

export const settingsItems = [
  { name: "Store details", section: "store-details", icons: <Store /> },
  { name: "Domains", section: "domains", icons: <Globe /> },
  {
    name: "Staffs accounts",
    section: "staff-accounts",
    icons: <FaRegAddressCard size={24} />,
  },
  { name: "Notifications", section: "notifications", icons: <BellDot /> },
  { name: "Payments", section: "payments", icons: <HandCoins /> },
  { name: "Checkout", section: "checkout", icons: <ShoppingCart /> },
  { name: "Warehouse", section: "warehouse", icons: <Warehouse /> },
  { name: "Delivery", section: "delivery", icons: <Truck /> },
  { name: "Returns", section: "returns", icons: <ArrowRightLeft /> },
  { name: "Tax", section: "tax", icons: <SquarePercent /> },
  {
    name: "Extra charges",
    section: "extra-charges",
    icons: <CircleDollarSign />,
  },
  { name: "SEO", section: "seo", icons: <FaSpider size={24}/> },
  { name: "Languages", section: "languages", icons: <Languages /> },
  { name: "Support & Social", section: "support-social", icons: <Users /> },
  { name: "Policies", section: "policies", icons: <ScrollText /> },
  { name: "Store timings", section: "store-timings", icons: <Clock /> },
];
