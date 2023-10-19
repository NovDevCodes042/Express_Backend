//get access to db
const Customers = require("../Models/Customers")

const getAllCustomers = (req, res) =>  {
    res.status(200).json({ Customers, numOfCustomers: Customers.length, success: true})
}


// const getACustomer = (req, res) => {
//     res.send("get a single customer");
// };


const getACustomer = (req, res) => {
    const { customerId } = req.params;
    const customer = Customers.find((c) =>  c.id === parseInt(customerId));
    if (!customer) {
        return res.status(404).json({
            success: false,
            msg: `Customer with id : ${customerId} not found`,
        });
    }
    res.status(200).json({success: true, customer })
};



const createCustomer = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({success: false, msg: 'Plese provide a name'});
    }
    const newCustomer = {
        id:6,
        name,
    };
    res.status(201).json({success: true, customers : [...Customers, newCustomer]})
};



// const createCustomer = (req, res) => {
//     res.send("create a customer");
// };



// const updateCustomer = (req, res) => {
//     res.send("update customer");
// };


const updateCustomer = (req, res) => {
    const { customerId } = req.params
    const { name } = req.body
    if (!name) {
        return res.status(400).json({msg: 'provide a name'})
    }
    const updatedCustomers = Customers.filter((c) => {
        if (c.id === parseInt (customerId)){
            c.name = name
        }
        return c
    });
    res.status(200).json({ customers: updatedCustomers });
};


const deleteCustomer = (req, res) => {
    const { customerId } = req.params
    const customer = Customers.find((c) => c.id === parseInt(customerId))
    if (!customer) {
        return res.status(404).json({
            success: false,
            msg: `Customer with the id: ${customerId} not found `
        });
    }
    
    const remainingCustomers = Customers.filter((c) => c.id !== parseInt(customerId));

    res.status(200).json({ customers: remainingCustomers });
};
// const deleteCustomer = (req, res) => {
//     res.send("delete customer");
    
    
// };




module.exports = {
    getAllCustomers,
    getACustomer,
    updateCustomer,
    deleteCustomer,
    createCustomer,
};