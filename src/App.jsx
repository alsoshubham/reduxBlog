import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from ".//appwrite/auth"
function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then()
    .finally()
  }, [])
  return (
    <>
      <h1>hello appwrite</h1>
    </>
  );
}

export default App;
