import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  FrappeProvider,
  useFrappeAuth,
  useFrappeGetDocList,
} from "frappe-react-sdk";
import { Button } from "@/components/ui/button";
import Login from "@/pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FrappeProvider
        siteName={import.meta.env.VITE_SITE_NAME}
        socketPort={import.meta.env.VITE_SOCKET_PORT}
      >
        <Login />
      </FrappeProvider>
    </div>
  );
}

const TestComponent = () => {
  const { currentUser } = useFrappeAuth();

  return <div>{currentUser}</div>;
};

export default App;
