const express = require('express')
const router = express.Router()

const  {
    getAllCustomers,
    getACustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
} = require("../Controllers/CustomerController")

// router.get("/api/customers", getAllCustomers);
// router.post("/api/customers", createCustomer);

//                      or
// router.route('/api/customers').get(getAllCustomers).post(createCustomer)

//                      or

router.route("/").get(getAllCustomers).post(createCustomer)
router.route("/").get(getAllCustomers).post(createCustomer)







// router.get("/api/customers/:customerId", getACustomer);
// router.delete("/api/customers/:customerId", deleteCustomer)
// router.patch("/api/customers/:customerId", updateCustomer)

//                          or

// router.route('/api/customers/:customerId').get(getACustomer).delete(deleteCustomer).patch(updateCustomer)
//                                  or
router.route('/:customerId').get(getACustomer).delete(deleteCustomer).patch(updateCustomer)


module.exports = router;