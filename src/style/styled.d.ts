/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import { ITheme } from './theme';

export type Theme = ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
