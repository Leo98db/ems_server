import bcrypt from "bcrypt"
import { LoginCondition } from "../entities"

/**
 * 下划线转换驼峰
 * @param str 下划线字符串
 */
export const toHump = (str: string) => str.replace(/\_(\w)/g, (_, letter) => letter.toUpperCase())

/**
 * 驼峰转换下划线
 * @param str  驼峰字符串
 */
export const toLine = (str: string) => str.replace(/([A-Z])/g, "_$1").toLowerCase()

/**
 * 获取hash值
 * @param pwd
 * @param saltRounds
 */
export async function getHash(pwd: string, saltRounds: number = 10): Promise<string> {
    return await bcrypt.hash(pwd, saltRounds)
}

/**
 * hash值对比
 * @param pwd
 * @param hash
 */
export async function hashCompare(pwd: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(pwd, hash)
}

/**
 * 简单拷贝
 * @param obj
 */
export function cloneObj(obj: any): any {
    return JSON.parse(JSON.stringify(obj))
}