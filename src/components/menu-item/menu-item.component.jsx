import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  ContentContainer,
  ContentTitle,
  ContentSubTitle,
  BackgroundImageContainer
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubTitle>SHOP NOW</ContentSubTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
