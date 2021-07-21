import React, { FC, useState } from "react";
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

const SubMenu = ({ disable, selectValue ,setSelectValue }: ISubMenuProps) => {
  return (
    <ul className="sub-menu" style={{ display: disable ? "flex" : "none" }}>
      <li
        onClick={() => {
          setSelectValue("현체");
          console.log("현체");
        }}
      >
        <span>현체</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("귀가");
          console.log("귀가");
        }}
      >
        <span>귀가</span>
      </li>
      <li
        onClick={() => {
          setSelectValue("무단");
          console.log("무단");
        }}
      >
        <span>무단</span>
      </li>
      {
        selectValue !== "" && 
        <li
          onClick={() => {
            setSelectValue("출석");
            console.log("출석");
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

  const onCheck = (id: any) => {
    console.log(student.gcn, selectValue, id)
    // attendance.patchCheck(student.gcn, selectValue, selected)
    // .then((res) => console.log(res))
  }
console.log(student.check)
  return (
    <S.StudentItem key={key}>
      <li>
        <input type="checkbox" />
      </li>
      <li>{student.gcn}</li>
      <li>{student.name}</li>
      {student.check.map((i: any, index: number) => (
        <li
          onClick={() => {
            setDisable(!disable);
            setSelected(i.id);
            onCheck(i.id)
          }}
        >
          <span>{i.isAttendance}</span>
          {i.id === selected ? (
            <>
              <SubMenu
                disable={disable}
                setDisable={setDisable}
                setSelectValue={setSelectValue}
                selectValue={selectValue}
              />
            </>
          ) : (
            ""
          )}
        </li>
      ))}
    </S.StudentItem>
  );
};

export default StudentItem;
