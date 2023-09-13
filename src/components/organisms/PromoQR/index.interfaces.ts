export interface IPromoQRProps {
  /** Title to Promo QR */
  title: string;
  /** Data to Promo QR (Image and Code) */
  data: IDataPromoQR;
  /** Text Link to redirect */
  textLink: string;
  /** Url Link to redirect */
  urlLink: string;
  /** Width to Card Container */
  width?: string;
  /** Height to Card Container */
  height?: string;
  /** Aditional Offer detail component */
  children?: any;
}

export interface IDataPromoQR {
  image: string;
  code: string;
}
