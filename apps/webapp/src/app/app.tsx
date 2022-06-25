import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { ApolloExplorerReact, ApolloExplorer } from '@apollo/explorer';

const StyledApp = styled.div`
  // Your style here
  min-height: 900px;

  min-width: 95vw;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background: red;

`;

export function App() {
  return (
    <StyledApp>

      <ApolloExplorerReact

        graphRef='spacex-yw@current'
        endpointUrl='https://api.spacex.land/graphql/'
        // initialState={{
        //   document: `query Example {
        //     me {
        //       id
        //     }
        // }`,
        //   variables: {
        //     test: 'abcxyz',
        //   },
        //   displayOptions: {
        //     showHeadersAndEnvVars: true,
        //   },
        // }}
      />
    </StyledApp>
  );
}

export default App;
