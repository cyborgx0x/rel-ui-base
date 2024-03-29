import { useEffect, useMemo, useState } from 'react';

import { gapi } from 'gapi-script';
import { SnackbarProvider } from 'notistack';

import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import ThemePrimaryColor from './components/common/ThemePrimaryColor';
import Wrapper from './components/common/Wrapper';
import { AuthProvider, ThemeModeContext, CommonProvider } from './contexts';
import ListRouter from './routes/routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(LIGHT_MODE_THEME);

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
      },
    }),
    [],
  );
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: '61272495451-6r5n3q6c8956m1btil765ut86c7ca8e8.apps.googleusercontent.com',
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });
  return (
    <CommonProvider>
      <AuthProvider>
        <ThemeModeContext.Provider value={themeMode}>
          <ThemeConfig mode={mode}>
            <ThemePrimaryColor mode={mode}>
              <BaseOptionChartStyle />
              <GlobalStyles />
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Wrapper>
                  <ListRouter />
                </Wrapper>
              </SnackbarProvider>
            </ThemePrimaryColor>
          </ThemeConfig>
        </ThemeModeContext.Provider>
      </AuthProvider>
    </CommonProvider>
  );
}

export default App;
