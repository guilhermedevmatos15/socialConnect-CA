export default function logOut() {
   const keys = ['user', 'posts'];

   localStorage.removeItem(keys[0]);
   localStorage.removeItem(keys[1]);

   window.location.reload();
}