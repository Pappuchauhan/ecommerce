 function errorHandler(error, request, response, next){
    if(response.statusCode==200){
        response.status(400)
    }
   return response.json({error:error.message, info: "this is error handler"})
 }

 module.exports = { errorHandler }