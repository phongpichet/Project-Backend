const User = require('../models/userModel');

// การดึงข้อมูลทั้งหมด
const getAllUsers = async () => {
  return await User.find();
};

// การดึงข้อมูลผู้ใช้ตาม ID
const getUserById = async (userId) => {
  return await User.findById(userId);
};

// การเพิ่มผู้ใช้ใหม่
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// การอัปเดตข้อมูลผู้ใช้
const updateUser = async (userId, userData) => {
  return await User.findByIdAndUpdate(userId, userData, { new: true });
};

// การลบผู้ใช้
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
