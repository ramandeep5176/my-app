//
//
import reactDom from "react-dom";
import Test from "./test.js";
function One() {
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        repellendus obcaecati ut eos ea, unde debitis molestiae velit, veniam
        labore no bis hic voluptatum dolor? Voluptatibus laudantium amet tenetur
        atque libero.
      </h1>
      this is raw
      <p>raman</p>
      <Test />
    </>
  );
}

reactDom.render(<One />, document.getElementById("root"));
