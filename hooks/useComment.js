// import type { Comment } from '../interfaces'
import React, { useState } from 'react'
import useSWR from 'swr'
import { useAuth0 } from '@auth0/auth0-react'
import { Redis } from '@upstash/redis';
const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useComments(title) {
  console.log("title >",title)
  const { user } = useAuth0();
  const date=()=>{// 👇️ in Local time
    const date = new Date();
    
    const year = date.getFullYear();
    // 👇️ getMonth returns integer from 0(January) to 11(December)
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const withSlashes = [year, month, day].join('/');
    console.log(withSlashes); // 👉️ 2022/10/25
    
    const withHyphens = [year, month, day].join('-');
    return withHyphens
    console.log(withHyphens); // 👉️ 2022-10-25
    }
  // const { name, picture, email } = user;
  const redis = new Redis({ url: 'https://apn1-simple-redbird-33593.upstash.io',
  token:process.env.NEXT_REDI_TOKEN})
    
  const { getAccessTokenSilently } = useAuth0()
  const [text, setText] = useState('')
let [data,setData]=useState("")
const comments=async()=>{
  let datas = await redis?.lrange(title, 0, 100 )

  console.log(datas)
  setData(datas)
 return datas;  
}

  const onSubmit = async (e) => {
    e.preventDefault()
   
 console.log(e,e.target[0].value,e.target.textContent)
    const token = await getAccessTokenSilently()

    try {
      await redis.lpush(title,{content: e.target[0].value,createdAt:date(),name:user?.name,picture:user?.picture,
      email:user?.email,sub:user?.sub})
   
    //  let data = await redis.get('comments');
    comments();
      console.log(data)
      setText('')
  
      // await mutate()
    } catch (err) {
      console.log(err)
    }
  }

  const onDelete = async (c) => {
    console.log("delete work")
    const token = await getAccessTokenSilently()

    try {
     await redis.remove(c.sub)
   
    } catch (err) {
      console.log(err)
    }
  }

  return { text, setText, comments, onSubmit, onDelete,data }
}
