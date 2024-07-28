import { useState, useEffect } from "react";
import Terms from "./Terms";

export interface termsData {
  labelFor: string;
  list: string;
}

const termsData: termsData[] = [
  { labelFor: "verifyAge", list: "만 14세 이상입니다." },
  {
    labelFor: "serviceAgreement",
    list: "[필수] 서비스 이용약관 동의",
  },
  {
    labelFor: "usingPersonalInfo",
    list: "[필수] 개인정보 수집 및 서비스 활용 동의",
  },
  {
    labelFor: "providePersonalDataOnWeb",
    list: "[필수] 채널 홈페이지 개인정보 제 3자 제공 동의",
  },
  {
    labelFor: "providePersonalData",
    list: "[선택] 개인정보 제 3자 제공 동의",
  },
  {
    labelFor: "collectPersonalInfo",
    list: "[선택] 개인정보 수집 및 서비스 활용 동의",
  },
  {
    labelFor: "receiveSMS",
    list: "[선택] 마케팅 정보 SMS 수신 동의",
  },
  {
    labelFor: "receiveEmail",
    list: "[선택] 마케팅 정보 이메일 수신 동의",
  },
];

const TermsList: React.FC = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [inputCheck, setInputCheck] = useState(
    Array(termsData.length).fill(false)
  );

  useEffect(() => {
    setInputCheck(Array(termsData.length).fill(isCheckedAll));
  }, [isCheckedAll]);

  return (
    <section className="flex flex-col justify-center items-center h-full bg-[#000000] ">
      <h2 className="sr-only">이용약관 리스트</h2>
      <fieldset className="text-xl font-semibold">
        <legend className="sr-only">이용약관 리스트</legend>
        <li className="flex flex-row items-center py-7 ">
          <input
            type="checkbox"
            id="checkAllTerms"
            className="absolute sr-only"
            onChange={() => setIsCheckedAll(!isCheckedAll)}
            checked={isCheckedAll}
          />
          <label
            htmlFor="checkAllTerms"
            className={`${
              isCheckedAll
                ? "text-white bg-[url('/src/assets/icon/circle-checked-icon.svg')] bg-no-repeat bg-center bg-left pl-9 bg-[length:26px]"
                : "text-[#6B6B6B] bg-[url('/src/assets/icon/circle-unchecked-icon.svg')] bg-no-repeat bg-center bg-left pl-9 bg-[length:26px]"
            }`}
          >
            모두 동의합니다.
          </label>
        </li>
        <ul className="flex flex-col gap-y-3">
          {termsData.map(({ labelFor, list }, i) => (
            <li>
              <Terms
                key={i}
                labelFor={labelFor}
                list={list}
                isChecked={inputCheck[i]}
              />
            </li>
          ))}
        </ul>
      </fieldset>
    </section>
  );
};

export default TermsList;
