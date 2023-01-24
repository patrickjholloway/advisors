import { Provider } from "react-redux";
import { AppShell, Group, Title, Avatar } from '@mantine/core';
import { MantineProvider } from '@mantine/core';

import store from "./services/store";
import Advisors from "./Advisors";

function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell padding={0} header={<Group sx={{padding: '10px 20px'}}><Avatar size={'sm'} color={'orange'} radius='xl'>&nbsp;</Avatar><Title order={3}>Advisor Match</Title></Group>}>
        <Advisors></Advisors>
        </AppShell>
      </MantineProvider>
    </Provider>
  );
}

export default App;
