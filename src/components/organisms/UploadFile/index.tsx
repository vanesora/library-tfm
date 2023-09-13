import React, { useState, useEffect } from "react";
import { AtomHeadline } from "react/atoms/Typography/Headline";
import { AtomBody } from "react/atoms/Typography/Body";
import { AtomCardContainer } from "react/atoms/CardContainer";
import { AtomButtonDefault } from "react/atoms/Buttons/Default";
import { MoleculePreviewFile } from "react/molecules/PreviewFile";
import { OrganismAlertMessage } from "react/organisms/AlertMessage";
import {
  CardBody,
  TitleSection,
  CaptionContainer,
  UploadButtonContainer,
  AcceptedFormatContainer,
} from "./styles";
import { AtomIcon } from "react/atoms/Icon";
import { ITypographyProps } from "react/atoms/Typography/TypographyProps";

export interface IUploadFileProps {
  /** Main title */
  headerText: string;
  /** Subtitle text */
  captionText: string;
  /** captionProps props Typography */
  captionProps: Omit<ITypographyProps, "text">;
  /** Text showed under the upload icon */
  placeholderText: string;
  /** Placeholder props Typography */
  placeholderProps: Omit<ITypographyProps, "text">;
  /** Specify the accepted formats or tips to upload the file */
  acceptedFormatText: string;
  /** Define if the file was failed on uploading (Show Alert) */
  hasError: boolean;
  /** Define if the file was success on uploading (Show Alert) */
  hasSuccess: boolean;
  /** Title showed on the error alert message */
  errorMessageTitle: string;
  /** Text showed on the error alert message */
  errorMessage: string;
  /** Text showed on the success alert message */
  successMessage: string;
  /** Action called after select the file */
  onChange: (file: Object) => void;
  /** Action called after remove the file with the delete button */
  onRemove: () => void;
  /** Action called on clicking the Upload button */
  onSubmitFile: (file: Object) => void;
  /** Action called when error occurs */
  onError: () => void;
  /** Update parent value for hasSuccess prop */
  updateSuccess: () => void;
  /** Update parent value for hasError prop */
  updateError: () => void;
}

export const OrganismUploadFile = ({
  headerText,
  captionText,
  captionProps: {
    align = "center",
    size = "large",
    color = "neutral600",
    weight = "regular",
  },
  placeholderText,
  placeholderProps,
  acceptedFormatText,
  hasError,
  hasSuccess,
  errorMessageTitle,
  errorMessage,
  successMessage,
  onChange,
  onRemove,
  onSubmitFile,
  onError,
  updateSuccess,
  updateError,
}: IUploadFileProps) => {
  const [file, setFile] = useState<Object | null>(null);
  const [error, setError] = useState<boolean>(hasError);
  const [success, setSuccess] = useState<boolean>(hasSuccess);
  const [deleteFile, setDeleteFile] = useState<boolean>(false);

  const onFileChanged = (file: any) => {
    if (file) {
      setFile(file);
      onChange(file);
    }
  };

  const onFileRemoved = () => {
    setFile(null);
    onRemove();
  };

  const onSubmit = () => {
    if (file) {
      onSubmitFile(file);
    }
  };

  useEffect(() => {
    if (hasError) onError();
    setError(hasError);
    setDeleteFile(hasError);
  }, [hasError]);

  useEffect(() => {
    setSuccess(hasSuccess);
    setDeleteFile(hasSuccess);
  }, [hasSuccess]);

  return (
    <>
      <AtomCardContainer width="100%" height="100%">
        <CardBody>
          <TitleSection>
            <AtomIcon icon="earn_scan" size={48} />
            <AtomHeadline
              text={headerText}
              size="medium"
              weight="regular"
              align="center"
              color={"primary400"}
              styles={{ marginTop: "25px", marginBottom: "0" }}
            />

            <CaptionContainer>
              <AtomBody
                align={align}
                text={captionText}
                size={size}
                color={color}
                weight={weight}
              />
            </CaptionContainer>
          </TitleSection>

          <MoleculePreviewFile
            uploadIcon={true}
            placeholder={placeholderText}
            placeholderProps={placeholderProps}
            onChange={(file: Object) => onFileChanged(file)}
            onRemove={() => onFileRemoved()}
            onError={() => onError()}
            deleteFile={deleteFile}
          />

          {!file && (
            <AcceptedFormatContainer>
              <AtomBody
                text={acceptedFormatText}
                size="small"
                color={"neutral500"}
                weight="regular"
              />
            </AcceptedFormatContainer>
          )}

          <UploadButtonContainer>
            <AtomButtonDefault
              text="UPLOAD"
              disabled={!file}
              color="primary"
              type="button"
              size="medium"
              onClick={onSubmit}
              className="submit-file"
            />
          </UploadButtonContainer>
        </CardBody>
      </AtomCardContainer>

      {error && !success && (
        <OrganismAlertMessage
          onClickFirstBtn={() => {
            onError();
            setError(false);
            updateError();
          }}
          type="error"
          title={errorMessageTitle}
          sizeButtons="large"
          message={errorMessage}
          textFirstBtn="Try Again"
          width="400px"
          height="380px"
        />
      )}
      {success && !error && (
        <OrganismAlertMessage
          onClickFirstBtn={() => {
            setSuccess(false);
            updateSuccess();
          }}
          type="success"
          title="Upload Success"
          sizeButtons="large"
          message={successMessage}
          textFirstBtn="Ok"
          width="400px"
          height="380px"
        />
      )}
    </>
  );
};
