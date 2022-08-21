export interface User {
  phone?: string;
  name?: string;
  password?: string;
  address?: string;
  emial?: string;
  lastname?: string;
  code?: number;
}

export class Verification {
  code: string;

  phone: string;
  reason?: string;

  try?: number;
}
