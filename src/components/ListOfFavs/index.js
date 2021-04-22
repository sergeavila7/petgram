import React from "react";
import { Grid, Image, Link } from "./styles";
import { useQuery, gql } from "@apollo/client";
import PropTypes from "prop-types";

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const ListOfFavs = () => {
  const { data, error, loading } = useQuery(GET_FAVORITES, {
    fetchPolicy: "cache-and-network",
  });
  return (
    <>
      <Grid>
        {data &&
          data.favs.map((fav) => (
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Image src={fav.src} />
            </Link>
          ))}
      </Grid>
    </>
  );
};

ListOfFavs.prototypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.stringisRequired,
      src: PropTypes.stringisRequired,
    })
  ),
};
