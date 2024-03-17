import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userData",
    initialState:{
        currentUsers:null
    }, 
     reducers:{
              addUser: (state,action)=>{
                console.log(action.payload );
                    state.currentUsers = action.payload;
                    
                                      },
             }
});
export const{addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;
