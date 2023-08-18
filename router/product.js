const express = require("express")
const { getProducts, saveProduct, getProductById, saveCsvFile } = require("../controller/product-controller")
const productRouter = express.Router()
const multer = require("multer") 
const path = require('path');
//const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
    }
  })
  const upload = multer({ storage: storage })

  let storageCsv = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'uploads/Csv')    
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
  
const uploadCsv = multer({ storage: storageCsv })
  

productRouter.get("/", getProducts)
productRouter.get("/:id", getProductById)
productRouter.post("/", upload.single('image'),  saveProduct)

productRouter.post("/uploadCsv", uploadCsv.single('uploadfile'),  saveCsvFile)

module.exports = { productRouter }