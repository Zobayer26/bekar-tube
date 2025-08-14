import { BsBroadcast } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
const createMenuModal = [
  {
    id: 1,
    icon: GoVideo,
    title: "upload video",
  },
  {
    id: 2,
    icon: BsBroadcast,
    title: "go live",
  },
  {
    id: 3,
    icon: IoCreateOutline,
    title: "create post",
  },
];

const profileMenuModal = [
  {
    id: 1,
    icon: FaGoogle,
    title: "google account",
  },
  {
    id: 2,
    icon: MdOutlineSwitchAccount,
    title: "switch account",
  },
  {
    id: 3,
    icon: PiSignIn,
    title: "sign out",
  },
];

export { createMenuModal, profileMenuModal };
