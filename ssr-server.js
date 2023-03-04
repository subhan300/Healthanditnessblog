
const express = require('express')
const app = express()
const axios = require('axios');
// const fetch = require('node-fetch');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))





app.get('/submit',async (req, res)=>{
  try {
// console.log("email>>>>>>>>>>>>",email,"sdd",req.data,req.params)
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const DATACENTER = process.env.MAILCHIMP_API_SERVER;
  const MAILCHIMP_AUDIENCE_ID=process.env.MAILCHIMP_AUDIENCE_ID

const url = `https://us21.api.mailchimp.com/3.0/lists/cb5d84a71e/members`;

const data = {
  email_address:email,
  status: "subscribed",
};

const config = {
 headers : {
    "Content-Type": "application/json",
    "Authorization": `Basic 06a9c725548743bd814d5007af0a684a-us21`,
  }
};



  if (!email || !email.length) {
   return res?.status(200).json({ error: "Please enter a email address" });
  }
 
    // const { url, data, headers } = getRequestParams(email);
// console.log("data",data,url)
    // const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`, {
    //   method: "POST",
      
    //   body: JSON.stringify({
    //     email_address: data.email_address,
    //     status: data.status,
    //   }),
    //   headers:{
    //     "Content-Type": "application/json",
    //     "Authorization": `apiKey ${API_KEY}`,
    //   },
    //   mode:"no-cors"
    // });
 const response=await axios.post(url,data,config)
    // console.log("res",response)
    // JSON.stringify(response.data)
    if(res.statusCode==200){
      // localStorage.setItem("statusCode",200)
      return res?.status(200).end("200");
    }else{
      return res.status(400).send(`400`)
    }
    
  } catch (err) {
    console.log("err",err.response.data)
     return res.status(400).send(`400`);
  }
}
)










app.get("/items",(req,res)=>{
  return res.send("sadsa")
})
app.listen(3000, () => {
  console.log('Server listening on port 3000!')
})
function getRequestParams(email) {
  // const API_KEY = process.env.MAILCHIMP_API_KEY;
  // const LIST_ID = process.env.MAILCHIMP_LIST_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const MAILCHIMP_AUDIENCE_ID=process.env.MAILCHIMP_AUDIENCE_ID
  // const DATACENTER = API_KEY.split("-")[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Basic ${API_KEY}`,
  };

  return { url, data, headers }

}


