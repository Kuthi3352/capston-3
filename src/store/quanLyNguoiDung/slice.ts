import { createSlice } from '@reduxjs/toolkit'

type QuanLyNguoiDungInitialState = {
    //
}

const initialState: QuanLyNguoiDungInitialState = {}

const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {},
    extraReducers() {},
})

export const { actions: quanLyNguoiDungActions, reducer: quanLyNguoiDungReducer } =
    quanLyNguoiDungSlice
