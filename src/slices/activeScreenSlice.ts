import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    screenName: "Home"
}
const activeScreenSlice = createSlice({
    name: "activeScreen",
    initialState,
    reducers: {
        setScreen: ((state, action)=>{
            state.screenName = action.payload;
        })
    }
})

export const { setScreen } = activeScreenSlice.actions
export default activeScreenSlice.reducer