// ----------------------------------------------------------------------

export default function Typography(theme: any) {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontSize: 14,
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
