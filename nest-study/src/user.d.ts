interface IReqBodyUser {
  accountName: string;
  realName: string;
  password: string;
  repassword: string;
  mobile: string;
}

interface User {
  username: string;
  userId: number;
  realName: string;
  role: number;
  sub?: number;
}
