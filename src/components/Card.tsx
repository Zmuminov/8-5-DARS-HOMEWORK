import { FC } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CardType {
  data: {
    id: string;
    name: string;
    description: string;
    price: number;
    status: string;
    category_id: string;
    createdAt: string;
    updatedAt: string;
  };
  deletItem: (arg: string) => void;
  beingDeleted: {
    id?: string;
    beingDelete?: boolean;
  };
}
const Card: FC<CardType> = (props) => {
  const navigate = useNavigate();
  function handelDelet() {
    let isDelete = confirm("Rosdan ham o'chirmoqchimisiz?");
    if (isDelete) {
      props.deletItem(props.data.id);
    }
  }
  function handelDetails() {
    navigate(`details/${props.data.id}`);
  }

  return (
    <div
      className="shadow-xl w-1/4 p-4 rounded-sm bg-white cursor-pointer text-[black] flex flex-col gap-3 mb-5"
      onClick={handelDetails}
    >
      <h3>Nomi:{props.data.name}</h3>
      <h3>Narxi:{props.data.price}$</h3>
      <h3>Status:{props.data.status}</h3>
      <h3>Izoh:{props.data.description}</h3>
      {!(
        props.beingDeleted?.beingDelete &&
        props.beingDeleted?.id == props.data?.id
      ) ? (
        <FaTrash onClick={handelDelet} color="red" />
      ) : (
        "Being Deleted"
      )}
    </div>
  );
};

export default Card;
