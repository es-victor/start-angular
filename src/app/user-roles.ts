export interface Role {
  id: number;
  title: string;
}

export const userRoles: Role[] = [
  { id: 1, title: "Developer" },
  { id: 2, title: "Admin" },
];
