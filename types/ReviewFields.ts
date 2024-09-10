

export interface ReviewFieldsList {
  genre: string[];
  publisher: string[];
  developer: string[];
}

export type ReviewFieldsNames = keyof ReviewFieldsList;
