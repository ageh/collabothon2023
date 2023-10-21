import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import { CheckOutlined, CheckCircleOutlined } from "@ant-design/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
  Divider,
} from "@nextui-org/react";

import rating_icon_handshake_yellow from "../../assets/rating_icon_handshake_yellow.svg";
import rating_icon_handshake_grey from "../../assets/rating_icon_handshake_grey.svg";
import rating_icon_handshake_half from "../../assets/rating_icon_handshake_half.svg";
import profile from "../../assets/profile.png";

export const GiverConfirmationModal = (props: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const steps = ["Identification", "Transfer", "Confirm"];
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [transferPending, setTransferPending] = useState(false);
  const [handoverPending, setHandoverPending] = useState(false);

  useEffect(() => {
    setActiveStepIdx(0);
    if (props.isOpen) setTimeout(() => setActiveStepIdx(1), 10000);
  }, [props.isOpen]);
  useEffect(() => {
    if (activeStepIdx === 1) {
      setTransferPending(true);
      setTimeout(() => {
        setTransferPending(false);
        setActiveStepIdx(2);
      }, 5000);
    }
    if (activeStepIdx === 2) {
      setHandoverPending(true);
      setTimeout(() => setHandoverPending(false), 10000);
    }
  }, [activeStepIdx]);

  const renderStepSummary = () => {
    return (
      <ol className="flex items-center justify-between w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
        {steps.map((step, idx) =>
          activeStepIdx > idx ? (
            <li
              key={idx}
              className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                className={
                  "flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500" +
                  (idx + 1 < steps.length ? " after:content-['/']" : "")
                }
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {step}
              </span>
            </li>
          ) : (
            <li
              key={idx}
              className="flex md:w-full items-center after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"
            >
              <span
                className={
                  "flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500" +
                  (idx + 1 < steps.length ? " after:content-['/']" : "")
                }
              >
                <span className="mr-2">{idx + 1}</span>
                {step}
              </span>
            </li>
          )
        )}
      </ol>
    );
  };

  const renderActiveStepContent = () => {
    if (activeStepIdx === 0)
      return (
        <>
          <div className="flex justify-center">
            <QRCode
              className="m-x-auto"
              id="123456"
              value="123456"
              size={300}
              level="H"
              includeMargin={true}
              renderAs="canvas"
            />
          </div>
          <p className="text-sm text-gray-400 text-center">
            In order to make sure that you've actually met with the right
            person, please let the receiver scan the QR code thats shown on your
            phone.
          </p>
        </>
      );
    if (activeStepIdx === 1)
      return (
        <>
          <Spinner className="block mx-auto" />
          <p className="text-md text-gray-800 text-center">
            Please wait until XYZ has transferred the (digital) money:
          </p>
          <h2 className="font-medium text-2xl cc--text-primary text-center">
            30 €
          </h2>
          <p className="text-sm mt-2 text-gray-400 text-center">
            Please do not handover any cash yet, as you haven't received any
            money for the time being!
          </p>
        </>
      );
    if (activeStepIdx === 2)
      return (
        <>
          {handoverPending ? (
            <>
              <Spinner className="block mx-auto" />
              <p className="text-md text-gray-800 text-center">
                XYZ has transferred the (digital) money, please handover the
                following amount in cash:
              </p>
              <h2 className="font-medium text-2xl cc--text-primary text-center">
                30 €
              </h2>
              <p className="text-sm mt-2 text-gray-400 text-center">
                The receiver has to confirm that he/she actually received the
                cash from you.
              </p>
            </>
          ) : (
            <>
              <p className="text-md text-gray-800 text-center">
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

                  <h2 className="font-medium text-l mt-1">
                    You've received 20 €
                  </h2>
                  <h2 className="font-medium text-l mt-1">and</h2>
                  <h2 className="font-bold text-3xl mt-2 text-green-700">
                    4.85 €
                  </h2>
                  <h2 className="font-medium text-l mt-1">commission</h2>
                </div>
              </p>
            </>
          )}
        </>
      );
  };

  const renderActiveStepActions = () => {
    if (activeStepIdx === 0)
      return (
        <Button
          className="w-full"
          size="sm"
          color="danger"
          variant="flat"
          onClick={props.onClose}
        >
          Abort Transaction
        </Button>
      );
    if (activeStepIdx === 1)
      return (
        <div className="w-full">
          <Button
            className="w-full"
            size="sm"
            color="danger"
            variant="flat"
            onClick={props.onClose}
          >
            Abort Transaction
          </Button>
        </div>
      );
    if (activeStepIdx === 2 && handoverPending)
      return (
        <div className="w-full">
          <Button
            className="w-full"
            size="sm"
            color="danger"
            variant="flat"
            onClick={props.onClose}
          >
            Abort Transaction
          </Button>
        </div>
      );
    if (activeStepIdx === 2 && !handoverPending)
      return (
        <div className="w-full">
          <Button
            className="w-full mb-2 text-white"
            size="lg"
            as={Link}
            to="/earnings"
            color="success"
            variant="solid"
            onClick={props.onClose}
          >
            Go to Earnings
          </Button>
          <Button
            className="w-full"
            size="sm"
            color="default"
            variant="flat"
            onClick={props.onClose}
          >
            Close Transaction
          </Button>
        </div>
      );
  };

  return (
    <Modal isOpen={props.isOpen ?? true} onClose={props.onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Receiver Confirmation
        </ModalHeader>
        <ModalBody>
          {renderStepSummary()}
          {renderActiveStepContent()}
        </ModalBody>
        <ModalFooter>{renderActiveStepActions()}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
