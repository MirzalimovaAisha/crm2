import React from "react";
import { AddGroupButton, GroupsContainer } from "../groups/style";
import plus from "../../assets/plus-icon.svg";
import { NotiContainer } from "./style";

const NotificationComponent = () => {
  return (
    <div>
      <GroupsContainer>
        <AddGroupButton>
          <img src={plus} alt="plus" />
          Add new blog
        </AddGroupButton>

        <NotiContainer $left>

        </NotiContainer>
      </GroupsContainer>
    </div>
  );
};

export default NotificationComponent;
