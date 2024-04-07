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
        className="flex flex-shrink-0 w-24 h-24 object-cover mr-4 pl-2 items-center justify-center"
      >
        <Image
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview as string);
          }}
          height={100}
          width={100}
          alt={''}
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
  console.log(files);

  return (
    <section className="container">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
      </div>
      <aside
        className={`max-w-6xl flex overflow-x-auto touch-pan-x ${files.length > 0 ? 'lg:h-[120px]' : ''}`}
      >
        {thumbs}
      </aside>
    </section>
  );
};
