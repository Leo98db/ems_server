import { AdminService } from "../services"

export async function add() {

    try {
        const adminObj: any = {
            adminNo: "admin",
            pwd: "123123",
            name: "王五",
            role: "admin",
            status: 0
        }
        const result = await AdminService.add(adminObj);

        console.log(result)
        return result;
    } catch (error) {
        console.log("error", error)
    }
}


