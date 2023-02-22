import React from 'react'

function ContentSection() {
  return (
   <div className='content_section_container mt-3 mb-3 bd_green'>
     <div className='content_section '>
      <h1 className='content_title'>What is the primary purpose  of our organization?</h1>
      
    </div>
    <div className='content_section1  mt_negative'>

      {/* <h1 className='mt-3'>Application is About Information</h1> */}
      <p className='text_sm mt_2 content_text'>As an organization, we are pleased to inform you that our website is dedicated to providing comprehensive and accurate information about the bus system in Karachi. Our goal is to make the bus navigation as seamless and straightforward as possible for our users by providing detailed descriptions of each bus route, including the Greenline bus and People Bus Service, as well as key information such as bus stops, approximate travel times and any notable landmarks or points of interest along the way. Additionally, we have incorporated a map feature on our website that allows users to easily locate bus routes according to their desired destination. Furthermore, we also offer fare information, schedule and reviews of bus services, providing a one-stop-shop for our users to plan their trip, and also we provide a comparison chart of the bus services to help users decide on their preferred option. Our intention is to make the bus navigation experience for our users as effortless and informative as possible</p>
    </div>
    </div>
  )
}

export default ContentSection