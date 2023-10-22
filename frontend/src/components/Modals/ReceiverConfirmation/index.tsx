import { useContext, useMemo } from "react";
import { QrReader } from "react-qr-reader";
import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider
} from "@nextui-org/react";
import { GlobalContext } from "../../../GlobalContext";
import rating_icon_handshake_yellow from "../../../assets/rating_icon_handshake_yellow.svg";
import rating_icon_handshake_grey from "../../../assets/rating_icon_handshake_grey.svg";
import rating_icon_handshake_half from "../../../assets/rating_icon_handshake_half.svg";
import profile from "../../../assets/profile.png";

export const ReceiverConfirmationModal = (props: {
  isOpen: boolean,
  onClose: () => void
}) => {
  const { activeRequest, handleAbort, handleUpdate } = useContext(GlobalContext);

  const steps = [ 'Identification', 'Transfer', 'Confirm' ];
  
  const activeStepIdx = useMemo(() => {
    if(!activeRequest?.identificationConfirmed) return 0;
    else if(!activeRequest?.transferConfirmed) return 1;
    else return 2;
  }, [activeRequest]);

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
    if(!props.isOpen) return;
    if(activeStepIdx === 0) return (
      <>
        {/*
        <QrReader
            constraints={{ facingMode: 'environment'}}
            onResult={(result: any, error) => {
              if(activeStepIdx !== 0) return;
              console.log(result, error);
              if(!error && result !== undefined) {
                console.log(result?.text);
                handleUpdate({ identificationConfirmed: true })
              }
            }}
          />
        */}
          
        <Button onClick={() => handleUpdate({ identificationConfirmed: true })}>DEBUG</Button>

        <p className="text-sm text-gray-400 text-center"> 
          In order to make sure that you've actually met with the right person,
          please first scan the QR code thats shown on the giver's phone.
        </p>
      </>
    );
    if(activeStepIdx === 1) return (
      <>
        <p className="text-md text-gray-800 text-center"> 
          Great, seems like you've met Greta.
          <br/>
          Please confirm that you want to proceed and transfer the following amount to him/her:
        </p>
        <h2 className="font-medium text-2xl cc--text-primary text-center">
          {activeRequest?.amount}
          <span className="text-sm">€ (+ {activeRequest?.commission} €)</span>
        </h2>
      </>
    );
    if(activeStepIdx === 2) return (
      (!activeRequest?.handoverConfirmed) ? (
        <>
          <p className="text-md text-center"> 
            Your (digital) money has been transferred successfully to Greta.
          </p>
          <p className="text-md text-gray-800 text-center">
            After Greta handed the cash to you, please confirm that you've actually received the following amount:
          </p>
          <h2 className="font-medium text-2xl cc--text-primary text-center">
            {activeRequest?.amount}
            <span className="text-sm">€ (+ {activeRequest?.commission} €)</span>
          </h2>
        </>
      ) : (
        <p className="text-md text-gray-800 text-center">
          <div className="w-full text-center mt-5">
            <CheckCircleOutlined className="text-green-800 text-5xl" />
            <h1 className="font-bold text-xl mt-4">Transfer Completed</h1>
            <Divider className="my-5" />

            <h2 className="font-bold my-3">Rate Greta</h2>

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
                <img
                  src={rating_icon_handshake_half}
                  className="inline w-10 h-8"
                />
                <img
                  src={rating_icon_handshake_grey}
                  className="inline w-10 h-8"
                />
              </div>
            </div>
          </div>
        </p>
      )
      
    );
  }

  const renderActiveStepActions = () => {
    if(activeStepIdx === 0) return (
      <Button className="w-full" size="sm" color="danger" variant="flat" onClick={handleAbort}>
        Abort Transaction
      </Button>
    );
    if(activeStepIdx === 1) return (
      <div>
        <Button
          className="w-full mb-2 text-white"
          size="lg"
          color="success"
          variant="solid"
          onClick={() => handleUpdate({
            transferConfirmed: true
          })
        }>
          <CheckOutlined />
          Transfer (Digital) Money
        </Button>
        <Button className="w-full" size="sm" color="danger" variant="flat" onClick={handleAbort}>
          Abort Transaction
        </Button>
      </div>
    );
    if(activeStepIdx === 2) return (
      (!activeRequest?.handoverConfirmed) ? (
        <div>
          <Button
            className="w-full mb-2 text-white"
            size="lg"
            color="success"
            variant="solid"
            onClick={() => handleUpdate({
              handoverConfirmed: true
            })}
          >
            <CheckOutlined />
            I've received the cash
          </Button>
          <Button className="w-full" size="sm" color="danger" variant="flat" onClick={handleAbort}>
            Abort Transaction
          </Button>
        </div>
      ) : (
        <Button className="w-full" size="md" color="default" variant="flat" onClick={handleAbort}>
          Close Transaction
        </Button>
      )
      
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