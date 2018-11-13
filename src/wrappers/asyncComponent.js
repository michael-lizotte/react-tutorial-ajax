import React, { Component } from 'react';

/**
 * Used to lazy-load a big component
 * 
 * Their is a new way a asynchronously load modules:
 *  import React { Component, Suspense } from 'react'
 *  
 *  const YourModule = React.lazy(() => import('path/to/component'));
 * 
 *  <Route [...] render={() => (
 *      <Suspense fallback={<div>Loading...</div>}>
 *          <YourModule />
 *      </Suspense>
 * )}
 * 
 * @param {*} importComponent usually just: 'import('path/to/component')
 */
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default})
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;