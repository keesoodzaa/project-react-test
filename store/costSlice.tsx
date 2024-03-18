import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CostData } from "../shared/types";

const initialState: CostData = {
  cost: 0,
};

const costSlice = createSlice({
  name: "cost",
  initialState: { cost: 0 },
  reducers: {
    updateCostData: (state, action: PayloadAction<Partial<CostData>>) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
    resetCostData: () => {
      return initialState;
    },
  },
});

export const { updateCostData, resetCostData } = costSlice.actions;
export default costSlice.reducer;
