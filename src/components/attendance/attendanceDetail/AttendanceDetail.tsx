import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import SelectionBar from "./SelectionBar";
import StudentList from "./StudentList";
import * as S from "./style";
import { useRecoilState, useRecoilValue } from "recoil";
import { GubunState } from "../../../lib/atom/Gubun/Gubun";
import { StudentSelect } from "../../../lib/atom/Student/Student";

const AttendanceDetail = () => {
  const gubun = useRecoilValue(GubunState);
  const data = useRecoilValue<any>(StudentSelect(gubun))

  console.log(data)

  return (
    <S.MainWrapper>
      <Header teacher={data.teacher}/>
      <S.ContentWrapper>
        <S.Title>
          <h1 className="club-name">{gubun}</h1>
          <span>창조실</span>
        </S.Title>
        <SelectionBar />
        <StudentList studentData={data.studentResponseList}/>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default AttendanceDetail;
