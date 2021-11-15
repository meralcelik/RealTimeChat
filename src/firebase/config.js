import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZnkQ8Ky9HVYRY-tmXd77hWQmDM9W85GE",
  databaseURL: "https://mobil-adc67-default-rtdb.firebaseio.com",
  projectId: "mobil-adc67",
  appId: "1:786458620209:web:cd6738c369260db9ad8010",
};

export default Firebase.initializeApp(firebaseConfig);
