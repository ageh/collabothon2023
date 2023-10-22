import { useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";
import { GlobalContext } from "../../../GlobalContext";
import { useNavigate } from "react-router-dom";

export const RequestPreviewModal = (props: {
  isOpen: boolean,
  onClose: () => void
}) => {
  const navigate = useNavigate();
  const { activeRequest, handleUpdate, handleAbort, setRequestRole } = useContext(GlobalContext);

  return (
    <Modal isOpen={props.isOpen ?? true} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">New Cash Request</ModalHeader>
        <ModalBody>
          <p className="text-md text-gray-800 text-center">
            {JSON.stringify(activeRequest)}
          </p>
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