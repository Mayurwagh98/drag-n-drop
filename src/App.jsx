import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
// import Dropzone from "react-dropzone";
import "./App.css";

function App() {
  const [dragedFile, setDragedFile] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    console.log("acceptedFiles:", acceptedFiles);
    setDragedFile(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <>
      <h1>drag</h1>
      {/* <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
        {({ getRootProps, getInputProps }) => (
          <section className="main_drag_drop_section">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone> */}
      <div {...getRootProps()} className="main_drag_drop_section">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : dragedFile?.length > 0 ? (
          <p>{dragedFile[0].name}</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
}

export default App;
