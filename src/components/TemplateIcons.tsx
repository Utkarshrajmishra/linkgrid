import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGlobe,
  FaSnapchat,
  FaSpotify,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaAmazon,
  FaSoundcloud,
} from "react-icons/fa";

interface TemplateIconsProps {
  index: number; // Ensure index is a number
  fontSize?: number; // Optional fontSize prop
  color?: string; // Optional color prop
}

const TemplateIcons: React.FC<TemplateIconsProps> = ({
  index,
  fontSize,
  color,
}) => {
  const IconComponents = [
    FaInstagram,
    FaGlobe,
    FaWhatsapp,
    FaSnapchat,
    FaSpotify,
    FaTwitter,
    FaYoutube,
    FaFacebook,
    FaAmazon,
    FaSoundcloud,
  ];

  const Icon = IconComponents[index];

  // Render the icon with the provided fontSize and color
  return <Icon style={{ fontSize, color }} />;
};

export default TemplateIcons;
