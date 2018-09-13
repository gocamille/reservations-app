import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import ListPage from './components/ListPage'

import { appStyles } from './components/styles/styles'

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjm00y2di1qua0182krj43qc3' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class App extends React.Component {
  render () {
    const { container } = appStyles

    return (
      <ApolloProvider client={client}>
        <ListPage style={container} />
      </ApolloProvider>
    )
  }
}
