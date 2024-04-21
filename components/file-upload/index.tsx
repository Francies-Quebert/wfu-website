'use client';
import Image from 'next/image';
import viewGreece from '@assets/file-upload/view.png';
import churchGreece from '@assets/file-upload/church.png';
import danceGreece from '@assets/file-upload/dance.png';
import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import { Previews } from '../previews';
import Tap from '@assets/tap.gif';
import { getBucketSignedURL } from '@/utility/actions';

export const FileUploader = () => {
  const [files, setFiles] = useState<any>([]);

  const onDrop = useCallback(async (acceptedFiles: any) => {
    const tmp_files = acceptedFiles.map((file: any) => {
      if (file) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      } else {
        return;
      }
    });
    setFiles(tmp_files);

    tmp_files.forEach(async (tf: any) => {
      const signedURLResult = await getBucketSignedURL(tf.type, tf.name);
      if (signedURLResult.failure !== undefined) {
        console.error(signedURLResult.failure);
        return;
      }
      const { url } = signedURLResult.success;
      console.log('URL==========', url);
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': tf?.type || 'image/*',
        },
        body: tf,
      });
    });
  }, []);

  const { getRootProps, getInputProps, isFileDialogActive } = useDropzone({
    onDrop: onDrop,
    accept: {
      'image/*': [],
      'video/*': [],
    },
    maxSize: 10 * 1000000, //will be 500 * 1000000 in production
  });

  const isUploading = isFileDialogActive;
  return (
    <>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={`flex flex-col justify-center items-center relative`}
      >
        <input {...getInputProps()} />
        <div className=" absolute h-full w-full bg-white/60 flex justify-center items-center flex-col">
          <div>
            <Image src={Tap} alt="click here to upload" height={100} />
          </div>
          <div className="w-[60%] text-sm">
            Click here to Upload your memories
          </div>
        </div>
        <div
          className={`border-2 ${isUploading ? 'border-solid' : 'border-dashed'} border-primary flex rounded-md space-x-2 max-w-72 p-2 max-h-72 `}
        >
          <div className="flex-1">
            <Image
              src={churchGreece}
              alt="Couple in greece church"
              className="object-cover h-full"
            />
          </div>
          <div className="flex-1">
            <Image src={viewGreece} alt="A view of greece" />
            <Image src={danceGreece} alt="Couple dance in greece" />
          </div>
        </div>
      </div>
      <Previews
        getRootProps={getRootProps}
        getInputProps={getInputProps}
        files={files}
      />
    </>
  );
};
