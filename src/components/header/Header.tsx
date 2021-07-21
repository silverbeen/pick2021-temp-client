import React, { FC } from "react";
import * as S from "./style";

interface Props {
  teacher: string
}

const Header: FC<Props> = ({teacher}) => {
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
        <span className="font-bold">{teacher}</span>
      </S.HeaderSub>
    </S.HeaderWrapper>
  );
};

export default Header;
