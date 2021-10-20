import { useState } from "react";
import { Formik, Form, Field } from "formik";
import './header.css';
import './content.css';
import './article.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const open = url => window.open(url);
  console.log({ photos })
  return (
    <div>
      <header>
        <Formik initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID R4xH9qvfnzSy8L5v-AC_rbHxO1uF7k0I3rChDo6kYcI'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular}></img>
              <p>{[photo.descriptiom, photo.alt_description].join(' - ')}</p>
            </article>)}
        </div>
      </div>
    </div>
  )
}

export default App;
