declare module "gsap/SplitText" {
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

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(options?: ScrollSmootherOptions): ScrollSmoother;
    static get(): ScrollSmoother | null;
    static refresh(hard?: boolean): void;

    paused(value?: boolean): boolean | ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollTo(
      target: string | number | Element | null,
      smooth?: boolean,
      position?: string
    ): void;
    kill(): void;
    refresh(): void;

    effects(element: string | Element, options?: Record<string, unknown>): void;
  }

  export interface ScrollSmootherOptions {
    wrapper?: string | Element;
    content?: string | Element;
    smooth?: number;
    speed?: number;
    effects?: boolean;
    smoothTouch?: boolean | number;
    normalizeScroll?: boolean;
    ignoreMobileResize?: boolean;
    autoResize?: boolean;
    preventDefault?: boolean;
  }
}
