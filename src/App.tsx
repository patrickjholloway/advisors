import { Provider } from "react-redux";
import { AppShell } from '@mantine/core' 
import { MantineProvider } from '@mantine/core';

import store from "./services/store";
import Advisors from "./Advisors";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell padding="md">
          <Advisors></Advisors>
        </AppShell>
      </MantineProvider>
    </Provider>
  );
}

export default App;
