// librairies import
import React from "react";
import axios from "axios";
// local import
// style import

export default function Test() {
  return (
    <>
      <div>
        <button
          onClick={() => {
            alert("Test");
            axios
            .get("http://localhost:9090/api/test/connection")
              // .get("httpa://api.bab-pool.com/api/test/connection")
              .then((response) => {
                console.log(response);
                alert('응답 결과' + response.data);
              })
              .catch((error) => console.log(error));
          }}
        >
          Test Button 1 : "https://api.babpool.com/api/test/connection"
        </button>
      </div>


      {/* go to 'home' page */}
        <div>
            <a href="/">Home</a>
        </div>
    </>
  );
}
