interface TokenModel {
  token_id: number;
  user_id: number;
  refresh_token: string;
  upload_date: string;
}

export default TokenModel;