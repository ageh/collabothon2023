import { useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Avatar
} from "@nextui-org/react";
import { GlobalContext } from "../../../GlobalContext";
import { useNavigate } from "react-router-dom";
import commissionIconSrc from "../../../assets/commission.svg";
import distanceIconSrc from "../../../assets/distance.svg";
import rating_icon_handshake_yellow from "../../../assets/rating_icon_handshake_yellow.svg";
import rating_icon_handshake_half from "../../../assets/rating_icon_handshake_half.svg";
import robert from "../../../assets/robert.jpg";

export const RequestPreviewModal = (props: {
  isOpen: boolean,
  onClose: () => void
}) => {
  const navigate = useNavigate();
  const { activeRequest, handleUpdate, handleAbort, setRequestRole } = useContext(GlobalContext);

  return (
    <Modal isOpen={props.isOpen ?? true} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center">New Cash Request</ModalHeader>
        <ModalBody>
          <div className="flex items-center mx-auto">
            <Avatar
              isBordered
              as="button"
              className="ring-secondary transition-transform mr-2"
              color="primary"
              name="Robert Doe"
              size="sm"
              src={robert}
            />
            <div className="user-info ml-2">
              <h2 className="font-medium text-xl cc--text-primary text-center">Robert</h2>
            </div>
          </div>
          <div className="inline items-center space-x-1 mx-auto">
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-8 h-8"
            />
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-8 h-8"
            />
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-8 h-8"
            />
            <img
              src={rating_icon_handshake_yellow}
              className="inline w-8 h-8"
            />
            <img
              src={rating_icon_handshake_half}
              className="inline w-8 h-8"
            />
          </div>

          <p className="text-md text-gray-500 text-center">needs</p>
          <h2 className="font-medium text-6xl cc--text-primary text-center">
            {activeRequest?.amount}€
          </h2>
          <h3 className="font-medium text-md cc--text-primary text-center">
            <img src={commissionIconSrc} className="inline-block w-5 h-5 mr-2" />
            Commission: {activeRequest?.commission}€
          </h3>
          <h3 className="font-medium text-md cc--text-primary text-center">
            <img src={distanceIconSrc} className="inline-block w-5 h-5 mr-2" />
            Distance: {activeRequest?.distance}m
          </h3>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full"
            size="lg"
            color="success"
            variant="flat"
            onClick={() => {
              handleUpdate({ accepted: true })
                .then(() => {
                  setRequestRole('giver');
                  navigate('/meetup');
                })
            }}
          >
            Accept Request
          </Button>
          <Button
            className="w-full"
            size="lg"
            color="danger"
            variant="flat"
            onClick={handleAbort}
          >
            Decline Request
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}