import 'mapbox-gl/dist/mapbox-gl.css';
import './meetup.css';
import { MapView } from "../../components/Map";

export const MeetupPage = () => {
  return (
    <div className="cc--page-meetup container mx-auto px-6">
      <h1 className="font-bold text-2xl mb-4">Meetup</h1>
      <MapView />
        <div className="bg-white shadow-md rounded-lg w-full">
            <div id="chatbox" className="p-4 h-60 overflow-y-auto">
              <div className="mb-2 text-right">
                <p className="own-bubble rounded-lg py-2 px-4 inline-block">Hello John, I can give you cash ... Let's meet at neosfer rooftop!</p>
              </div>
              <div className="mb-2">
                <p className="other-bubble rounded-lg py-2 px-4 inline-block">Hi Alice, I'll be there in 3 min! Thanks a lot</p>
              </div>
              <div className="mb-2 text-right">
                <p className="own-bubble rounded-lg py-2 px-4 inline-block">Great!</p>
              </div>
            </div>
            <div className="p-4 border-t flex">
                <input id="user-input" type="text" placeholder="Type a message" className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button id="send-button" className="own-bubble px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">Send</button>
            </div>
        </div>

    </div>
  );
}