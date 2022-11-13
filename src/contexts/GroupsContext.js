import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const GroupsContext = React.createContext();

export function useGroups() {
  return useContext(GroupsContext);
}

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useLocalStorage("groups", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  function getGroupExpenses(groupId) {
    return expenses.filter((expense) => expense.groupId === groupId);
  }
  function addExpense({ description, amount, groupId }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, groupId }];
    });
  }
  function addGroup({ name, description }) {
    setGroups((prevGroups) => {
      if (prevGroups.find((group) => group.name === name)) {
        return prevGroups;
      }
      return [...prevGroups, { id: uuidV4(), name, description }];
    });
  }
  function deleteGroup({ id }) {
    // TODO: Deal with expenses
    setGroups((prevGroups) => {
      return prevGroups.filter((group) => group.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <GroupsContext.Provider
      value={{
        groups,
        expenses,
        getGroupExpenses,
        addExpense,
        addGroup,
        deleteGroup,
        deleteExpense,
      }}
    >
      {children};
    </GroupsContext.Provider>
  );
};
