import React from "react";
import { Grid } from "./style";
import SomContent from "../somContent/SomContent";

const SomContentList = ({ somList, pageNumber }) => {
  const startIndex = (pageNumber - 1) * 9;
  const currentList = somList.slice(startIndex, startIndex + 9);

  return (
    <Grid>
      {currentList.map((content) => (
        <SomContent key={content.id} content={content} />
      ))}
    </Grid>
  );
};

export default SomContentList;
