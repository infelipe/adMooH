import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Album, Photo, RootState } from 'types';

const initialState: RootState = {
  albumCollection: null,
  photoCollection: null,
};

const gallerySlice = createSlice({
  initialState,
  name: 'gallery',
  reducers: {
    setAlbumCollection: (state: RootState, action: PayloadAction<Album[]>) =>
      (state = { ...state, albumCollection: action.payload }),
    setPhotoCollection: (state: RootState, action: PayloadAction<Photo[]>) =>
      (state = { ...state, photoCollection: action.payload }),
  },
});

export const store = configureStore({
  reducer: gallerySlice.reducer,
});

export const { setAlbumCollection, setPhotoCollection } = gallerySlice.actions;
