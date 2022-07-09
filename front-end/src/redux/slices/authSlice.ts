import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import AuthService from '../../services/AuthService'

interface AuthPayload {
  email: string,
  password: string
}
interface RegistrationPayload extends AuthPayload {
  name: string
}
interface AuthResponce {
  accessToken: string,
  refreshToken: string,
  user: IUser
}

export const login = createAsyncThunk(
  'auth/login',
  async (payload: AuthPayload) => {
    const response = await AuthService.login(payload.email, payload.password);
    return response.data
  }
)

export const register = createAsyncThunk(
  'auth/registration',
  async (payload: RegistrationPayload) => {
    const response = await AuthService.registration(payload.email, payload.password);
    return response.data
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async () => AuthService.logout()
)

const authReducer = (_state: AuthState, action: PayloadAction<AuthResponce>) => {
  localStorage.setItem("token", action.payload.accessToken);
  setAuth(true);
  setUser(action.payload.user);
}

interface AuthState {
  isAuth: boolean,
  user: IUser
}

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(login.fulfilled, authReducer);
    builder.addCase(register.fulfilled, authReducer);
    builder.addCase(logout.pending, () => {
      localStorage.removeItem("token");
      setAuth(false);
      setUser({} as IUser);
    });
  }
})

export const { setAuth, setUser } = authSlice.actions

export default authSlice.reducer