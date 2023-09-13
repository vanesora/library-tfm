export interface ICardClickable {
  /** Type of CardClickable */
  type: "horizontal" | "vertical";
  /** Card Image */
  image: string;
  /** Card title */
  title: string;
  /** Card Points text */
  pointsText: string;
  /** Card Points number */
  pointsNumber: number;
  /** Card description */
  description: string;
  /** Click to card */
  handleClick: () => void;
  category?: string;
  /** Card height */
  heightCard?: string;
  /** Click width */
  widthCard?: string;
  /** Disabled button */
  /** Separator type */
  separatorType?: "." | ",";
}
