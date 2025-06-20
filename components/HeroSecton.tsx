'use client'
import React, {  useState } from 'react'
import { GrFormSearch } from "react-icons/gr";


 const items = [
  "स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल",
  "भारतसँगको खेलको तयारी",
  "नेपालको मौसम विवरण",
  "राजनीतिक समिक्षा",
  "आजको राशिफल",
];
const HeroSecton = () => {
  const [query, setQuery] = useState("")
  const [show, setShow] = useState(false)
  const HandleSearchClick = () => {
  if (query.trim()) {
    setShow(true);
  }
};
  const HandleSearchBlur =()=>{
    setTimeout(()=>setShow(false), 200)
  }
  
 const FilteredItem = items.filter(item=>item.toLowerCase().includes(query.toLowerCase()))
   
  return (
    <div className='my-18 w-full'>
        
    <div className=' bg-red-500 h-50 text-white flex '>
        
        <div>
            <h2 className='text-3xl py-4 mx-8 '>३ असार २०८२, मंगलवार</h2>
        <h2 className='-my-2 mx-8 '>असार कृष्ण षष्ठी</h2>
        <h2 className='my-2 mx-8'>पञ्चाङ्ग: विषकुम्भ वणिज शतभिषा</h2>
        <h2 className='mx-8'>बेलुकीको {new Date().toLocaleTimeString()}</h2>
        <h2 className='mx-8'>{new Date().toLocaleDateString('en-us',{month:'short', day:'numeric', year:'numeric'})}</h2>
        </div>
        <div className='my-7 mx-7'><img src="https://www.hamropatro.com/images/rotating-ads//recharge2.gif"  width={700}></img></div>
    </div>
    <div className='flex justify-between'>
        
        <div className='text-gray-500 mx-4 my-4'>
           
            <h2>Nepali Calendar 2082</h2>
            
        </div>
        <div className='flex flex-col'> 
            <div className='flex'>
              <GrFormSearch className='text-black my-5 text-xl '/>

            <input type='text' onClick={HandleSearchClick} onBlur={HandleSearchBlur} placeholder='Search events' value={query} onChange={(e)=>setQuery(e.target.value)} className='text-gray-800 my-4 '></input>
            </div>
            
            
            {show && query.trim() && FilteredItem.length>0 && <ul className='flex flex-col text-black'>
            {FilteredItem.map((item, index)=>(
              <li className='bg-white text-black rounded shadow p-2 ' 
              key={index}
              onClick={()=>{
                  setQuery(item)
                setShow(false)
                }
              }
              
              >
                
              {item}
                </li> 
            ))}
            </ul>} 
            </div>
            
      
    </div>

    <div>
      
        <div>
            <h2 className='text-black mx-4 '>समाचार बुलेटिन</h2>

          <div className='flex '>
              <div className=' rounded-full mx-3 my-3  relative w-fit   drop-shadow-inherit hover:scale-105 translate-1 duration-300   '>
                <img src={'https://images.hamro-files.com/of1NqTMQD819qBok5VjMrKOXYak=/300x300/smart/https://12khari.top/uploads/posts/Nepal_sc-1750168399.jpg'} className=' h-55 w-36 text-ellipsis object-cover  rounded '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1  rounded  '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' rounded-full mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit  hover:scale-105 translate-1 duration-300 '>
                <img src={'https://images.hamro-files.com/0Eax843A8YitB_1mmnamMCR4Mbo=/300x300/smart/https://rpcdn.ratopati.com/media/albums/chimpanji-zoo_11_YmO428Poid.jpg'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 rounded-xl '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1 rounded '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' rounded-full mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit   hover:scale-105 translate-1 duration-300 '>
                <img src={'https://images.hamro-files.com/SAelTjr-ZkUeYzppgpHQgIeIHwE=/300x300/smart/https://12khari.top/uploads/posts/WhatsApp-Image-2025-06-17-at-5.03.33-PM-1750166350.jpeg'} className='h-55 rounded-xl w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1  rounded'>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' rounded-full mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit  hover:scale-105 translate-1 duration-300 '>
                <img src={'https://images.hamro-files.com/NlV6UZAkeYF7j-takD8fifvMzJI=/300x300/smart/https://www.onlinekhabar.com/wp-content/uploads/2025/06/Dharan-jhadap-1.jpg'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1 rounded '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' rounded-full mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit rounded  hover:scale-105 translate-1 duration-300 '>
                <img src={'https://images.hamro-files.com/uavSnYB8V8Hjf02_Kxd-FLHE69Q=/300x300/smart/https://rpcdn.ratopati.com/media/albums/darchula_rFBrYPWETi.jpg'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 rounded-xl '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1  rounded'>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit rounded   hover:scale-105 translate-1 duration-300'>
                <img src={'https://images.hamro-files.com/0MkBGlOrLp0VWEOo9KFXN3os9Y4=/300x300/smart/https://12khari.top/uploads/posts/badhi12-1727595344.jpg'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 rounded-xl'
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1 rounded  '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
              <div className=' rounded-full mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit  rounded  hover:scale-105 translate-1 duration-300'>
                <img src={'https://images.hamro-files.com/MAfrA7GfdoMO9TQNr4I0t9x98ck=/300x300/smart/https://npcdn.ratopati.com/media/news/494839341_1443127663525714_8329134232679631152_n_frkh2d7XoG.jpg'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100 rounded-xl'
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1  '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
            <div className=' mx-3 my-3 relative w-fit  drop-shadow-2xl  drop-shadow-inherit  rounded  hover:scale-105 translate-1 duration-300 '>
                <img src={'data:image/jpeg;base64,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'} className='h-55 w-33 text-ellipsis object-cover bg-gradient-to-b from-gray-600 opacity-0 to-black opacity-100  hover:scale-105 translate-1 duration-300 rounded-xl '
                />
                
                <h3 className='text-white  absolute -my-12 left-2 px-2 text-sm py-1 rounded '>स्कटल्यान्डविरुद्ध फिल्डिङमा नेपाल</h3>
           
                
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSecton