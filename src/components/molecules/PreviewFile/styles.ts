import styled from "styled-components";

interface IPreviewFileProps {
  file: string;
}

interface IStylesProps {
  font: string;
  color: string;
}

export const BlankFilePreview = styled.div`
  width: 98px;
  height: 94px;
  border-radius: 10px;
  border: 1px dashed gray;
  cursor: pointer;
  margin: 0 auto;
`;

export const FilePreview = styled.div`
  width: 98px;
  height: 94px;
  background: url(${({ file }: IPreviewFileProps) => file});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 auto;
`;

export const InputFile = styled.input`
  display: none;
`;

export const FileNameWrapper = styled.div`
  margin-top: 15px;
  text-align: center;
`;

export const FileName = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-family: ${({ font }: IStylesProps) => font};
  color: ${({ color }: IStylesProps) => color};
`;

export const UploadWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin-left: 15px;
`;
