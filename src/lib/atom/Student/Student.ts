import axios from 'axios';
import { atom, selectorFamily } from 'recoil'
import attendance from '../../api/attendance';

// export const StudentState = atom({
//     key: 'studentStaet',
//     default: []
// });

export const StudentSelect = selectorFamily({
    key: "studnet/get",
    get: (gubun: string) => async () => {
      if (!gubun) return "";
  
      // attendance.getStudent(guhun)
      //   .then((res) => {
      //     console.log(res.data)
      //       return res.data
      //   })

      const { data } = await axios.get(
        `http://13.125.161.204:8081/student/${gubun}`
      );
      return data;
    }
  
  });