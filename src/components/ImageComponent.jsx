// import style from "../styles/Image.module.css";
// const ImageComponent = (props) => {
//   console.log("props: ", props);
//   const user = {
//     avatar:
//       "https://i.pinimg.com/736x/a5/a5/76/a5a5768b5b7f81be90d2cacbcbef09b0.jpg",
//     name: "John Doe",
//   };

//   return (
//     <div>
//       <h1 className={style.heading}>Hello</h1>
//       <img src={props.avatar} alt={props.username} />
//     </div>
//   );
// };
// export default ImageComponent;

const ImageComponent = (props) => {
  console.log("props: ", props);

  return (
    <div>
      <img className="rounded-full w-64 h-64" src={props.avatar} alt="" />
    </div>
  );
};
export default ImageComponent;
