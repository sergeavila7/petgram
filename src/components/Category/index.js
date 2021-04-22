import React from "react";
import { Link, Image } from "../Category/styles";
export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
}) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);
