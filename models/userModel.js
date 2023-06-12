const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
      
    // },

    username: {
        type: String,
        required: [true, "Please add the user namename"],
      },
    email: {
      type: String,
      required: [true, "Please add the user email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please add the user password"],
    },
  },
  // {
  //   timestamps: true,
  // }
);

module.exports = mongoose.model("User", userSchema);