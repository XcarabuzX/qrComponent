import './App.css'
import Card from './components/card'
import QrPng from './assets/img/image-qr-code.png';

function App() {

  return (
    <div className="flex items-center justify-center h-screen">
      <Card>
        <img className="rounded-xl" src={QrPng} alt="QR code"/>
        <h1 className="mt-4 mx-4 p-1 font-bold text-2xl text-center text-dark-blue">Improve your front-end skills by building projects</h1>
        <p className="text-grayish-blue mt-2 mb-4 mx-4 text-center text-base">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </Card>
    </div>
  )
}

export default App
