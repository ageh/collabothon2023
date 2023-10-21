import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Image, Divider } from "@nextui-org/react";
import rating_icon_handshake_yellow from "../../assets/rating_icon_handshake_yellow.svg";
import rating_icon_handshake_grey from "../../assets/rating_icon_handshake_grey.svg";
import rating_icon_handshake_half from "../../assets/rating_icon_handshake_half.svg";
import profile from "../../assets/profile.png";

export const TransferCompletedPage = () => {
  return (
    <div className="cc--page-transfer-completed container mx-auto px-6">
      <div className="w-full text-center mt-5">
        <CheckCircleOutlined className="text-green-800 text-5xl" />
        <h1 className="font-bold text-xl mt-4">Transfer Completed</h1>
        <Divider className="my-5" />

        <h2 className="font-bold my-3">Rate John</h2>

        <div>
          <img
            className="inline"
            src={profile}
            width="50px"
            height="100%"
          ></img>

          <div className="inline items-center space-x-1 mt-5 p-4">
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-10 h-8"
            />
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-10 h-8"
            />
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-10 h-8"
            />
            <img src={rating_icon_handshake_half} className="inline w-10 h-8" />
            <img src={rating_icon_handshake_grey} className="inline w-10 h-8" />
          </div>
        </div>

        <h2 className="font-medium text-l mt-1">You've received 20 €</h2>
        <h2 className="font-medium text-l mt-1">and</h2>
        <h2 className="font-bold text-3xl mt-2 text-green-700">4.85 €</h2>
        <h2 className="font-medium text-l mt-1">commission</h2>
      </div>
    </div>
  );
};
