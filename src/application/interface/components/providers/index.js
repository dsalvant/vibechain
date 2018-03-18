/* --------------------------- Interface Globals ---------------------------- */
import 'theme/stylesheet/app.global.css'
/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider} from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
/* ------------------------- Internal Dependencies -------------------------- */
import themeSettings from 'appTheme/settings'
import { ScrollToTop } from 'fusion'
/* ---------------------------- Initialization ------------------------------ */
injectTapEventPlugin();
export default ({ store, history, children }) =>
<Provider store={store}>
    <ConnectedRouter history={history}>
        <ThemeProvider theme={themeSettings}>
          <MuiThemeProvider>
            <ScrollToTop>
              {children}
            </ScrollToTop>
          </MuiThemeProvider>
        </ThemeProvider>
    </ConnectedRouter>
</Provider>