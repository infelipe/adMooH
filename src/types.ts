export type Album = {
  id: number;
  photoCount: number;
  thumbnailUrl: string;
  title: string;
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
};

export type RootState = {
  albumCollection: Album[] | null;
  photoCollection: Photo[] | null;
};
