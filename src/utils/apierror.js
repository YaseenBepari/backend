class apierror extends Error{
    constructor(
        starusCode,
        message="something went wrong",
        errors=[],
        statck=""
    ){
        super(message);
        this.starusCode=starusCode;
        this.data=message
        this.success=false;
        this.errors=errors;

        if(statck){
             this.statc=statck;
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export{apierror}