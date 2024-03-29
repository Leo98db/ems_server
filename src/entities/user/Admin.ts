import { Type } from "class-transformer"
import { Length, IsIn } from "class-validator"
import { BaseEntity } from "../BaseEntity"
import { status } from "../../types"

export class Admin extends BaseEntity {

    @Length(1, 10)
    @Type(() => String)
    adminNo: string

    @Length(6, 50)
    @Type(() => String)
    pwd: string

    @Length(2, 60)
    name: string

    @Length(1, 10)
    @Type(() => String)
    role: string

    @IsIn(status)
    @Type(() => Number)
    status: number = 0


    public static transform(plainObj: object) {
        return super.baseTransform(this, plainObj)
    }
}

