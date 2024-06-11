import BtnPrimary, { ButtonSecondary } from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import AvatarComponent from "./components/AvatarComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  const array = [2, 4, 4, 3];
  function handleClick() {
    alert("Button clicked! ");
  }
  const students = [
    {
      username: "Satthya",
      profile:
        "https://i.pinimg.com/564x/57/81/8d/57818d4dbf2dcc2bf990db368ee222d1.jpg",
    },
    {
      username: "Bunsinh",
      profile:
        "https://i.pinimg.com/564x/a1/65/90/a165904344de7a389cec52f09f02a6c2.jpg",
    },
    {
      username: "Rotha",
      profile:
        "https://i.pinimg.com/236x/25/b5/1a/25b51a2ecc96bdb58cc808f145358ab0.jpg",
    },
  ];
  return (
    <>
      <BtnPrimary title="Login" onClick={handleClick} />
      <BtnPrimary color="bg-green-600" title="Sign up" />
      {students.map((student, index) => (
        <AvatarComponent
          key={index}
          username={student.username}
          image={student.profile}
        />
      ))}
    </>
  );
}

export default App;
