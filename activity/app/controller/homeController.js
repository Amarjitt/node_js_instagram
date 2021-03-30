
const getHomePage = async(req,res) =>{
    try{
        res.status(201).sendFile('/static/index.html');
    }
    catch(err){
        res.status(500).json({
            status: "unable to get homepage",
            "message": err.message
        })
    }
}


module.exports.getHomePage = getHomePage;