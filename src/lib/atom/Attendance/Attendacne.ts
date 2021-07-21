import axios from "axios";
import { selectorFamily } from "recoil";

export const AttendanceSelect = selectorFamily({
    key: "studnet/get",
    get: ({gcn, isAttendance, period} : any) => async () => {
      if (!period || !gcn || !isAttendance) return "";

      const { data } = await axios.patch(
        `http://13.125.161.204:8081/check?gcn=${gcn}&isAttendance=${isAttendance}&period=${period}`
      );
      return data;
    }
  
  });