import React from "react";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

export default () => (
  <Layout title="Your Favorites" subtitle="Aquí estan tus favoritos...">
    <ListOfFavs />
  </Layout>
);
