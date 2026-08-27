declare module 'str-utils' {

    type stringAlias = (str: string) => string;
     export const strReverse: stringAlias;
     export const strToLower: stringAlias;
      export const strToUpper: stringAlias;
     export const strRandomize: stringAlias;
      export const strInvertCase: stringAlias
}