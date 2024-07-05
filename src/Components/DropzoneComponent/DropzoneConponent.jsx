import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import styles from './DropzoneConponent.module.css';

function DropzoneComponent({ onImageUpload }) {
  const [image, setImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    onImageUpload(acceptedFiles[0]);
  }, [onImageUpload]);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={styles.dropzone}>
      <input {...getInputProps()} />
      {image ? (
        <img src={URL.createObjectURL(image)} alt="Imagen seleccionada" className={styles.image} />
      ) : (
        <div className={styles.text} onClick={open}>Añadir imagen</div>
      )}
    </div>
  );
}

DropzoneComponent.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};

export default DropzoneComponent;
