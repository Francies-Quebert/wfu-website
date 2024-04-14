import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Key, useEffect } from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

type PreviewProps = {
  getRootProps: <T extends DropzoneRootProps>() => T;
  getInputProps: <T extends DropzoneInputProps>() => T;
  files: any;
};

export const Previews = ({
  getRootProps,
  getInputProps,
  files,
}: PreviewProps) => {
  const thumbs = files.map(
    (file: {
      name: Key | null | undefined;
      preview: string | StaticImport;
    }) => (
      <div
        key={file.name}
        className="flex flex-shrink-0 w-24 h-24 object-cover mr-4 items-center justify-center border border-primary"
      >
        <Image
          src={file.preview}
          height={100}
          width={100}
          alt={''}
          className="w-24 h-24 object-contain p-1"
          draggable={false}
        />
      </div>
    ),
  );

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: { preview: string }) =>
        URL.revokeObjectURL(file.preview),
      );
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
      </div>
      <aside className={`max-w-6xl pt-4 flex overflow-x-auto touch-pan-x `}>
        {thumbs}
      </aside>
    </section>
  );
};
