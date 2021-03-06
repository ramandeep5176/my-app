//
import reactDom from "react-dom";
import "./index.css";
import { menu } from "./test";
//

// import Data from "./test.js";
// css

function MenuList() {
  return (
    <>
      <Menu />
    </>
  );
}

function Menu() {
  return (
    <>
      {menu.map((menus) => {
        const { title, category, price, img, desc } = menus;
        function click() {
          console.log(title);
        }
        return (
          <>
            {/* key={menus.id} */}

            <article onMouseEnter={click} className="container">
              <h2 className="h2">{title}</h2> <p className="p">{category}</p>
              <p className="p">{price}</p>
              <img src={img} />
              <p>{desc}</p>
            </article>
          </>
        );
      })}
    </>
  );
}

// function MenuList() {
//   return (
//     <section>
//       {menu.map((menus) => {
//         return <Menus></Menus>;
//       })}
//     </section>
//   );
// }

// const Menus = (props) => {
//   const { title,category, price, img, desc } = props.menus;
//   return (
//     <article className="container">
//       <h2 className="h2">{title}</h2>
//       <p className="p">{category}</p>
//       <p className="p">{price}</p>
//       <img src={img} />
//       <p>{desc}</p>
//     </article>
//   );
// };

reactDom.render(<MenuList />, document.getElementById("root"));
