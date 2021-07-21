import React, { FC, useState } from "react";
import { useEffect } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { IStudentDataType } from "../../interface/Attendance/AttendanceInterface";
import attendance from "../../lib/api/attendance";
import { GubunState } from "../../lib/atom/Gubun/Gubun";
import { StudentSelect } from "../../lib/atom/Student/Student";
import * as S from "./style";

interface Props {
  
}

const Header: FC<Props> = () => {
  const [ name, setName ] = useState<string>("");
  const gubun = useRecoilValue(GubunState);
  const { state, contents } = useRecoilValueLoadable<IStudentDataType>(StudentSelect(gubun))
  const onTeacher = (teacher: string) => {
    attendance.patchTeacher(teacher)
    .then((res) => console.log(res))
  }

  return (
    <S.HeaderWrapper>
      <S.HeaderSub>
        <span className="font-bold"></span>
        {/* <span className="font-bold">{"<"} 홈</span> */}
      </S.HeaderSub>
      <S.HeaderSub>
        <span className="font-bold">9월 3일</span>
        <span>월요일</span>
      </S.HeaderSub>
      <S.HeaderSub>
        <span>감독교사</span>
        {
          state === "hasValue" ? 
          <input className="font-bold" placeholder={contents.teacher} onBlur={(e) => onTeacher(e.target.value)}/>
          : <div>loading...</div>
        }
      </S.HeaderSub>
    </S.HeaderWrapper>
  );
};

export default Header;
