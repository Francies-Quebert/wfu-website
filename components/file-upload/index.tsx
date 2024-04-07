'use client';
import Image from 'next/image';
import viewGreece from '@assets/file-upload/view.png';
import churchGreece from '@assets/file-upload/church.png';
import danceGreece from '@assets/file-upload/dance.png';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import Button from '../button/Button';
import { Loader } from '../loader';
import { Previews } from '../previews';
export const FileUploader = () => {
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    setFiles(
      acceptedFiles.map((file: Blob) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
    acceptedFiles.forEach((file: Blob) => {
      // Do something with the image files
      const reader = new FileReader();
      reader.onload = () => {
        // Do something with the image data, like displaying previews
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFileDialogActive,
    open,
  } = useDropzone({
    onDrop: onDrop,
    accept: {
      'image/*': [],
    },
  });

  const isUploading = isDragActive || isFileDialogActive;
  return (
    <>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={`${isUploading ? 'opacity-20' : ''} flex flex-col justify-center items-center pb-4`}
      >
        <input {...getInputProps()} />
        <div
          className={`border-2 ${isUploading ? 'border-solid' : 'border-dashed'} border-primary flex rounded-md space-x-2 max-w-72 p-2 max-h-72 `}
        >
          {isUploading ? (
            <Loader />
          ) : (
            <>
              <div className="flex-1">
                <Image
                  src={churchGreece}
                  alt="Couple in greece church"
                  className="bg-cover h-full"
                />
              </div>
              <div className="flex-1">
                <Image src={viewGreece} alt="A view of greece" />
                <Image src={danceGreece} alt="Couple dance in greece" />
              </div>
            </>
          )}
        </div>
      </div>
      <Previews
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        files={files}
      />
      <Button
        type="primary"
        onClick={open}
        className={`${isUploading ? 'opacity-20' : ''} w-full`}
      >
        Upload Photo
      </Button>
    </>
  );
};
