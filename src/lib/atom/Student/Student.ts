import axios from 'axios';
import { atom, selectorFamily } from 'recoil'
import attendance from '../../api/attendance';


export const StudentSelect = selectorFamily({

    key: "studnet/get",
    get: (gubun: string) => async () => {
      if (!gubun) return "";
  
      const { data } = await axios.get(
        `http://13.125.161.204:8081/student/${gubun}`
      );

      console.log(data)
      return data;
    }
  
  });