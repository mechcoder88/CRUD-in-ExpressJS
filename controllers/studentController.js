import StudentModel from "../models/Student.js"

class StudentController {
  // Create Document
  static createDoc = async (req, res) => {
    try {
      const {name, age, fees} = req.body;
      const doc = new StudentModel({
        name:name,
        age:age,
        fees:fees
      });
      // Saving Document
      const result = await doc.save();
      console.log(`Saved Document : \n`,result);

      // Redirecting to HOME PAGE
      res.redirect("/student");
    } catch (error) {
      console.log(`Error : `,error);
    }
  }

  // Retrieve All Document
  static getAllDoc = async (req, res) =>{
    try {
      // Reading Document
      const result = await StudentModel.find();
      console.log(`Returned Object Array : \n`, result);

      // Sending Data to 'index.ejs'
      res.render("index", {data: result});
    } catch (error) {
      console.log(`Error : `,error);
    }
  }

  // Show Edit Form with Data
  static editDoc = async (req, res) =>{
    try {
      // Finding Document with 'Id' received from 'URL' in the Database
      const result = await StudentModel.findById(req.params.id)
      console.log(`Returned Object : \n`, result);

      // Sending Fetched Data to Edit Pge 'edit.ejs'
      res.render("edit", {data:result});
    } catch (error) {
      console.log(`Error : `,error);
    }
    
  }

  // Update Document
  static updateDocById = async (req, res) =>{
    console.log(`Document Id : `,req.params.id);
    console.log(`Form Data : \n`,req.body);
    try {
      // Updating Document
      const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after" });
      console.log(`Updated Document : `.result);
    } catch (error) {
      console.log(`Error : `,error);
    }
    // Redirecting to HOME PAGE
    res.redirect("/student");
  }

  // Delete Document
  static deleteDocById = async (req, res) =>{
    console.log(`Document Id : `,req.params.id);
    try {
      // Deleting Document
      const result = await StudentModel.findByIdAndDelete(req.params.id);
      // Redirecting to HOME PAGE
      res.redirect("/student");
    } catch (error) {
      console.log(`Error : `,error);
    }  
  }
}

export default StudentController