import mongoose from "mongoose";
<<<<<<< HEAD
import bcrypt from "bcryptjs"
=======

>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
<<<<<<< HEAD
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

});

const User = mongoose.model("User", userSchema);
=======
const User = mongoose.model("user", userSchema);
>>>>>>> 763ec553f1102d0400dc75d306f9efcdd15f42a4

export default User;
