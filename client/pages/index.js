
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-5xl p-5">האתר של מנש</h1>
      <div className="flex flex-row flex-wrap justify-evenly p-5">
        <a className="text-center text-xl font-bold" href="/watch/?video=menash1.mp4">מנש מחפש עבודה</a>
        <a className="text-center text-xl font-bold" href="/watch/?video=menash2.mp4">מנש מוצא עבודה</a>
        <a className="text-center text-xl font-bold" href="/watch/?video=menash3.mp4">מנש מקבל תשבוחות</a>
      </div>
    </div>
  )
}
