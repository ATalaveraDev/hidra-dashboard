import Image from 'next/image';

import { PUBLIC_API_KEY, HASH, PRIVATE_API_KEY } from '@/secrets/keys';
import { USERS } from './data';
import classes from './page.module.css';
const crypto = require('crypto')

export default async function CharactersPage() {
  const ts = Date.now();
  let hash = crypto.createHash('md5').update(`${ts}${PRIVATE_API_KEY}${PUBLIC_API_KEY}`).digest('hex');
  // let data = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_API_KEY}&hash=${hash}&limit=10`).then(response => response.json());

  return (
    <>
      <h1>Characters Page</h1>
      <div className={classes['characters-list']}>
        {USERS.map((character: any) => {
          return (
            <div className={classes.character} key={character.id}>
              <Image className={classes['profile-img']} alt="character-image" src={character.thumbnail.path+'.'+character.thumbnail.extension} width={50} height={50} />
              <h2>{character.name}</h2>
              <p>{character.modified}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}