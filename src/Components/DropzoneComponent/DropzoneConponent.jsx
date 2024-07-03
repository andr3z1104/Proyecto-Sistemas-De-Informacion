import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './DropzoneConponent.module.css';


function DropzoneComponent() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.text}>Añadir imagen</div>
    </div>
  );
}

export default DropzoneComponent;
