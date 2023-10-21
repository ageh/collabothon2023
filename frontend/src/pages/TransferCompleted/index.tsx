import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import rating_icon_handshake_yellow from "../../assets/rating_icon_handshake_yellow.svg"
import rating_icon_handshake_grey from "../../assets/rating_icon_handshake_grey.svg"
import rating_icon_handshake_half from "../../assets/rating_icon_handshake_half.svg"

export const TransferCompletedPage = () => {
  return (
    <div className="cc--page-settings container mx-auto px-6">
      <h1 className="font-bold text-2xl mb-4">TransferCompleted</h1>
      <Link to="/">Home Page</Link>
      <CheckCircleOutlined className="w-10 h-8" />
      <div className="w-10 h-8">Rate XY</div>

      <div className="flex items-center space-x-3">
        <img src={rating_icon_handshake_yellow} className="w-10 h-8"/>
        <img src={rating_icon_handshake_yellow} className="w-10 h-8"/>
        <img src={rating_icon_handshake_yellow} className="w-10 h-8"/>
        <img src={rating_icon_handshake_half} className="w-10 h-8"/>
        <img src={rating_icon_handshake_grey} className="w-10 h-8"/>
      </div>
    </div>
  );
}