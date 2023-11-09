import ReactLoading from "react-loading";
function Loader() {
  return (
    <div
      style={{
        margin: "20rem auto",
        textAlign: "center",
        width: "fit-content",
      }}
    >
      <ReactLoading type="spin" color="#f55c47" />
    </div>
  );
}

export default Loader;
