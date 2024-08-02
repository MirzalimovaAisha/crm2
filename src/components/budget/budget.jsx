import React, { useState } from "react";

// ======== style ====
import { GroupsContainer } from "../groups/style";

// ====== img ======
import data from "../../assets/calendar.svg";
import downIcon from "../../assets/add-icon2.svg";

import { BudgetData } from "./style";
import BudgetIncome from "./budget-Income";
import BudgetCategory from "./budget-Category";
import BedgetExpense from "./budget-Expense";
import {
  TeacherProfileTabList,
  TeacherProfileTabListBtn,
} from "../teachers/style";
import { TablistButton } from "../students/style";
import plus from "../../assets/plus-icon.svg";
import { CreateNewCategory } from "./createNewCategory";

const BudgetComponent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [pages, setPages] = useState("Income");

  const renderContent = () => {
    if (pages === "Income") {
      return <BudgetIncome />;
    } else if (pages === "Category") {
      return <BudgetCategory />;
    } else if (pages === "Expense") {
      return <BedgetExpense />;
    } else {
      return null;
    }
  };

  const [openSendSmsModal, setOpenSendSmsModal] = React.useState(false);

  const handleCloseSmsModal = (event) => {
    event.stopPropagation();
    setOpenSendSmsModal(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <GroupsContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "40px",
          }}
        >
          <TeacherProfileTabList>
            <TeacherProfileTabListBtn
              $first
              onClick={() => setPages("Income")}
              selected={pages === "Income"}
            >
              Income
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              onClick={() => setPages("Category")}
              selected={pages === "Category"}
            >
              Category
            </TeacherProfileTabListBtn>

            <TeacherProfileTabListBtn
              $second
              $last
              onClick={() => setPages("Expense")}
              selected={pages === "Expense"}
            >
              Expense
            </TeacherProfileTabListBtn>
          </TeacherProfileTabList>

          {pages === "Income" ? (
            <BudgetData>
              <img src={data} alt="" />
              July 23, 2023 - August 23, 2023
            </BudgetData>
          ) : pages === "Category" ? (
            <TablistButton onClick={() => setOpenSendSmsModal(true)}>
              <img src={plus} alt="" width={"16px"} />
              Add new category
              <CreateNewCategory
                open={openSendSmsModal}
                setOpen={handleCloseSmsModal}
              />
            </TablistButton>
          ) : pages === "Expense" ? (
            <BudgetData>
              <img src={data} alt="" />
              July 23, 2023 - August 23, 2023
            </BudgetData>
          ) : null}
        </div>

        {renderContent()}
      </GroupsContainer>
    </div>
  );
};

export default BudgetComponent;
