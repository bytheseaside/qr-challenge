import QrCode from "./QrCode";

const Qr = () => (
  <div className="relative overflow-hidden mb-6 rounded-[10px]">
    <div className="bg-blue  rounded-full z-0 absolute w-80 h-80 -top-[175px] -left-[115px]" />
    <div
      className="bg-blue-dark p-16 w-72 h-72  flex-initial"
    >
      <QrCode />
    </div>
    <div className="bg-blue rounded-full z-0 absolute w-[270px] h-[270px] top-[204.5px] -right-[113.5px]" />
  </div>
)

export default Qr