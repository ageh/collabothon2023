import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { deleteRequest, getRequest, APIRequest, updateRequest } from "./api";
import { ReceiverConfirmationModal } from "./components/ReceiverConfirmationModal";
import { GiverConfirmationModal } from "./components/GiverConfirmationModal";
import { RequestWaitingModal } from "./components/RequestWaitingModal";
import { RequestPreviewModal } from "./components/RequestPreviewModal";

export const GlobalContext = createContext<any>({
  requestRole: null,
  activeRequest: null,
  modalReceiverConfirmationOpen: true,
  modalReceiverConfirmationSetOpen: undefined,
  modalGiverConfirmationOpen: true,
  modalGiverConfirmationSetOpen: undefined,
  handleUpdate: undefined,
  handleAbort: undefined
});

export const GlobalContextProvider = (props: PropsWithChildren) => {
  const [ modalReceiverConfirmationOpen, modalReceiverConfirmationSetOpen ] = useState(false);
  const [ modalGiverConfirmationOpen, modalGiverConfirmationSetOpen ] = useState(false);

  const [ requestRole, setRequestRole ] = useState<"giver"|"receiver"|null>(null);
  const [ activeRequest, setActiveRequest ] = useState<APIRequest|null>(null);

  const handleUpdate = (update: Partial<APIRequest>) => {
    if(!activeRequest) return;
    const updatedRequest = {
      ...activeRequest,
      ...update
    };
    return updateRequest(updatedRequest)
      .then(() => {
        setRequestRole(null);
        setActiveRequest(updatedRequest);
      })
      .catch((err) => console.error("Couldn't update request", err, updatedRequest));
  }

  const handleAbort = () => {
    if(!activeRequest) return;
    return deleteRequest(activeRequest)
      .then(() => {
        setRequestRole(null);
        setActiveRequest(null);
      })
      .catch((err) => console.error("Couldn't abort transaction / delete request", err, activeRequest));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getRequest()
        .then((req) => {
          if(req?.id) setActiveRequest(req);
          else setActiveRequest(null);
        })
        .catch((err) => console.error("Couldn't perform recurrent request fetch", err));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GlobalContext.Provider value={{
      requestRole, setRequestRole,
      activeRequest, setActiveRequest,
      modalReceiverConfirmationOpen,
      modalReceiverConfirmationSetOpen,
      modalGiverConfirmationOpen,
      modalGiverConfirmationSetOpen,
      handleUpdate,
      handleAbort
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
      <RequestWaitingModal
        isOpen={requestRole === 'receiver' && !activeRequest?.accepted}
      />
      <RequestPreviewModal
        isOpen={!!activeRequest && requestRole === null && !activeRequest?.accepted}
        onClose={() => handleAbort()}
      />
    </GlobalContext.Provider>
  )
}