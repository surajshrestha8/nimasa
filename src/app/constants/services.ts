import {
  faAddressBook,
  faCircleUser,
  faMap,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { ServiceCardProps } from "../components/ServiceCard";

export const Services: Array<ServiceCardProps> = [
  {
    icon: faAddressBook,
    title: "Educational Consultancy",
    content:
      "We provide services on Educational Consultancy for abroad study from Nepal. We have a team of experts who can guide you through the process of choosing the right course and institution for your studies abroad.",
  },
  {
    icon: faCircleUser,
    title: "Scholarshp Assistance",
    content:
      "We provide full scholarship assistance for students wishing to study abroad. We have a wide range of scholarships available and can provide guidance and support throughout the application process.",
  },
  {
    icon: faMap ,
    title: 'STUDY ABROAD ASSISTANCE',
    content: 'We provide services on Study Abroad Assistance for abroad study from Nepal. We have vast experience in helping students to get admission to different colleges and universities abroad.'
  },
  {
    icon: faPaperPlane,
    title: 'Career Guidance',
    content: 'We provide career guidance for those who want to study abroad from Nepal. We provide information on various aspects of studying abroad, such as choosing a country, a university, a course of study, and financing your education.'
  }
];
