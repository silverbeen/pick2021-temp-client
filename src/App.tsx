
import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import AttendanceDetail from "./components/attendance/attendanceDetail/AttendanceDetail";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading</div>}>
        <AttendanceDetail />
      </Suspense>
    </RecoilRoot>
    
  )
}

export default App;
