import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    read: { type: Boolean, default: false, required: true },
    receivedAt: { type: String },
  },
  {
    timestamps: true,
  },
);
const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
