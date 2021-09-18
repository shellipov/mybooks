import IUser from "../models/IUser";

export default class authApi {
  static getUsers() {
    const data: string | null = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  }
  static addUser(username: string, password: string) {
    const data: string | null = localStorage.getItem("users");
    const userList: IUser[] = data ? JSON.parse(data) : [];
    console.log(userList);

    const double = userList.find((somebody) => somebody.username === username);
    if (double) {
      return { error: "Такой пользователь уже существуют" };
    } else {
      userList.push({ username, password });
      localStorage.setItem("users", JSON.stringify(userList));
      return { newUser: { username, password } };
    }
  }
}
