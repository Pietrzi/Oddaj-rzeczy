import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import "./scss/main.scss";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducer from './store/reducers/combinedReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig';

const store = createStore(combinedReducer, applyMiddleware(thunk));


// const store = createStore(combinedReducer,
//     compose(
//         applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
//         reduxFirestore(fbConfig),
//         reactReduxFirebase(fbConfig)
//       )
//     );

// const store = createStore(combinedReducer,
//     compose(
//       applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//       reactReduxFirebase(fbConfig), // redux binding for firebase
//       reduxFirestore(fbConfig) // redux bindings for firestore
//     )
//   );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


serviceWorker.unregister();
