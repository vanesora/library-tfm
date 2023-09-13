import React, { useEffect, useState, useRef, useContext } from "react";
import { AtomIcon } from "react/atoms/Icon";
import {
  BlankFilePreview,
  FilePreview,
  InputFile,
  FileNameWrapper,
  FileName,
  IconWrapper,
  UploadWrapper,
} from "./styles";
import { ThemeContext } from "context/context";
import { IFontWeight } from "interfaces";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";
import { AtomBody } from "react/atoms/Typography/Body";

export interface IPreviewFileProps {
  /** File source URI */
  fileSrc?: string;
  /** Placeholder text */
  placeholder: string;
  /** Placeholder props Typography */
  placeholderProps: Omit<ITypographyProps, "text">;
  /** String with accepted formats (comma separated), it can be like image/png, image/svg, etc. */
  accept?: string;
  /** Show Upload Icon or dashed border */
  uploadIcon?: boolean;
  /** Set from parent if the file selected should be deleted (In case of error of success action) */
  deleteFile?: boolean;
  /** Action called after change the input value directly */
  onChange?: (file: Object) => void;
  /** Action called after remove the file from input */
  onRemove?: () => void;
  /** Action called if error on selected file */
  onError?: (errorMessage: string) => void;
}

export const MoleculePreviewFile = ({
  fileSrc,
  placeholder,
  placeholderProps: {
    size = "medium",
    align = "center",
    color = "neutral500",
    weight = "regular",
  },
  accept = "image/*",
  uploadIcon = false,
  deleteFile = false,
  onChange = () => {},
  onRemove = () => {},
  onError = () => {},
}: IPreviewFileProps) => {
  const [selectedFile, setSelectedFile] = useState<any | undefined>();
  const [preview, setPreview] = useState<string | undefined>();
  const [previewSrc, setPreviewSrc] = useState<string | undefined>(fileSrc);
  const [acceptedFormats, setAcceptedFormats] = useState<string>(accept);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const imageRef = useRef<HTMLInputElement>(null);
  const { fontFamily, palette } = useContext(ThemeContext);
  const font: string = fontFamily.main["regular" as keyof IFontWeight];

  useEffect(() => {
    setPreviewSrc(fileSrc);
  }, [fileSrc]);

  useEffect(() => {
    setAcceptedFormats(accept || "image/*");
  }, [accept]);

  useEffect(() => {
    if (deleteFile) {
      removeFile();
    }
  }, [deleteFile]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    if (objectUrl) setPreview(objectUrl);

    // free memory when ever this component is unmounted
    if (objectUrl) return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    setErrorMessage("");
    setHasError(false);

    if (!e.target.files || e.target.files.length === 0) {
      setErrorMessage("No file selected");
      setHasError(true);
      setSelectedFile(undefined);
      return;
    }

    const file = e.target.files[0];

    if (file) {
      if (accept === "image/*" || accept.includes(file.type)) {
        setSelectedFile(file);
        onChange(file);
      } else {
        setErrorMessage("File format not accepted");
        setHasError(true);
        setSelectedFile(undefined);
        e.target.value = null;
      }
    }
  };

  const openFileDialog = () => {
    if (imageRef && imageRef.current) imageRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(undefined);
    setPreviewSrc(undefined);
    onRemove();
  };

  const trucatedFileName = (name: string) => {
    return name.replace(/(.{10})..+/, "$1…");
  };

  return (
    <>
      {selectedFile && preview ? (
        <FilePreview file={preview} onClick={openFileDialog} />
      ) : previewSrc ? (
        <FilePreview file={previewSrc} onClick={openFileDialog} />
      ) : uploadIcon ? (
        <UploadWrapper onClick={openFileDialog} className="open-files">
          <AtomIcon icon="cloud-upload" size={48} color={"neutral500"} />
        </UploadWrapper>
      ) : (
        <BlankFilePreview className="open-files" onClick={openFileDialog} />
      )}

      <InputFile
        type="file"
        onChange={onSelectFile}
        ref={imageRef}
        accept={acceptedFormats}
      />

      {selectedFile && selectedFile.name ? (
        <FileNameWrapper>
          <FileName font={font} color={palette.neutral500}>
            {trucatedFileName(selectedFile.name)}
          </FileName>

          <IconWrapper onClick={removeFile} className="remove-file">
            <AtomIcon icon="delete" size={18} color={"neutral500"} />
          </IconWrapper>
        </FileNameWrapper>
      ) : previewSrc ? (
        <FileNameWrapper>
          <FileName font={font} color={palette.neutral500}>
            {previewSrc}
          </FileName>

          <IconWrapper onClick={removeFile} className="remove-file">
            <AtomIcon icon="delete" size={18} color={"neutral500"} />
          </IconWrapper>
        </FileNameWrapper>
      ) : (
        <FileNameWrapper>
          <AtomBody
            weight={weight}
            size={size}
            align={align}
            color={color}
            text={placeholder}
          />
        </FileNameWrapper>
      )}

      {hasError && errorMessage ? (
        <FileNameWrapper>
          <FileName font={font} color={palette.secondary400}>
            *{errorMessage}
          </FileName>
        </FileNameWrapper>
      ) : null}
    </>
  );
};
