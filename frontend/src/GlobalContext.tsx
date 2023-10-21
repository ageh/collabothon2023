import { PropsWithChildren, createContext, useState } from "react";
import { ReceiverConfirmationModal } from "./components/ReceiverConfirmationModal";

export const GlobalContext = createContext<any>({
  modalReceiverConfirmationOpen: true,
  modalReceiverConfirmationSetOpen: undefined
});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [ modalReceiverConfirmationOpen, modalReceiverConfirmationSetOpen ] = useState(false);

  return (
    <GlobalContext.Provider value={{
      modalReceiverConfirmationOpen,
      modalReceiverConfirmationSetOpen
    }}>
      {props.children}
      <ReceiverConfirmationModal
        isOpen={modalReceiverConfirmationOpen}
        onClose={() => modalReceiverConfirmationSetOpen(false)}
      />
    </GlobalContext.Provider>
  )
}