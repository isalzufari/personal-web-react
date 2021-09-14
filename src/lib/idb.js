import { openDB } from "idb";
import M from 'materialize-css';

const openDb = openDB('dbBlog', 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
        if (!db.objectStoreNames.contains('blogs')) {
            const blogDb = db.createObjectStore('blogs', {
                keyPath: 'id'
            });
            blogDb.createIndex('title', 'title', {
                unique: false
            });
        }
    },
});

const saveFavArticle = (article) => {
  console.log(article);
  openDb.then((db) => {
    let tx = db.transaction(['blogs'], 'readwrite');
    let store = tx.objectStore('blogs');
    store.put(article);
    return tx.oncomplete;
  })
  .then(() => {
    M.toast({
        html: `Post ${article.title} Saved`, 
    });
  })
  .catch((result) => {
      console.log(result);
    M.toast({
        html: `Post ${article.title} Not Saved ${result}`,
    });
  });
}

const deleteFavArticle = (article) => {
    console.log(article);
  openDb.then((db) => {
    let tx = db.transaction('blogs', 'readwrite');
    let store = tx.objectStore('blogs');
    store.delete(article.id);
    return tx.oncomplete;
  })
  .then(() => {
    M.toast({
        html: `Post ${article.title} delete`,
    });
  })
  .catch((err) => {
    console.log(`Post gagal dihapus.${err}`);
    M.toast({
        html: `Post ${article.title} delete error`,
    });
  });
}

const getAllFavTeams = () => {
  return new Promise((resolve, reject) => {
    openDb.then((db) => {
      let tx = db.transaction('blogs', 'readonly');
      let store = tx.objectStore('blogs');
      return store.getAll();
    })
    .then((article) => {
      resolve(article);
    })
    .catch((err) => {
      reject(err);
    })
  })
}

const checkFavorite = (id) => {
  return new Promise((resolve, reject) => {
    openDb.then((db) => {
        let tx = db.transaction('blogs', 'readonly');
        let store = tx.objectStore('blogs');
        return store.get(id);
      }).then((fav) => {
        if (fav !== undefined) {
          resolve(true);
        } else {
          reject(false);
        }
      })
  })
}

export { saveFavArticle, deleteFavArticle, getAllFavTeams, checkFavorite };
