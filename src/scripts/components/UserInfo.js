export class UserInfo {
    constructor( userName, userJob ) {
        this._userName = userName;
        this._userJob = userJob
    }
    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent
        }
    }
    setUserInfo(data) {
        this._userName.textContent = data.userName;
        this._userJob.textContent = data.userJob;
    }
}