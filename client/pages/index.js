
export default function Home() {
  return (
    <div className="container md:mx-auto px-4">
      <h1 className="text-center text-5xl p-5">האתר של מנש</h1>
      <div className="flex flex-row flex-wrap justify-evenly p-5">
        <div>
          <video className="mx-auto" src="/menash1.mp4" controls></video>
          <p className="text-center text-xl font-bold">מנש מחפש עבודה</p>
        </div>
        <div>
          <video className="mx-auto" src="/menash2.mp4" controls></video>
          <p className="text-center text-xl font-bold">מנש מקבל הצעה</p>
        </div>
        <div>
          <video className="mx-auto" src="/menash3.mp4" controls></video>
          <p className="text-center text-xl font-bold">מנש מקבל תישבוחות</p>
        </div>
      </div>
    </div>
  )
}
