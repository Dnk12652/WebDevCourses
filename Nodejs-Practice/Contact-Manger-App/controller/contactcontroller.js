//@getall contacts
const Contact = require("../models/contactModel")

const getAllContacts = async (req, res) => {

  const allContacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json({
    message: "fetched contacts",
    data: allContacts,
  });
};
const createContactRecord = async (req, res) => {
  const { name, email, phoneno } = req.body;
  const contactDetails = await Contact.create({
    name,
    email,
    phoneno,
    user_id: req.user.id,
  });
  res.status(201).json({
    message: "posted successfully conacts",
    data: contactDetails,
  });
};
const getSingleContactRecord = async(req, res) => {
  const contactRecord = await Contact.findById({ _id: req.params.id })
  if (contactRecord.user_id !== req.user.id) {
    res.status(200).json({
      message: `User unable is not authorized to get data ${req.params.id}`,
      data: contactRecord,
    });
    return
  }
  res.status(201).json({
    message: `single contact record fetched ${req.params.id}`,
    data: contactRecord,
  });
}

const updateContactRecord = async (req, res) => {
   const { name, email, phoneno } = req.body;
  const contactRecord = await Contact.findById({ _id: req.params.id })
  console.log("userid__record=", contactRecord.user_id, "user_id_auth =", req.user.id);
  console.log(contactRecord.user_id !== req.user.id);
  if (contactRecord.user_id.toString() !== req.user.id) {
    res.status(200).json({
      message: `User unable is not authorized to get data ${req.params.id}`,
      data: contactRecord,
    });
    return;
  }
  if (contactRecord) {
     const updatedContact = await Contact.findByIdAndUpdate(
       req.params.id,
       req.body,
       { new: true }
     );
      res.status(201).json({
        message: `contact record updated ${req.params.id}`,
        data: updatedContact,
      });
  } else {
    res.status(201).json({
      message: `Provided contact is ${req.params.id} not found`,
    });
  }

};


const deleteContactRecord = async(req, res) => {
  const contactRecord = await Contact.findById({ _id: req.params.id })
  if (contactRecord.user_id !== req.user.id) {
    res.status(200).json({
      message: `User unable is not authorized to get data ${req.params.id}`,
      data: contactRecord,
    });
    return
  }
  if (contactRecord) {
    const deletedContact = await Contact.deleteOne({ _id: req.params.id });
      res.status(201).json({
        message: `contact record deleted ${req.params.id}`,
        data: deletedContact,
      });
  } else {
    res.status(201).json({
      message: `Provided contact id is ${req.params.id} not found`,
    });
  }
};

module.exports = {
  getAllContacts, createContactRecord, updateContactRecord,
  deleteContactRecord, getSingleContactRecord
}
