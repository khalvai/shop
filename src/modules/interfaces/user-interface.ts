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
  code?: number;

  phone?: string;
  reason?: string;

  attamp?: number;
}
