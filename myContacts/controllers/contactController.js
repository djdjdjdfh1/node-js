const asyncHandler = require('express-async-handler')
//  Get all contacts

const getAllContacts = asyncHandler(async(req,res) => {
    res.send("Contacts Page");
})

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        return res.send('필수값이 입력되지 않았습니다.')
    }
    
    res.send('Create Contacts')
})

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  // 연락처 상세 보기
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// @desc Update contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  // 연락처 수정하기
  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  // 연락처 삭제하기
  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});


module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact};