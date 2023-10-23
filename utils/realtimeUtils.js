import {
  getDatabase,
  ref,
  get,
  child,
  set,
  onValue,
  update,
} from "firebase/database";

function getLatestArticles(articles) {
  try {
    // Sortează articolele în ordine descrescătoare a datelor și orelor
    articles.sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return dateB - dateA;
    });

    // Selectează primele două articole (cele mai noi)
    const latestArticles = articles.slice(0, 2);

    // Selectează ultimele cinci articole după data
    const lastFiveArticles = articles.slice(0, 5);

    const newestArticle = latestArticles[0];

    return { latestArticles, newestArticle, lastFiveArticles };
  } catch (err) {
    console.log("error on getLatestArticles...", err);
  }
}

export const writeArticleData = (newArticle) => {
  try {
    const db = getDatabase();
    console.log("newArticle...");
    console.log(newArticle);
    set(ref(db, "Articles/" + newArticle.id), newArticle);
  } catch (err) {
    console.log("Error on writeArticleData...", err);
  }
};

export const writeEditArticle = (newArticle) => {
  // Get a reference to the database
  const db = getDatabase();

  // Specify the path to the data you want to update
  const dataRef = ref(db, "Articles/" + newArticle.id);

  // Use the update method to update the data
  update(dataRef, newArticle)
    .then(() => {
      console.log("Data updated successfully");
    })
    .catch((error) => {
      console.error("Error updating data: ", error);
    });
};

export const handleGetArticles = async () => {
  try {
    const dbRef = ref(getDatabase());

    const snapshot = await get(child(dbRef, "Articles/"));
    let articlesArray = []; // Specificați tipul de obiecte pe care îl conține matricea

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        // Get the object inside the snapshot and push it into the array
        const article = childSnapshot.val();
        articlesArray.push(article);
      });

      console.log("Final articles array:.....");
      console.log(articlesArray);
    } else {
      console.log("No data available");
    }

    let { latestArticles, newestArticle, lastFiveArticles } =
      getLatestArticles(articlesArray);

    return { articlesArray, latestArticles, newestArticle, lastFiveArticles };
  } catch (error) {
    console.error(error);
  }
};

export const writeEditService = (newService) => {
  // Get a reference to the database
  const db = getDatabase();

  // Specify the path to the data you want to update
  const dataRef = ref(db, "Services/" + newService.id);

  // Use the update method to update the data
  update(dataRef, newService)
    .then(() => {
      console.log("Data updated successfully");
    })
    .catch((error) => {
      console.error("Error updating data: ", error);
    });
};

export const handleGetServices = async () => {
  try {
    const dbRef = ref(getDatabase());

    const snapshot = await get(child(dbRef, "Services/"));
    let servicesArray = []; // Specificați tipul de obiecte pe care îl conține matricea

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        // Get the object inside the snapshot and push it into the array
        const service = childSnapshot.val();
        servicesArray.push(service);
      });

      console.log("Final services array:.....");
      console.log(servicesArray);
    } else {
      console.log("No data available");
    }

    return { servicesArray };
  } catch (error) {
    console.error(error);
  }
};

export const writeServiceData = (newServices) => {
  try {
    const db = getDatabase();

    set(ref(db, "Services/" + newServices.id), newServices);
  } catch (err) {
    console.log("Error on writeServiceData...", err);
  }
};
