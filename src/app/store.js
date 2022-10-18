import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    Add: (state, action) => {
      if (state.find(el => el.name === action.payload.name)) {
        return [...state]
      } else {
        return [...state, action.payload]
        // 또는 state = state.push(action.payload) 이렇게 해도 됨, 리덕스는 반환과 입력 동시 못하니까
        // return을 빼야함
      }

    },
    Delete: (state, action) => {
      return [...state.filter(el => el.name !== action.payload)]
    }
  }
})


const listSlice = createSlice({
  name: "lists",
  initialState: [],
  reducers: {
    SetBoardList: (state, action) => {
      state = state.push(action.payload)
    },
    DeleteBoardList: (state, action) => {
      return [...state.filter(el => String(el.id) !== action.payload)]
    },
    ModifiedList: (state, action) => {
      return [...action.payload]
      // console.log(state)
    }
  }
})

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    list: listSlice.reducer
  },

})


export const { Add, Delete } = cartSlice.actions
export const { SetBoardList, DeleteBoardList, ModifiedList } = listSlice.actions
export default store
