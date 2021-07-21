import React, { FC } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { IStudentDataType, IStudentList, IStudentListType } from "../../../interface/Attendance/AttendanceInterface";
import { GubunState } from "../../../lib/atom/Gubun/Gubun";
import { StudentSelect } from "../../../lib/atom/Student/Student";
import StudentItem from "./StudentItem";
import * as S from "./style";

interface Props {
 
}

const StudentList: FC<Props> = () => {
  const gubun = useRecoilValue(GubunState);
  const { studentResponseList } = useRecoilValue<IStudentDataType>(StudentSelect(gubun))

const studentListData = Object.values(studentResponseList.reduce((a:any, { name,gcn, period, isAttendance }) => {
  a[gcn] = a[gcn] || { name, gcn, check: new Array() };
  a[gcn].check.push({id: period, isAttendance: isAttendance});
  return a;
}, {}))
console.log(studentListData)

  useEffect(()=>{
    console.log(studentResponseList);
  },[studentResponseList])
  return (
    <S.StudentWrapper>
      <S.HeaderBar>
        <li>확인</li>
        <li>학번</li>
        <li>이름</li>
        <li>8교시</li>
        <li>9교시</li>
        <li>10교시</li>
        <li>11교시</li>
      </S.HeaderBar>
      {studentListData.map((student, index) => (
        <StudentItem student={student} key={index} />
      ))}
    </S.StudentWrapper>
  );
};

export default StudentList;