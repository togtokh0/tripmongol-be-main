import author_model from "../../../models/author";
import { Types } from "mongoose";
const { ObjectId } = Types;
export const service_find = async (body: any, sort: any) => {
  try {
    const res = await author_model.find(body).sort(sort);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return Promise.reject("Query error");
  }
};
export const service_find_one = async (body: any) => {
  try {
    const res = await author_model.findOne(body);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return Promise.reject("Query error");
  }
};
export const service_create = async (body: any) => {
  try {
    const res = await author_model.create(body);
    return Promise.resolve(res);
  } catch (err) {
    console.log(err);
    return Promise.reject("Query error");
  }
};
export const service_update = async (_id: any, body: any) => {
  try {
    const res_find = await author_model.updateOne(
      { _id },
      { $set: { ...body } }
    );
    return Promise.resolve(res_find);
  } catch (err) {
    console.log(err);
    return Promise.reject("Query error");
  }
};
export const service_remove = async (id: any) => {
  try {
    const res_find = await author_model.findOneAndDelete({ _id: id });
    return Promise.resolve(res_find);
  } catch (err) {
    console.log(err);
    return Promise.reject("Query error");
  }
};
