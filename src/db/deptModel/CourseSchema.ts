import mongoose from "mongoose"
import { Course } from "../../entities"

export interface ICourse extends Course, mongoose.Document { }

const CourseSchema = new mongoose.Schema<ICourse>({
    crsName: String,
    crsScore: Number,
    crsType: String,
    crsTime: Number,
    crsPre: String,
    descID: { type: mongoose.Types.ObjectId }
}, {
    versionKey: false
})

export default mongoose.model<ICourse>("ems_dept_crs", CourseSchema)