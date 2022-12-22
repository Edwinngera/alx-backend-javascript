import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const create = createUser();
  const upload = uploadPhoto();
  return Promise.all([upload, create])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}