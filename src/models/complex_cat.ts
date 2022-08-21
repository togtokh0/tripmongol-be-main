import mongoose from "mongoose";
import { Types } from "mongoose";
const { ObjectId } = Types;
// export interface usersDoc extends mongoose.Document {
//   user_email: string;
//   password: string;
//   user_id: number;
// }
const userSchema = new mongoose.Schema<any>(
  {
    href: String,
    name: String,
    taxonomy: String,
    count: Number,
    thumbnail: String,
  },
  { timestamps: true }
);

const users = mongoose.model<any>("complex_categorys", userSchema);
export default users;
