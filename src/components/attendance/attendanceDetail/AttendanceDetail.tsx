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
  // const data = useRecoilValue<any>(StudentSelect(gubun))


  return (
    <S.MainWrapper>
      <Header/> 
      <S.ContentWrapper>
        <S.Title>
          <h1 className="club-name">{gubun}</h1>
          <span>창조실</span>
        </S.Title>  
        <SelectionBar />
        <React.Suspense fallback={<div>loading...</div>}>
          <StudentList/> 
        </React.Suspense>
      </S.ContentWrapper>
    </S.MainWrapper>
  );
};

export default AttendanceDetail;
