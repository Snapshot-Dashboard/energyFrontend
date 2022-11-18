import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../Store/Store'
interface tileState {
    value: number,
    chartTitle: string
}

const initialState: tileState = {
    value: 2,
    chartTitle: 'Crude Oil Reported',
}

export const TileSlice = createSlice({
    name: 'Tile',
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<number>) => {
            state.value = action.payload
        },
        setChartTitle: (state, action: PayloadAction<string>) => {
            state.chartTitle = action.payload
        }
    }
})

export const selectValue = (state: RootState) => state.Tile.value
export const selectTitle = (state: RootState) => state.Tile.chartTitle

export const { setValue, setChartTitle } = TileSlice.actions
export default TileSlice.reducer