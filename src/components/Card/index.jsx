import Qr from '../Qr'

const Card = () => (
  <div
    className="shadow-[0_25px_25px_0px_rgba(0,0,0,0.05)] bg-white flex flex-col items-center mx-auto rounded-[20px] w-80 px-4 pt-4 pb-10"
  > 
    <Qr />
    <div className="flex-initial text-center">
      <h1
        className="font-bold mb-4 text-[22px] text-blue-darkNavy"
      >
        Improve your front-end skills by building projects
      </h1>
      <p
        className="max-w-64 mx-auto text-grey text-[15px]"
      >
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </p>
    </div>
  </div>
)

export default Card