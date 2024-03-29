// ----------------------------------------------------------------------

export default function Tabs(theme: any) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          fontWeight: theme.typography.fontWeightMedium,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderTopRightRadius: theme.shape.borderRadius,
          '&.Mui-selected': {
            color: theme.palette.main,
          },
          '&:not(:last-of-type)': {
            marginRight: theme.spacing(5),
          },
          '@media (min-width: 600px)': {
            minWidth: 48,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: 'row',
          '& > *:first-of-type': {
            marginBottom: 0,
            marginRight: theme.spacing(1),
          },
        },
        wrapper: {
          flexDirection: 'row',
          whiteSpace: 'nowrap',
        },
        textColorInherit: {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTabScrollButton: {
      styleOverrides: {
        root: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
  };
}
