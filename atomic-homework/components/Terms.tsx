import { termsData } from "./TermsList";

interface termsProps extends termsData {
  isChecked: boolean;
}

const Terms: React.FC<termsProps> = ({ list, labelFor, isChecked }) => {
  return (
    <>
      <input type="checkbox" id={labelFor} className="sr-only" />
      <label
        className={`${
          isChecked
            ? "text-white bg-[url('/src/assets/icon/checked-icon.svg')] bg-no-repeat bg-center bg-left pl-9 bg-[length:26px]"
            : "text-[#6B6B6B] bg-[url('/src/assets/icon/unchecked-icon.svg')] bg-no-repeat bg-center bg-left pl-9  bg-[length:26px]"
        }`}
        htmlFor={labelFor}
      >
        {list}
      </label>
    </>
  );
};

export default Terms;
