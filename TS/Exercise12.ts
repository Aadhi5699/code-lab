declare module 'stats' {

    type CompareFunction <T> =(a: T, b: T) => number;
    type ValueFunction<T> = (element: T) => number;

    
    export function getMaxIndex<T>(array: T[], compareFunction: CompareFunction<T>): number;
  export function getMaxElement<T>(array: T[], compareFunction: CompareFunction<T>): T | null;

  export function getMinIndex<T>(array: T[], compareFunction: CompareFunction<T>): number;
  export function getMinElement<T>(array: T[], compareFunction: CompareFunction<T>): T | null;

  export function getMedianIndex<T>(array: T[], compareFunction: CompareFunction<T>): number;
  export function getMedianElement<T>(array: T[], compareFunction: CompareFunction<T>): T | null;

  export function getAverageValue<T>(array: T[], valueFunction: ValueFunction<T>): number | null;

}