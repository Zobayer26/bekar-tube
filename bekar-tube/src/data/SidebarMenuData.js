import { AiOutlineLike } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import { GoTrophy, GoVideo } from "react-icons/go";
import {
  MdAccountCircle,
  MdHome,
  MdOutlinedFlag,
  MdOutlineFeedback,
  MdOutlineHelpOutline,
  MdOutlineHistory,
  MdOutlineSettings,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";

import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";

import { HiDownload } from "react-icons/hi";
import { LiaMusicSolid } from "react-icons/lia";

const SidebarMenu = [
  {
    id: 1,
    icon: MdHome,
    title: "Home",
  },
  {
    id: 2,
    icon: SiYoutubeshorts,
    title: "shorts",
  },
  {
    id: 3,
    icon: MdOutlineSubscriptions,
    title: "subscriptions",
  },
];

const shortSidebarMenu = [
  {
    id: 1,
    icon: MdHome,
    title: "Home",
  },
  {
    id: 2,
    icon: SiYoutubeshorts,
    title: "shorts",
  },
  {
    id: 3,
    icon: MdOutlineSubscriptions,
    title: "subscriptions",
  },
  {
    id: 4,
    icon: HiDownload,
    title: "download",
  },
];

const LibraryMenu = [
  {
    id: 1,
    icon: MdOutlineHistory,
    title: "history",
  },
  {
    id: 2,
    icon: CgPlayList,
    title: "playlists",
  },
  {
    id: 3,
    icon: GoVideo,
    title: "your videos",
  },
  {
    id: 4,
    icon: MdOutlineWatchLater,
    title: "watch later",
  },
  {
    id: 5,
    icon: AiOutlineLike,
    title: "liked videos",
  },
  {
    id: 6,
    icon: HiDownload,
    title: "downloads",
  },
];

const SubscriptionItems = [
  {
    id: 1,
    icon: MdAccountCircle,
    title: "Labid Rahat",
  },
  {
    id: 2,
    icon: MdAccountCircle,
    title: "Bitik baz",
  },
  {
    id: 3,
    icon: MdAccountCircle,
    title: "Chai aur code",
  },
  {
    id: 4,
    icon: MdAccountCircle,
    title: "T sports",
  },
  {
    id: 5,
    icon: MdAccountCircle,
    title: "CPS academy",
  },
  {
    id: 6,
    icon: MdAccountCircle,
    title: "Shironamhin",
  },
];
const Explore = [
  {
    id: 1,
    icon: LiaMusicSolid,
    title: "music",
  },
  {
    id: 2,
    icon: SiYoutubegaming,
    title: "Gaming",
  },
  {
    id: 3,
    icon: GoTrophy,
    title: "sports",
  },
];

const MoreOptions = [
  {
    id: 1,
    icon: MdHome,
    title: "YouTube premium",
  },
  {
    id: 2,
    icon: SiYoutubeshorts,
    title: "Youtube studio",
  },
  {
    id: 3,
    icon: MdOutlineSubscriptions,
    title: "youtube music",
  },
  {
    id: 4,
    icon: MdOutlineSubscriptions,
    title: "youTube kids",
  },
];

const Settings = [
  {
    id: 1,
    icon: MdOutlineSettings,
    title: "Settings",
  },
  {
    id: 2,
    icon: MdOutlinedFlag,
    title: "Report history",
  },
  {
    id: 3,
    icon: MdOutlineHelpOutline,
    title: "Help",
  },
  {
    id: 4,
    icon: MdOutlineFeedback,
    title: "send feedback",
  },
];

export {
  Explore,
  LibraryMenu,
  MoreOptions,
  Settings, shortSidebarMenu, SidebarMenu,
  SubscriptionItems
};

