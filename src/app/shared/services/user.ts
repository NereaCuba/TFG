export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    charts?: Array<any>;
}
export interface UserInfo {
    charts: Array<any>;
}
export interface chartInformation {
    formValue: Array<any>;
}