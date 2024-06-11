import { Schema, model, models } from "mongoose";
export interface ICategory extends Document {
  _id: string;
  name: String;
}
const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});
const category = models.category || model("category", categorySchema);
export default category;
