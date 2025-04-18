const axios=require("axios")

async function main(){
    const res=axios.post("https://httpdump.app/dumps/3966f437-3301-44c9-ab46-c15705001973",
        {
            data:
                "this is the data"
        },{
            headers:{
                user: 'kushagra',
                passwd:"1672i17863781"
            }
        }
    );
}
main();