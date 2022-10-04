import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import AddPhoto from "../components/admin/AddPhoto";
import styles from "../components/admin/Admin.module.scss";
import PhotoList from "../components/admin/PhotoList";
import CollectionsList from "../components/admin/CollectionsList";

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    auth.operations
      .then(() => {
        auth.currentUser ? setLoggedIn(true) : router.push("/login")
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  });

  return (
    <div className={styles.admin}>
      {loading && <h1>Loading...</h1>}
      {loggedIn && !loading && (
        <>
          <PhotoList />
          <CollectionsList />
          <AddPhoto />
        </>
      )}
    </div>
  );
}
export default Admin
