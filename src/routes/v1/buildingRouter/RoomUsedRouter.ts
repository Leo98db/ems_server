import express from "express"
import { ResponseHelp } from "../../ResponseHelp"
import { RoomUsedService } from "../../../services"

const router = express.Router()

router.post("", async (req, res) => {
    try {
        const result = await RoomUsedService.add(req.body)
        if (Array.isArray(result)) {
            ResponseHelp.sendError(result, req, res)
            return
        }
        ResponseHelp.sendData(result, req, res)
    } catch (error) {
        ResponseHelp.sendError(error, req, res)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const result = await RoomUsedService.findByIdAndDelete(id)
        if (!result) {
            ResponseHelp.sendError(`id[${id}]不存在`, req, res)
            return
        }
        ResponseHelp.sendData(true, req, res)
    } catch (error) {
        ResponseHelp.sendError(error, req, res)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await RoomUsedService.findById(id)
        if (!result) {
            ResponseHelp.sendError(`id[${id}]不存在`, req, res)
            return
        }
        ResponseHelp.sendData(result, req, res)
    } catch (error) {
        ResponseHelp.sendError(error, req, res)
    }
})

router.get("", async (req, res) => {
    const result = await RoomUsedService.find(req.query)
    ResponseHelp.sendPageData(result, req, res)
})

router.put("/:id", async (req, res) => {
    try {
        const { _id,  ...roomUsedBody } = req.body
        const room = await RoomUsedService.edit(req.params.id, roomUsedBody)
        if (Array.isArray(room) || room === null) {
            ResponseHelp.sendError(room ? room : "使用教室id错误" + req.params.id, req, res)
            return
        }
        ResponseHelp.sendData(true, req, res)
    } catch (error) {
        ResponseHelp.sendError("使用教室id错误" + error, req, res)
    }
})

export default router