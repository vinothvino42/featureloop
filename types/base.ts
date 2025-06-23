export type BaseEntity = {
  id: string;
  createdAt: Date;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;
