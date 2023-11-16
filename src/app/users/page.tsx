import { PUBLIC_API_KEY, HASH, PRIVATE_API_KEY } from '@/secrets/keys';
import { USERS } from './data';
const crypto = require('crypto')

export default async function UsersPage() {
  const ts = Date.now();
  let hash = crypto.createHash('md5').update(`${ts}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`).digest("hex");
  // let data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=10`).then(response => response.json());

  return (
    <>
      <h1>Users Page</h1>
      {USERS.map((character: any) => <p key={character.id}>{character.name}</p>)}
    </>
  );
}