const userRepository = require('../repositories/userRepository');

// ดึงข้อมูลผู้ใช้ทั้งหมด
const getAllUsers = async (req, res) => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
};

// ดึงข้อมูลผู้ใช้ตาม ID
const getUserById = async (req, res) => {
  try {
    const user = await userRepository.getUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err });
  }
};

// สร้างผู้ใช้ใหม่
const createUser = async (req, res) => {
  try {
    const newUser = await userRepository.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

// อัปเดตข้อมูลผู้ใช้
const updateUser = async (req, res) => {
  try {
    const updatedUser = await userRepository.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err });
  }
};

// ลบผู้ใช้
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userRepository.deleteUser(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
