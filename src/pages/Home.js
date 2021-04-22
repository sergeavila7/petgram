import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Layout } from "../components/Layout";
const HomePage = ({ categoryId }) => {
  return (
    <Layout
      title="AppPetFriend 🐱‍👤"
      subtitle="Con Petgram puedes ver la mejores fotos de mascotas..."
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
