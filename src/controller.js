const controller = {}
const Customers = require('./models/Customers')
controller.list = async (req, res) => {
    try {
        const response = await Customers.findAll()
        .then(function(data) {
           const res = {success: true, data: data}
           return res
        })
        .catch((error) =>{
            const res = {success: false, error: error}
            return res
        })
        return res.json(response)
    } catch (err) {
        console.log(err)
    }
}

//  create data 
controller.create = async (req, res) => {
    try {
        const response = await Customers.create({
           first_name: "Khy1",
           last_name: "Phat",
           email: "khy1@gmail.com",
           phone: "090599640",
           address: "123 Main St.",
        })
        .then(function(data) {
            const res = {
                success: true, 
                data: data,
                massage : "Create success"
            }
            return res
        })
        .catch((error) =>{
            const res = {success: false, error: error}
            return res
        })
        return res.json(response)
    } catch (err) {
        const res = {success: true, error: err}
        return res  
    }
}

// update data 
controller.update = async (req,res)=>{
    try {
        const id = req.params.id
        const response = await Customers.update({ 
            first_name: "Khy",
            last_name: "Phat",
            email: "khy.tik@gmail.com",
            phone: "0880599640",
            address: "123 Main St. BMC",
        },
        {
            where: {
                id: id
            }
        })
        .then(function(data) {
            const res = {
                success: true, 
                data: data,
                massage : "Update success"
            }
            return res
        })
        .catch((error) => {
            const res = {
                success: false, 
                error: error,
                massage : "Update error"
            }
            return res
        })
        return res.json(response)
        
    }
    catch (err) {
        const res = {success: false, error: err}
        return res
    }
    
}

// delete data 
controller.delete = async ( req, res) =>{

    try {
  
      const { id } = req.params;
  
      const response = await Customers.destroy({
        where: { id: id }
      })
      .then( function(data){
        const res = { success: true, data: data, message:"Deleted successful" }
        return res;
      })
      .catch(error => {
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }

module.exports = controller