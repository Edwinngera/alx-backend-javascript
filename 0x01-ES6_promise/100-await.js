import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const up = await uploadPhoto();
    const create = await createUser();
    return { photo: up, user: create };
  } catch (err) {
    return { photo: null, user: null };
  }
}