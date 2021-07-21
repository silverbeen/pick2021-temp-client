
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import AttendanceDetail from "./components/attendance/attendanceDetail/AttendanceDetail";

function App() {
  return (
    <RecoilRoot>
      <AttendanceDetail />
    </RecoilRoot>
    
  )
}

export default App;
