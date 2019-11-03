import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import  {ApolloProvider } from 'react-apollo';

import SongList from './components/SongList'

const client = new ApolloClient({});

const Root = () => {
  return (
          <div>

              <ApolloProvider client={client}>
                      
                      <div className="container">
                          <div>
                            
                          </div>
                        Lyrical
                        Hey ! Mother 
                     
                        </div> 

                    </ApolloProvider>
          </div>
        );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
