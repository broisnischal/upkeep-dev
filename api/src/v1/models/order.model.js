import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		amount: Number,
		status: {
			type: Number,
			default: 0, // 0 - pending, 1 - approved, 3 - delivered
		},
		items: [
			{
				service: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Service",
					required: true,
				},
				unit: { type: Number, required: true },
			},
		],
	},
	{
		toJSON: {
			// transform(doc, ret) {
			// 	delete ret.__v
			// },
		},
		timestamps: true,
	},
)

const Order = mongoose.model("Order", OrderSchema)

export default Order
