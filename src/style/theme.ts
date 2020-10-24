export interface ITheme {
  colors: {
    card: string,
    plain: string,
    light: string,
    mediumLight: string,
    medium: string,
    dark: string,
    darker: string,
    primary: string,
    text: string,
    mediumGray: string,
    darkGray: string,
  },
  utils: {
    boxShadow: string,
  }
}

export const colours = {
  diamond: '#BCE7FD',
  eucaliptus: '#40C9A2',
  iceberg: '#057350',
  lightest: '#e6f6fe',
  maastrichtBlue: '#001242',
  pictonBlue: '#2EB3E8',
}

export const light: ITheme = {
  colors: {
    card: '#fff',
    plain: '#DEDEF7',
    light: '#EFEFFB',
    mediumLight: '#BAB9DF',
    medium: '#9E9DD2',
    dark: '#6462B7',
    darker: '#4F4DA8',
    primary: '#6462B7',
    text: '#222',
    mediumGray: '#777',
    darkGray: '#303a3e',
  },
  utils: {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
  }
};

export const dark: ITheme = {
  colors: {
    card: '#3E3B47',
    plain: '#312E38',
    light: '#232129',
    mediumLight: '#666360',
    medium: '#9E9DD2',
    dark: '#232129',
    darker: '#B84900',
    primary: '#FF6800',
    text: '#f2f2f2',
    mediumGray: '#777',
    darkGray: '#e2e2e2',
  },
  utils: {
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.35)',
  }
}
