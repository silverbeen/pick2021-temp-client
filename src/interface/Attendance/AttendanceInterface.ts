export interface IButtonListType {
  id: number;
  title: string;
}

export interface IStudentListType {
  check: boolean;
  stdtNumber: number;
  stdName: string;
  eightState: string;
  nineState: string;
  tenState: string;
}

export interface ISubMenuProps {
  selectValue?: string,
  disable?: boolean,
  setDisable?: any,
  setSelectValue?: any,
  period?: any,
  gcn?: any,
  isAttendance?: any
  test: any[]
}

export interface IClassbuttonSubMenuType {
  id: number;
}

export interface IStudentDataType {
  studentResponseList: IStudentList[],
  date: string,
  teacher: string
}

export interface IStudentList {
  gcn: string,
  name: string,
  gubun: string,
  period: string,
  isAttendance: string
}