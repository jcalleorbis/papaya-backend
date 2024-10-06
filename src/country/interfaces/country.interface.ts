import { Document } from 'mongoose';

export interface Country extends Document {
  readonly id: number;
  readonly name: string;
  readonly code: string;
}
