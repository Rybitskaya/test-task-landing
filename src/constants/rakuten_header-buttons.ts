import shoppingbag from "../assets/cartIcon.svg";
import profile from "../assets/profileIcon.svg";
import favoris from "../assets/favourite-heart-svgrepo-com.svg";
import aide from "../assets/helpIcon.svg";
import sell from "../assets/sellIcon.svg";
import club from "../assets/club.svg";
import menu from "../assets/menu-1-svgrepo-com.svg";

export interface HeaderButton {
  title: string;
  icon: string;
}

export const RAK_HEADER_BUTTONS: HeaderButton[] = [
  {
    title: "Menu",
    icon: menu,
  },
  {
    title: "Vendre",
    icon: sell,
  },
  {
    title: "Favoris",
    icon: favoris,
  },
  {
    title: "Compte",
    icon: profile,
  },
  {
    title: "Panier",
    icon: shoppingbag,
  },
];

export const RAK_HEADER_BUTTONS_TWO: HeaderButton[] = [
  {
    title: "Menu",
    icon: menu,
  },
  {
    title: "Vendre",
    icon: sell,
  },
  {
    title: "Aide",
    icon: aide,
  },
  {
    title: "Favoris",
    icon: favoris,
  },
  {
    title: "Compte",
    icon: profile,
  },
  {
    title: "Panier",
    icon: shoppingbag,
  },
];

export const RAK_HEADER_BUTTONS_THREE: HeaderButton[] = [
  {
    title: "Menu",
    icon: menu,
  },
  {
    title: "Vendre",
    icon: sell,
  },
  {
    title: "Aide",
    icon: aide,
  },
  {
    title: "",
    icon: club,
  },
  {
    title: "Favoris",
    icon: favoris,
  },
  {
    title: "Compte",
    icon: profile,
  },
  {
    title: "Panier",
    icon: shoppingbag,
  },
];

export const RAK_HEADER_BUTTONS_WIDE: HeaderButton[] = [
  {
    title: "Parcourir les catégories",
    icon: menu,
  },
  {
    title: "Mettre en vente",
    icon: sell,
  },
  {
    title: "Aide",
    icon: aide,
  },
  {
    title: "",
    icon: club,
  },
  {
    title: "Favoris",
    icon: favoris,
  },
  {
    title: "Compte",
    icon: profile,
  },
  {
    title: "Panier",
    icon: shoppingbag,
  },
];
