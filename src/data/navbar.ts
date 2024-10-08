import firstimage from "@/assests/dashboard.svg";
import secondimage from "@/assests/proposal.svg";
import thirdimage from "@/assests/myproposal.svg";
import fourthimage from "@/assests/loan.svg";
import fifthimage from "@/assests/notification.svg";
import sixthimage from "@/assests/profile.svg";
import seventhimage from "@/assests/setting.svg";
import eighthimage from "@/assests/help.svg";

const navbar = [
  { id: 1, title: "Dashboard", link: "/dashboard", image: firstimage },
  {
    id: 2,
    title: "Create Proposal",
    link: "/dashboard/create-proposal",
    image: secondimage,
  },
  {
    id: 3,
    title: "My Proposal",
    link: "/dashboard/my-proposal",
    image: thirdimage,
  },
  {
    id: 4,
    title: "Loan Management",
    link: "/dashboard/loan",
    image: fourthimage,
  },
  {
    id: 5,
    title: "Notification",
    link: "/dashboard/notification",
    image: fifthimage,
  },
  { id: 6, title: "Profile", link: "/dashboard/profile", image: sixthimage },
  {
    id: 7,
    title: "Settings",
    link: "/dashboard/settings",
    image: seventhimage,
  },
  {
    id: 8,
    title: "Help & Support",
    link: "/dashboard/help",
    image: eighthimage,
  },
  // { id: 9, title: "Logout", link: "/logout", image: logoutImage }, // Add logout button after implementation of auth
];

export default navbar;
