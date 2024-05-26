
const Footer = () => {
    
        const currentYear = new Date().getFullYear();
        return (
          <div className=' bg-[#4D869C] px-20 py-4 text-white ' >
          <div className='grid grid-cols-1  md:grid-cols-4 gap-x-4 p-5 border-b-2 border-slate-700 '>
               <div>
                   <div className='px-1 py-2'>
                      {/* Logo */}
        <a href='#' className='flex items-center' >
          <div><img src="https://i.ibb.co/pndLmw9/logo.png" alt="" className='max-h-12'/></div>
          <div>
           <p className='font-bold text-white'>MindTalk</p>
           <p className='font-thin text-xs text-white'>Your Mental Health matters</p>
          </div>
        </a>
                       <p className='text-sm py-3'>The homepage of PlayStorm NFT website wellcome visitors with a visually appealing design, featuring vibrant artwork and a dynamic display of tranding NFT collection.User can easity anvigate through different sections.</p>
                   </div>
                   <div className='flex items-center '>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 "><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                       <p className=''>mindtalk@email.com</p>
                   </div>
               </div>

               <div className='p-1 hidden md:block'>
               <p className='text-bold text-2xl py-1'>About</p>
               <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/" >About NFT</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/aboutus">Live Auctions</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/blogs">NFT Blog</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/addatoy">Activity</a></p>
               </div>

               <div className='p-1 hidden md:block'>
               <p className='text-bold text-2xl'>Support</p>
               <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Help & Support</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Item Details</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/signin">Author Profile</a></p>
                   <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Collection</a></p>
               </div>

               <div className='transition duration-150 ease-in-out'>
               <p className='text-bold text-2xl'>Get Subscribed !</p>
               <p className='text-sm py-1 w-full'>Subscribe to a newsletter is great way to stay informed about the leatest news & updates</p>
               <div className='py-1'>
     <input
       type="email"
       placeholder='Enter Your Email'
       className="relative rounded bg-transparent border-1 py-1 px-4 text-white text-center"
       style={{ width: '100%' }}
     />
   </div>
   <div className='py-1'>
     <button
       type="button"
       className="relative rounded bg-[#CDE8E5] py-1 text-[#4D869C]  hover:text-white hover:bg-[#7AB2B2] border-none"
       style={{ width: '100%' }}
     >
       Subscribe
     </button>
   </div>
               </div>
           </div>
               <p className='text-center p-4'>copyright {currentYear} mindtalk - All Right Reserved</p>
   
       </div>
   );
};

export default Footer;