import React, { useEffect, useState } from 'react';

//Fix later
import store from '../components/store/store';
import { Provider } from 'react-redux';
import ProviderWrapComponent from '../components/ProviderWrapComponent';

import { useRouter } from 'next/router';
import AddPhotoComponent from '../components/admin/AddPhotoComponent';
import AdminPhotoListComponent from '../components/admin/AdminPhotoListComponent';
import AdminCollectionsListComponent from '../components/admin/AdminCollectionsListComponent';
// Firebase imports
import { getAuth } from 'firebase/auth';
// Styles imports
import styles from '../components/admin/AdminPanelComponent.module.scss';

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();
  // Authentication check
  useEffect(() => {
    const auth = getAuth();
    auth.operations
      .then(() => {
        auth.currentUser ? setLoggedIn(true) : router.push('/login');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  });

  return (
    <Provider store={store}>
      <ProviderWrapComponent>
        <div className={styles.admin}>
          {loading && <h1>Loading...</h1>}
          {loggedIn && !loading && (
            <>
              <AdminPhotoListComponent />
              <AdminCollectionsListComponent />
              <AddPhotoComponent />
            </>
          )}
        </div>
      </ProviderWrapComponent>
    </Provider>
  );
};
export default Admin;
