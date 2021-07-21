import request  from '../../axios/axios'

export default {
    patchTeacher(name: string){
        return request({
            url: `/teacher?name=${name}`,
            method: "patch",
        })
    },
    patchCheck(gcn: string, is_attendance: string, period: any){
        return request({
            url: `/check?gcn=${gcn}&is_attendance=${is_attendance}&period=${period}`,
            method: "patch",
        })
    },
    getStudent(gubun: any){
        return request({
            url: `/student/${gubun}`,
            method: "get",
        })
    },
}