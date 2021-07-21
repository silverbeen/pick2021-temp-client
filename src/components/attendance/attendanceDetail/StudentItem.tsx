import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IClassbuttonSubMenuType,
  IStudentList,
  ISubMenuProps,
} from "../../../interface/Attendance/AttendanceInterface";
import attendance from "../../../lib/api/attendance";
import * as S from "./style";

interface Props {
  student: any,
  key: number
}

const SubMenu = ({ disable, selectValue ,setSelectValue, period, gcn, isAttendance, test }: ISubMenuProps) => {

  
  const history = useHistory()

  const onCheck = (isAttendance: string) => {
    attendance.patchCheck(gcn, isAttendance, period)
    .then((res) => console.log(res))
    .catch((res) => console.log(res))

    test.filter((i, index) => {
      i.id == period && (i.isAttendance=isAttendance)
    })
  }
  

  return (
    <ul className="sub-menu" style={{ display: disable ? "flex" : "none" }}>
      <li
        onClick={() => {
          setSelectValue("현체");
          onCheck("현체")
        }}
      >
        <span>현체</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("귀가");
          onCheck("귀가")
        }}
      >
        <span>귀가</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("무단");
          onCheck("무단")
        }}
      >
        <span>무단</span>
      </li>
      {
        isAttendance !== "출석" && 
        <li
          onClick={() => {
            setSelectValue("출석");
            onCheck("출석")
          }}
        >
          <span>출석</span>
        </li>
      }
    </ul>
  );
};

const StudentItem: FC<Props> = ({ student, key }) => {
  const [disable, setDisable] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("");
  const [selected, setSelected] = useState<number>(0);
  const [ data, setData ] = useState<any[]>([])
  
  useEffect(() => {
    setData(student.check)
  })

  return (
    <S.StudentItem key={key}>
      <li>
        <input type="checkbox" onClick={()=>alert("아직 개발중입니다")}/>
      </li>
      <li>{student.gcn}</li>
      <li>{student.name}</li>
      {data.map((i: any, index: number) => {

        let attendanceList = data.filter((e: any) => e.id === i.id)
        const attendanceText = attendanceList[0].isAttendance

        return (
          <li
          onClick={() => {
            setDisable(!disable);
            setSelected(i.id);
          }}
        >
          <span>{attendanceText === "출석" ? "" : attendanceText}</span>
          {i.id === selected ? (
            <>
              <SubMenu
                disable={disable}
                setDisable={setDisable}
                setSelectValue={setSelectValue}
                selectValue={selectValue}
                period={i.id}
                gcn={student.gcn}
                isAttendance={i.isAttendance}
                test={attendanceList}
              />
            </>
          ) : (
            ""
          )}
        </li>
        )
      })}
    </S.StudentItem>
  );
};

export default StudentItem;
