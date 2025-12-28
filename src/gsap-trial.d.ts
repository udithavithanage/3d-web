declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      element: string | string[] | Element | Element[],
      options?: SplitTextOptions
    );

    chars: Element[];
    words: Element[];
    lines: Element[];

    revert(): void;
    split(options?: SplitTextOptions): void;
  }

  export interface SplitTextOptions {
    type?: string;
    linesClass?: string;
    wordsClass?: string;
    charsClass?: string;
    position?: string;
    wordDelimiter?: string;
    tag?: string;
    reduceWhiteSpace?: boolean;
  }
}
