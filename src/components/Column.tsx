import { useAppState } from "../AppStateContext";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import { Card } from "./Card";

interface ColumnProps {
  text?: string;
  index: number;
  id: string;
}

export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Ajouter nouvelle carte"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, taskId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};
