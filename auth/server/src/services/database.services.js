const User= require('../models/user');

//find user
try{
const findUser = await User.findOne({email,username});
if(findUser.email ===email && findUser.username===username){
    return 
}
else if(findUser.username===username && findUser.email !==email){
    return 
}
else if(findUser.email===email && findUser.username !==username){
    return json({message:"Email already registered. Try logging in instead."});
}
else{
    return null;
}

}catch(err){

}
//create user



module.exports={finduser, createuser};