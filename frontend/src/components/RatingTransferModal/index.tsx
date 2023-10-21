import { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@nextui-org/react";

export const ReceiverConfirmationModal = (props: {
  isOpen: boolean,
  onClose: () => void
}) => {
  const steps = [ 'Identification', 'Transfer', 'Confirm' ];
  const [ activeStepIdx, setActiveStepIdx ] = useState(0);

  useEffect(() => setActiveStepIdx(0), [props.isOpen]);

  const renderStepSummary = () => {
    return (
      <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {steps.map((step, idx) => 
          (activeStepIdx > idx) ? (
            <li key={idx} className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className={"flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500" + ((idx+1 < steps.length) ? " after:content-['/']": "")}>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                {step}
              </span>
            </li>
          ) : (
            <li key={idx} className="flex md:w-full items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
              <span className={"flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500" + ((idx+1 < steps.length) ? " after:content-['/']": "")}>
                <span className="mr-2">{idx+1}</span>
                {step}
              </span>
            </li>
          )
        )}
      </ol>
    )
  }

  const renderActiveStepContent = () => {
    if(activeStepIdx === 0) return (
      <>


        <p className="text-sm text-gray-400 text-center"> 
          In order to make sure that you've actually received your cash,
          please first scan the QR code thats shown on the giver's phone
          to confirm that he/she is actually the one you should exchange
          the money with.
        </p>
      </>
    );
    if(activeStepIdx === 1) return (
      <>
        <p className="text-md text-gray-800 text-center"> 
          Great, seems like you've met XYZ.
          <br/>
          Please confirm that you want to proceed and transfer the following amount to him/her:
        </p>
        <h2 className="font-medium text-2xl cc--text-primary text-center">30 €</h2>
      </>
    );
    if(activeStepIdx === 2) return (
      <>
        <p className="text-md text-center"> 
          Your (digital) money has been transferred successfully to XYZ.
        </p>
        <p className="text-md text-gray-800 text-center">
          After XYZ handed the cash to you, please confirm that you've actually received the following amount:
        </p>
        <h2 className="font-medium text-2xl cc--text-primary text-center">30 €</h2>
      </>
    );
  }

  const renderActiveStepActions = () => {
    if(activeStepIdx === 0) return (
      <Button className="w-full" size="sm" color="danger" variant="flat" onClick={props.onClose}>
        Abort Transaction
      </Button>
    );
    if(activeStepIdx === 1) return (
      <div>
        <Button className="w-full mb-2 text-white" size="lg" color="success" variant="solid" onClick={() => setActiveStepIdx(2)}>
          <CheckOutlined />
          Transfer (Digital) Money
        </Button>
        <Button className="w-full" size="sm" color="danger" variant="flat" onClick={() => setActiveStepIdx(0)}>
          Abort Transaction
        </Button>
      </div>
    );
    if(activeStepIdx === 2) return (
      <div>
        <Button className="w-full mb-2 text-white" size="lg" color="success" variant="solid" onClick={props.onClose}>
          <CheckOutlined />
          I've received the cash
        </Button>
        <Button className="w-full" size="sm" color="danger" variant="flat" onClick={() => setActiveStepIdx(1)}>
          Abort Transaction
        </Button>
      </div>
    );
  }

  return (
    <Modal isOpen={props.isOpen ?? true} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Receiver Confirmation</ModalHeader>
        <ModalBody>
          {renderStepSummary()}
          {renderActiveStepContent()}
        </ModalBody>
        <ModalFooter>
          {renderActiveStepActions()}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}