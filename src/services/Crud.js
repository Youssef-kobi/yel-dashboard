import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  writeBatch,
} from 'firebase/firestore';
import { Auth, db } from './firebase';

export const handleFetch = async (collectionName, uid) => {
  // TODO: Handle when adding an existing document
  const ProductsRef = collection(db, collectionName);
  const ref = query(ProductsRef, where('uid', '==', uid));
  const result = await getDocs(ref);
  let products = [];
  result.forEach((doc) => products.push({ ...doc.data(), docId: doc.id }));
  return products;
};

export const handleAdd = async (data, collectionName) => {
  console.log(data);
  // TODO: Handle when adding an existing document
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    uid: Auth.currentUser.uid,
  });
  console.log(docRef);
  const result = await getDoc(docRef);
  console.log(result);
  return { ...result.data(), docId: result.id };
};

export const handleEdit = async (data, collectionName) => {
  console.log(data);
  const ProductRef = doc(db, collectionName, data.docId);
  await updateDoc(ProductRef, data);
  const result = await getDoc(ProductRef);
  console.log(result);
  return result.data();
};

export const handleDelete = async (ids, collectionName) => {
  const batch = writeBatch(db);
  ids.map((id) => batch.delete(doc(db, collectionName, id)));
  batch.commit();
};

export const handleExcelExport = (data) => {
  // your excel export logic here
};
