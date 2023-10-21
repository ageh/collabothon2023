import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import {Link as UiLink} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useEffect } from "react";

export const QRPage = () => {
    const {isOpen:isOpen1, onOpen:onOpen1, onOpenChange:onOpenChange1, onClose:onClose1} = useDisclosure();
    const {isOpen:isOpen2, onOpen:onOpen2, onOpenChange:onOpenChange2} = useDisclosure();

    useEffect(()=>{
        setTimeout(()=>onOpen1(), 4000)
    }, [])
    return (
     <div className="cc--page-home container mx-auto px-6 text-center">
            <div className="flex justify-center">
                <QRCode className="m-x-auto"
                id="123456"
                value="123456"
                size={300}
                level={"H"}
                includeMargin={true}
                renderAs="canvas"/>
            </div>
            <h1 className="m-x-auto"> Allow reciever to scan this QR 
            in order to initiate money transfer. </h1>
            <div>
            <Modal isOpen={isOpen1} onOpenChange={onOpenChange1}>
                <ModalContent>
                    {() => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Money Recieved!</ModalHeader>
                    <ModalBody>
                        <p> 
                        You have received 23€! You can now give 20€ in cash to Tim.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                    {/* <Button color="danger" variant="light" onPress={()=>setTimeout(()=>)}> */}
                        <Button color="danger" variant="light" onPress={()=>{setTimeout(()=>onOpen2(), 2000); onClose1()}}>
                        Close
                        </Button>
                    </ModalFooter>
                    </>
                    )}
                </ModalContent>
            </Modal>

            <Modal isOpen={isOpen2} onOpenChange={onOpenChange2}>
                <ModalContent>
                    {() => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Success!</ModalHeader>
                    <ModalBody>
                        <p> 
                        Confirmed! We have automatically transfered 20€ to your bank account and the additional
                        3€ earnings have been micro-invested into startups that improve the economy of developing
                        countries. Learn more about this cause here! You can choose to withdraw at any time,
                        or donate to other causes.
                        </p>
                        <Button
                        className="mt-4"
                        as={Link}
                        to="/earnings"
                        color="primary"
                        size="lg"
                        radius="full">
                            Go to my Earnings
                        </Button>
                        <Button
                        className="mt-4"
                        as={Link}
                        to="/earnings"
                        color="secondary"
                        size="lg"
                        radius="full">
                            Okay
                        </Button>
                        <div className="flex justify-center py-3">
                        <UiLink href="#" color="danger">Raise an Issue</UiLink>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="danger" onPress={onClose2}>
                        Open Dispute
                        </Button>
                        <Button color="success" onPress={onClose2}>
                        Close
                        </Button>
                    </ModalFooter> */}
                    </>
                    )}
                </ModalContent>
            </Modal>

            </div>
     </div>);
  }