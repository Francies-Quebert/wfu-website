import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { Key, useEffect } from 'react';
import { DropzoneInputProps, DropzoneRootProps } from 'react-dropzone';

type PreviewProps = {
  getRootProps: <T extends DropzoneRootProps>() => T;
  getInputProps: <T extends DropzoneInputProps>() => T;
  files: any;
  loading: boolean;
};

export const Previews = ({
  getRootProps,
  getInputProps,
  files,
  loading,
}: PreviewProps) => {
  const thumbs = files.map(
    (file: {
      name: Key | null | undefined;
      preview: string | StaticImport;
      type: string;
    }) => (
      <div
        key={file.name}
        className="relative flex flex-shrink-0 w-24 h-24 object-cover mr-4 items-center justify-center border border-primary"
      >
        {file.type.includes('video') ? (
          <video src={file.preview as string} autoPlay controls={false} muted />
        ) : (
          <Image
            src={file.preview}
            height={100}
            width={100}
            alt={''}
            className="w-24 h-24 object-contain p-1"
            draggable={false}
          />
        )}
        {loading && (
          <div className=" absolute h-full w-full bg-white/60 flex justify-center items-center flex-col">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        )}
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
