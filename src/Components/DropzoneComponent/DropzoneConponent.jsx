import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function DropzoneComponent() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>Arrastra y suelta tus imágenes aquí.</div>
    </div>
  );
}

export default DropzoneComponent;
