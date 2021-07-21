import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IButtonListType } from "../../../interface/Attendance/AttendanceInterface";
import { GubunState } from "../../../lib/atom/Gubun/Gubun";
import * as S from "./style";

const SelectionBar = () => {
  const [selected, setSelected] = useState<number>(1);
  const [classSelected, setClassSelected] = useState<string>('A');
  const [buttonWidth, setButtonWidth] = useState<number>(0);
  const [ gubun, setGubun ] = useRecoilState(GubunState);

  const onClassSelected = (title: any) => {
    setClassSelected(title)
    setGubun(title);
  }

  const topButtonList: IButtonListType[] = [
    {
      id: 1,
      title: "창조실",
    },
  ];

  const classButtonList: IButtonListType[] = [
    {
      id: 1,
      title: "A",
    },
    {
      id: 2,
      title: "B",
    },
    {
      id: 3,
      title: "C",
    },
    {
      id: 4,
      title: 'X'
    }
  ];

  useEffect(() => {
    setButtonWidth(100 / topButtonList.length);
  }, []);

  return (
    <>
      <S.SelectionBar>
        {topButtonList.map((button, index) => {
          return (
            <S.SelectionItem
              key={index}
              onClick={() => setSelected(button.id)}
              style={{
                width: buttonWidth + "%",
                backgroundColor: button.id === selected ? "#FF6E04" : "white",
                color: button.id === selected ? "white" : "black",
              }}
            >
              {button.title}
            </S.SelectionItem>
          );
        })}
      </S.SelectionBar>
      <S.SelectionBar>
        {classButtonList.map((button, index) => {
          return (
            <S.SelectionItem
              key={index}
              onClick={() => onClassSelected(button.title)}
              style={{
                width: buttonWidth + "%",
                backgroundColor:
                  button.title === classSelected ? "#FF6E04" : "white",
                color: button.title === classSelected ? "white" : "black",
              }}
            >
              {button.title}
            </S.SelectionItem>
          );
        })}
      </S.SelectionBar>
    </>
  );
};

export default SelectionBar;