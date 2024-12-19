import { BotMessageSquare, Brush, EyeClosed, Heart } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import img1 from "../assets/gallery/img (1).jpg";
import img2 from "../assets/gallery/img (2).jpg";
import img3 from "../assets/gallery/img (3).jpg";
import img4 from "../assets/gallery/img (4).jpg";
import img5 from "../assets/gallery/img (5).jpg";
import img6 from "../assets/gallery/img (6).jpg";
import img7 from "../assets/gallery/img (7).jpg";
import img8 from "../assets/gallery/img (8).jpg";
import img9 from "../assets/gallery/img (9).jpg";

export const navItems = [
  { label: "Services", href: "#service" },
  { label: "Gallery", href: "#work" },
  { label: "Pricing", href: "#price" },
  { label: "Testimonials", href: "#test" },
];

export const testimonials = [
  {
    user: "Noluthando Mkhubo",
    image: img1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    user: "Honeshma Mabunda",
    image: img2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    user: "Lwaluhle Kunene",
    image: img3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    user: "Jane Doe",
    image: img4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    user: "Kristine Wilson",
    image: img5,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    user: "Emily Davis",
    image: img6,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

export const features = [
  {
    icon: <EyeClosed/>,
    text: "Natural Glam",
    description:
      "Light coverage foundation, powder highlighting and contouring "+
      "Eyebrows (wing or straight), Liner and lashes, lined Lipgloss "+
      "No eyeshadow.",
  },
  {
    icon: <Brush/>,
    text: "Soft Glam",
    description:
      "Foundation, Highlighting and Contouring, Eyebrows, Lashes, Nude Lip Combo "+
      "or Gloss, Earth Tones.",
  },
  {
    icon: <Heart/>,
    text: "Full Glam",
    description:
      "Foundation, Highlighting and Contouring, Eyebrows, Lashes, Any Colour Lip "+
      "Combo & Gloss, Any colour Eyeshadow & Glitter, Flakes or Any Kind of Eyeshadow Deco",
  },
];

export const images =[
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
  {
    img: img7,
  },
  {
    img: img8,
  },
  {
    img: img9,
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "General Makeup",
    price: "$0",
    features: [
      "No Make-up soft look: R300",
      "Natural Glam: R350",
      "Soft Glam: R400",
      "Full Glam: R450",
    ],
  },
  {
    title: "Bridal Makeup",
    price: "$10",
    features: [
      "Bridal Glam: R550",
      "Mother of Bride/Groom: R400",
      "Bridesmaids: R450",
      "Flower Girl: R200",
      "Additional Faces: R400",
      "Groom: R250"
    ],
  },
  {
    title: "Extras",
    price: "$200",
    features: [
      "Strip eyelashes: R30",
      "Shaping and trimming: R110",
      "Wig installation: R200",
      "Facial Cleansing: R120",
      "Eyebrow mapping and tint: R220",
      "Eyelash tint: R?"
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
