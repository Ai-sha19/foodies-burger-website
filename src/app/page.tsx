import Image from 'next/image';
import burger from "../../images/burger.png";

export default function Home() {
  return (
    // text
    <main className='flex justify-between items-center h-[600px]'>
      <div className='ml-10'>
        <h1 className='text-7xl font-semibold text-red-600 '>Welcome to</h1>
        <h2 className='text-5xl leading-[4rem] font-semibold'>The world of</h2>
        <h2 className='text-5xl font-semibold '>Tasty & Fresh Food.</h2>
        <p className='max-w-md mt-4'>Welcome to FOODies, where we bring you a world of delicious and fresh meals at your convenience. Get in touch with us for any inquiries or orders—your satisfaction is our priority!</p>
        <div className="flex items-center mt-4">
          <input
            type="search"
            placeholder="search burger..."
            className="border-2 border-gray-300 rounded-lg p-2"
          />
          <button className=" p-2 bg-red-600 text-white rounded-lg w-32">
            Search
          </button>
        </div>
      </div>
      {/* image */}
      <div>
        <Image src={burger} alt='image'></Image>
      </div>
    </main>
  )
}



