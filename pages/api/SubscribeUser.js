// import fetch from 'isomorphic-unfetch';
// export default  async(req,res)=>{

//   let emailConverted=JSON.stringify(req)
//  console.log("email",emailConverted)
// try{
//   const response = await fetch(
//     `http://localhost:3000/submit?email=${req.email}`,
// {method:"GET",mode:"no-cors"}
//   )
//   const data=await response
//   console.log("data>",data,response)
//   return data

//   } 
//   catch (error) {
//     console.log("error in catch ><",error)
//     }
// }

// import fetch from 'isomorphic-unfetch';

// export default async (req, res) => {
//   console.log("req>>>>>>>>>>>>>>>>>>>>>>>> ",req)
//   const { email } = req;

//   console.log({ email });

  // if (!email) {
  //   return res.status(400).json({ error: 'Email is required' });
  // }

  // try {
  //   const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  //   const API_KEY = process.env.MAILCHIMP_API_KEY;
  //   const DATACENTER = process.env.MAILCHIMP_API_SERVER;
  //   const data = {
  //     email_address: "sub@gmail.com",
  //     status: 'subscribed',
  //   };

  //   const response = await fetch(
  //     `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

  //     {
  //       body: JSON.stringify(data),
  //       headers: {
  //         Authorization: `apikey ${API_KEY}`,
  //         'Content-Type': 'application/json',
  //       },
  //       mode:"no-cors",
  //       method: 'POST',
  //     }
  //   );

  //   if (response.status >= 400) {
  //     return res.status(400).json({
  //       error: `There was an error subscribing to the newsletter.
  //       Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`,
  //     });
  //   }

  //   return res.status(201).json({ error: '' });
  // } catch (error) {
  //   return res.status(500).json({ error: error.message || error.toString() });
  // }
// };
import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
  console.log("req>>",req)
  const { email } = req.body;

  console.log({ email });

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: 'subscribed',
    };
   console.log("data>",data)
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `Basic ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }
    );
  
    if (response.status == 400) {
      return res.status(400).json({
        error: `Hey , You are already a user :(.`,
        err:response,
        data:data,
        status:response.status
      });
    }else if(response.status==401){
      return res.status(401).json({
        error:"api key invalid"
      })
    }

    return res.status(201).json({ success: 'user is created' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};