const express = require("express")
const router = express.Router()
const {  getAllContacts, createContactRecord, updateContactRecord,
  deleteContactRecord, getSingleContactRecord
}  = require("../controller/contactcontroller");
const validateToken = require("../middleWare/validateToken");

router.use(validateToken)
router.route("/").get(getAllContacts);

router.route("/").post(createContactRecord);
router.route("/:id").get(getSingleContactRecord);
router.route("/:id").put(updateContactRecord);
router.route("/:id").delete(deleteContactRecord);
module.exports = router