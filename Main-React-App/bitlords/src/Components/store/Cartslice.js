const {createSlice}=require('@reduxjs/toolkit')




    const cartSlice=createSlice({
        name: 'cart',
        initialState:[],
        reducers:{
           add:  (state,action)=>{
               console.log("this is add action .payload",action.payload)
                state.push(action.payload)
                
                

            },
            remove: (state,action)=>{
                const itemId=action.payload
                console.log(itemId)
                console.log("action called")
                console.log(state.filter(((item) => item.id !== itemId)))
                  return state.filter(((item) => item.id !== itemId));
               
            }
        }
    })


    export const {add,remove}=cartSlice.actions;
    export default cartSlice.reducer;