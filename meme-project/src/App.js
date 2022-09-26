import "./index.css";
import { useState, useEffect } from "react";
import Images from "./componets/Images";
export default function App() {
  const [templetes, setTemplets] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setTemplets(result.data.memes));
  }, []);

  return (
    <div className="App">
      {templetes.map((data) => (
        <Images key={data.id} name={data.name} url={data.url} />
      ))}
    </div>
  );
}
