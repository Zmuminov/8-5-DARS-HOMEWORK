import React, { FC, useRef } from "react";
interface FormType {
  save: (arg: PhoneType) => void;
  loading: boolean;
}
interface PhoneType {
  name: string | undefined;
  price: number | undefined | string;
  description: string | undefined;
  status: string;
  category_id: string;
}
const Form: FC<FormType> = (props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const discriptionRef = useRef<HTMLTextAreaElement>(null);
  function handelSave(event: React.MouseEvent) {
    event.preventDefault();
    const phone: PhoneType = {
      name: nameRef.current?.value,
      price: priceRef.current?.value,
      description: discriptionRef.current?.value,
      status: "active",
      category_id: "2",
    };
    props.save(phone);
    if (nameRef?.current?.value) {
      nameRef.current.value = "";
    }
    if (priceRef?.current?.value) {
      priceRef.current.value = "";
    }
    if (discriptionRef?.current?.value) {
      discriptionRef.current.value = "";
    }
  }
  return (
    <div>
      <form className="w-1/3  flex flex-col gap-3 p-4 bg-white rounded-lg mx-auto">
        <h1 className="font-bold text-2xl colo">CRUD OPERATION</h1>
        <input
          ref={nameRef}
          className="p-3 rounded-sm border-2 outline-none"
          type="text"
          name=""
          id="input1"
          placeholder="Nomini kiriting"
        />
        <input
          ref={priceRef}
          className="p-3 rounded-sm border-2  outline-none"
          type="number"
          name=""
          id="input2"
          placeholder="Narxini kiriting"
        />
        <textarea
          ref={discriptionRef}
          className="p-3 rounded-sm border-2  resize-none outline-none"
          name=""
          id="input3"
          placeholder="Izoh kiriting"
        ></textarea>
        <button
          onClick={handelSave}
          className="bg-[red] text-white py-2 px-4 rounded-lg"
          disabled={props.loading ? true : false}
        >
          {props.loading ? "Sabr Tilayman" : "Qo'shish"}
        </button>
      </form>
    </div>
  );
};

export default Form;
