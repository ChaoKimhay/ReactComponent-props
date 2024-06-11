import ImageComponent from "./ImageComponent.jsx";

const AvatarComponent = ({ username, image }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ImageComponent avatar={image} />
      <h1 className="text-4xl text-center font-bold">{username}</h1>
    </div>
  );
};

export default AvatarComponent;
