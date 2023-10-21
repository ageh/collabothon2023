import { useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner
} from "@nextui-org/react";
import { GlobalContext } from "../../GlobalContext";

export const RequestWaitingModal = (props: {
  isOpen: boolean
}) => {
  const { handleAbort } = useContext(GlobalContext);

  return (
    <Modal isOpen={props.isOpen ?? true} closeButton={false}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Request Pending</ModalHeader>
        <ModalBody>
          <Spinner className="block mx-auto" />
          <p className="text-md text-gray-800 text-center">
            Please wait until we match you with somebody having the wanted amount on cash on hand...
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className="w-full"
            size="sm"
            color="danger"
            variant="flat"
            onClick={handleAbort}
          >
            Abort Transaction
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}