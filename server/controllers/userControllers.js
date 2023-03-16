const jwt = require('jsonwebtoken')
const bcript = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// @desc   Registers a new user
// @route POSTs to /api/users
// @access is Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password  } = req.body

  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields!')
  }

  res.json({ message: 'Register User' })
})

// @desc   Authenticate users
// @route POST to /api/users/login
// @access is Public

const loginUser = asyncHandler (async (req, res) => {
  res.json({ message: 'Login User' })
})

// @desc   Get user data
// @route GET to /api/users/me
// @access is Public

const getMe = asyncHandler ( async (req, res) => {
  res.json({ message: 'User data' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe, 
}