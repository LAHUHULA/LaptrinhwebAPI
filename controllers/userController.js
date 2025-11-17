// import { successResponse, errorResponse } from "../helpers/response.js";

// src/controllers/usersController.js
import { users } from "../model/user.js";

// Lấy tất cả người dùng
export const getAllUsers = (req, res) => {
  res.status(200).json(users)
}

// Lấy người dùng theo ID
export const getUserById = (req, res) => {

  const id = parseInt(req.params.id);
  const user = users.find((u => u.id === id));

  if (!user) {
    res.status(404).json({
      status: 404,
      message: `User by ${id} not found!`
    });
  }

  res.status(200).json(user);
 
}


