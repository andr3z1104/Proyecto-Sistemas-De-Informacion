import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './DropzoneConponent.module.css';

function DropzoneComponent() {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      <div className={styles.text} onClick={open}>Añadir imagen</div>
    </div>
  );
}

export default DropzoneComponent;