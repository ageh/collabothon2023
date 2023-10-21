import React from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import cashIcon from '../../assets/Icons/AlertModal Cash.png'; // Import your cash icon image
import pinPoint from '../../assets/Icons/AlertModal Pinpoint.png'; // Import your cash icon image
import ProfileImage from '../../assets/Icons/AlertModal ProfileImage.png';

const iconStyles = {
    width: '20px', // Adjust the width as needed
    height: '20px', // Adjust the height as needed
    marginRight: '20px', // Add some spacing between the icon and the amount
};

const ProfileImageStyles = {
    width: '80px', // Adjust the width as needed
    height: '60px', // Adjust the height as needed
    marginRight: '20px',
    marginBottom: '20px'// Add some spacing between the icon and the amount
};

const amountStyles = {
    display: 'flex',
    alignItems: 'center',
};

const moneyStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px', // Adjust the font size as needed
    color: 'red',
};

const AlertModal = () => {
    const bigTextStyles = {
        fontSize: '36px', // Adjust the font size as needed
        color: 'red', // Change the color as desired
    };

    return (
        <Modal isOpen={true} isDismissable={false}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Cash Request!</ModalHeader>
                        <ModalBody>
                            {/* <h1 style={bigTextStyles}>Cash Request!</h1> */}

                            <div className="container">
                                <div className="details">
                                    <div style={amountStyles}>

                                        <img src={ProfileImage} alt="" style={ProfileImageStyles} />

                                        Name: Bruce (Batman)
                                    </div>
                                </div>
                                {/* <div className="name">Name: John Doe</div> */}
                                <div className="flex items-center space-x-3">
                                    <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                {/* <h1>Needs</h1> */}

                                <h2 style={moneyStyles}>50 Euros!</h2>

                                <div className="details">
                                    <div style={amountStyles}>

                                        <img src={pinPoint} alt="Pin point" style={iconStyles} />

                                        Distance: 150 meters - 3 mins
                                    </div>
                                </div>
                                <div className="commission">
                                    <div style={amountStyles}>

                                    <img src={cashIcon} alt="Cash Icon" style={iconStyles} />

                                    Commission: 10% - 5 euros
                                    </div>
                                </div>

                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onPress={onClose}>
                                Accept
                            </Button>
                            <Button color="danger" onPress={onClose}>
                                Decline
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export { AlertModal };
