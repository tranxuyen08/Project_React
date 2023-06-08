const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const { UserAPI } = require("../../api/User");

export const register = createAsyncThunk(
  "register/fetchAuth",
  async (payload) => {
    //call API để đăng kí tài khoản
    const response = await UserAPI.register(payload);
    return response; //tra ve state cho  reducer
  }
)
export const login = createAsyncThunk(
  "login/fetchAuth",
  async (payload) => {

      const response = await UserAPI.login(payload);
      console.log(response)
      const data = response.user;
      data && localStorage.setItem("user", JSON.stringify(data));
      data &&
        localStorage.setItem(
          "accessTokenLogin",
          JSON.stringify(response.accessToken)
        );
      return data;

  }
)
const UserSlice = createSlice({
  name: "user",
  initialState: JSON.parse(localStorage.getItem('users')) ?? {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state = action.payload.user
      return state
    },
    [login.fulfilled]: (state, action) => {
      if(action.payload) return state = action.payload;
      return state
    }
  }
})
export default UserSlice.reducer