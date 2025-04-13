import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userschema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,

    },
    Fullname:{
        type:String,
        required:true,
        lowercase:true,
        index:true
    },
    avatar:{
        type:String,//cloud url
        required:true,

    },
    coverimage:{
        type:String,

    },
    watchhistory:{
        type:Schema.Types.ObjectId,
        ref:"video"
    },
    password:{
        type:String,
        required:[true,"password is required"],
    },
    refreshtoken:{
        type:String,
    }
},
{timestamps:true}
);
userschema.pre("sava",async function(next){
    if(!this.isModified("password")){
    return next();
    }
        
    this.password= bcrypt.hash(this.password,10);
    next();
})
userschema.methods.isPasswordCorrect=async function(password){
 return await bcrypt.compare(password,this.password)
}

userschema.method.genrateAccessToken=function(){
    return jwt.sign(
        {
        _id:this._id,
        email:this.email,
        username:this.username,
        Fullname:this.Fullname
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRES


    }
)
}
userschema.method.genrateRefreshToken=function(){
    return jwt.sign({
        _id:this._id,
        
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_SECRET


    }
)
}
export const User=mongoose.model("User",userschema);