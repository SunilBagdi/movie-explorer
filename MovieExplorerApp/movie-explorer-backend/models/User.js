const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// User ka Schema define karo
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name required hai"],
      trim: true,
      minlength: [2, "The name must be at least 2 characters long."],
      maxlength: [50, "The name cannot exceed 50 characters."],
    },

    email: {
      type: String,
      required: [true, "Email required"],
      unique: true, 
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Enter valid Email.",
      ],
    },

    password: {
      type: String,
      required: [true, "Password required"],
      minlength: [6, "At least 6 Character"],
      select: false, 
    },

    favorites: [
      {
        movieId: Number,
        title: String,
        poster: String,
        rating: String,
        year: String,
        genre: String,
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
