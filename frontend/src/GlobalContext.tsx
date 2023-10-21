import { PropsWithChildren, createContext, useState } from "react";
import { ReceiverConfirmationModal } from "./components/ReceiverConfirmationModal";
import { GiverConfirmationModal } from "./components/GiverConfirmationModal";

export const GlobalContext = createContext<any>({
  modalReceiverConfirmationOpen: true,
  modalReceiverConfirmationSetOpen: undefined,
  modalGiverConfirmationOpen: true,
  modalGiverConfirmationSetOpen: undefined
});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [ modalReceiverConfirmationOpen, modalReceiverConfirmationSetOpen ] = useState(false);
  const [ modalGiverConfirmationOpen, modalGiverConfirmationSetOpen ] = useState(false);

  return (
    <GlobalContext.Provider value={{
      modalReceiverConfirmationOpen,
      modalReceiverConfirmationSetOpen,
      modalGiverConfirmationOpen,
      modalGiverConfirmationSetOpen
    }}>
      {props.children}
      <ReceiverConfirmationModal
        isOpen={modalReceiverConfirmationOpen}
        onClose={() => modalReceiverConfirmationSetOpen(false)}
      />
      <GiverConfirmationModal
        isOpen={modalGiverConfirmationOpen}
        onClose={() => modalGiverConfirmationSetOpen(false)}
      />
    </GlobalContext.Provider>
  )
}