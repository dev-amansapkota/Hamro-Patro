
// import axios from 'axios';
// import * as cheerio from 'cheerio';

// interface NepaliDateInfo {
//   nepaliDate: string;
//   currentTime: string;
//   englishDate: string;
// }
// const getNepaliDateAndTime = async (): Promise<NepaliDateInfo> => {
//   try {
//     const { data } = await axios.get('https://www.hamropatro.com/');
//     const $ = cheerio.load(data);

//     const nepaliDate = $('#top .container12 .column4 .date .nep')
//       .text()
//       .trim()
//       .replace('Nepali Date:', '')
//       .trim();

//     const currentTime = $('#top .container12 .column4 .time span')
//       .text()
//       .trim()
//       .replace('Current time:', '')
//       .trim();

//     const englishDate = $('#top .container12 .column4 .time .eng')
//       .text()
//       .trim()
//       .replace('English date:', '')
//       .trim();

//     return {
//       nepaliDate: nepaliDate || 'Nepali Date not found',
//       currentTime: currentTime || 'Current time not found',
//       englishDate: englishDate || 'English date not found',
//     };
//   } catch (error) {
//     throw new Error('Failed to scrape Nepali date and time');
//   }
// };
  async function getNepaliCalender() {
  // const { nepaliDate, currentTime, englishDate } = await getNepaliDateAndTime();

  return (
    
 <div className="p-6">
  <h1 className="text-black text-center font-bold text-2xl mb-4">Calendar</h1>

  <div className="grid grid-cols-7 text-center font-bold mb-2">
    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
      <div key={day} className="text-gray-700 border-b-2 border-gray-400 pb-2">
        {day}
      </div>
    ))}
  </div>
  <div className="grid grid-cols-7 text-center font-bold gap-2 ">
    {Array.from({ length: 30 }, (_, i) => (
      <div
        key={i}
        className="text-gray-950 border border-zinc-400 p-2 rounded-md h-20 hover:bg-blue-900"
      >
        <div className="font-semibold">{i + 1}</div>
        <div className="text-xs text-gray-500">Event</div>
      </div>
    ))}
  </div>
</div>

 
    // <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50">
    //   <h1 className="text-3xl font-bold mb-6 text-center">📅 Nepali Calendar Info</h1>
    //   <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4 text-gray-800">

    //     <div>
    //       <span className="font-semibold">📆 Nepali Date:</span> {nepaliDate}
    //     </div>
    //     <div>
    //       <span className="font-semibold">🕒 Current Time:</span> {currentTime}
    //     </div>
    //     <div>
    //       <span className="font-semibold">📅 English Date:</span> {englishDate}
    //     </div>
    //   </div>
    // </main>
  );
}

export default getNepaliCalender