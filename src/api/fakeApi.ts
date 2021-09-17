import IUser from '../models/IUser'


export default class authApi {
  static getUsers() {
    return localStorage.getItem('users');
  }
  static addUser(user:IUser) {
    const data: string | null =  localStorage.getItem('users');
     const userList =  data? JSON.parse(data): []
     const newUserList =  userList.push(user)
     localStorage.setItem('users', JSON.stringify(newUserList))
  }
}
