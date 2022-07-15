interface UserModel {
  user_id: number;
  name: string;
  email: string;
  password: string;
  is_activated: number;
  activation_link: string;
}

export default UserModel;