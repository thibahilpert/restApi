const mongoose = require("../../database/dbconnection");

const { TABLES, ROLES } = require("../constants");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      default: ROLES.MANAGER
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports = mongoose.model(TABLES.USER, userSchema);