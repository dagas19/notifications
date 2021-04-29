import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Notification from "../models/notificationModel.js";

const notificationRouter = express.Router();

notificationRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    Notification.receivedAt = Date.now();
    const createdNotifications = await Notification.insertMany(
      data.notifications,
    );
    res.send({ createdNotifications });
  }),
);

export default notificationRouter;
