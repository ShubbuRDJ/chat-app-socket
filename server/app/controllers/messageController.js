const { default: mongoose } = require("mongoose");
const { Message } = require("../model");
const { create } = require("../services/common");
const { responseData } = require("../utils/responseData/responseData");

module.exports.addMessage = async (req, res) => {
    try {
        const { from, to, message } = req.body;
        const payload = { message: { text: message }, users: [from, to], sender:from };
        const addMsg = await create(Message, payload);
        if (addMsg) {
            return res
                .status(201)
                .send(
                    responseData.success(
                        '',
                        "Message added successfully.",
                        201
                    )
                );
        } else {
            return res.status(400).send(responseData.failure("Failed to add message.", 400));
        }
    } catch (error) {
        return res.status(500).send(responseData.failure(error.message, 500));
    }
};

module.exports.getAllMessages = async (req, res) => {
    try {
        const {from,to} = req.body;
        const messages = await Message.find({
            users:{
                $all:[from,to],
            },
        }).sort({updatedAt:1});
        const projectMessage = messages?.map((msg)=>{
            return{
                fromSelf:msg.sender.toString() === from,
                message:msg.message.text,
            }
        });
        if (projectMessage) {
            return res.status(200).send(responseData.success(projectMessage, "Data Fatched Successfully!", 200));
        }
        else {
            return res.status(404).send(responseData.failure("Messages Not Found!", 404));
        }

    } catch (error) {
        return res.status(500).send(responseData.failure("Internal server error!", 500));
    }
};
