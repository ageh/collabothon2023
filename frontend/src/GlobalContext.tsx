import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { deleteRequest, getRequest, APIRequest, updateRequest } from "./api";
import { ReceiverConfirmationModal } from "./components/Modals/ReceiverConfirmation";
import { GiverConfirmationModal } from "./components/Modals/GiverConfirmation";
import { RequestWaitingModal } from "./components/Modals/RequestWaiting";
import { RequestPreviewModal } from "./components/Modals/RequestPreview";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      .then(() => setActiveRequest(updatedRequest))
      .catch((err) => console.error("Couldn't update request", err, updatedRequest));
  }

  const handleAbort = (dashboardRedirect: boolean = true) => {
    if(!activeRequest) return;
    return deleteRequest()
      .then(() => {
        setRequestRole(null);
        setActiveRequest(null);
        if(dashboardRedirect) navigate('/');
      })
      .catch((err) => console.error("Couldn't abort transaction / delete request", err, activeRequest));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getRequest()
        .then((req) => {
          if(req?.id) setActiveRequest(req);
          else {
            setActiveRequest(null);
            setRequestRole(null);
          }

          if(requestRole === 'receiver' && req?.accepted) navigate('/meetup');
        })
        .catch((err) => console.error("Couldn't perform recurrent request fetch", err));
    }, 2000);
    return () => clearInterval(interval);
  }, [requestRole]);

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
        isOpen={requestRole === 'receiver' && (activeRequest?.accepted ?? false) && (activeRequest?.transferActive ?? false)}
        onClose={() => modalReceiverConfirmationSetOpen(false)}
      />
      <GiverConfirmationModal
        isOpen={requestRole === 'giver' && (activeRequest?.accepted ?? false) && (activeRequest?.transferActive ?? false)}
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