export interface DatabaseBaseInterface {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
