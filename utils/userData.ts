// export const adminData = [sessionStorage.getItem("adminLogin"), sessionStorage.getItem("adminPass")];
export enum userData {
    adminLogin = sessionStorage.getItem("adminLogin"),
    adminPass = sessionStorage.getItem("adminPass"),
    guestLogin = sessionStorage.getItem("guestLogin"),
    guestPass = sessionStorage.getItem("guestPass")
}