import React, { FC, useState } from "react";
import attendance from "../../lib/api/attendance";
import * as S from "./style";

interface Props {
  teacher: string
}

const Header: FC<Props> = ({teacher}) => {
  const [ name, setName ] = useState<string>("");

  const onTeacher = (teacher: string) => {
    attendance.patchTeacher(teacher)
    .then((res) => console.log(res))
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderSub>
        <span className="font-bold">{"<"} 홈</span>
      </S.HeaderSub>
      <S.HeaderSub>
        <span className="font-bold">9월 3일</span>
        <span>월요일</span>
      </S.HeaderSub>
      <S.HeaderSub>
        <span>감독교사</span>
        <input className="font-bold" placeholder={teacher} onBlur={(e) => onTeacher(e.target.value)}/>
      </S.HeaderSub>
    </S.HeaderWrapper>
  );
};

export default Header;
