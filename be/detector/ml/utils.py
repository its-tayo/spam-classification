import os
import re

import joblib
from django.conf import settings

from nltk.corpus import stopwords
from nltk import wordpunct_tokenize
from nltk.stem import WordNetLemmatizer


lemmatizer = WordNetLemmatizer()
label_map = {0: "ham", 1: "spam"}
stop_words = stopwords.words("english")
artefacts_directory = os.path.join(settings.BASE_DIR, "detector/ml")


def load_artefacts():
    try:
        artefacts = {
            "model": joblib.load(
                os.path.join(artefacts_directory, "logistic_regression_model.pkl")
            ),
            "vectorizer": joblib.load(
                os.path.join(artefacts_directory, "tfidf_vectorizer.pkl")
            ),
        }

        return artefacts["model"], artefacts["vectorizer"]

    except Exception as e:
        raise RuntimeError(f"Error loading artefacts: {e}")


def preprocess(text):
    text = re.sub("[^a-zA-Z]", " ", text)
    text = re.sub("\s+", " ", text).strip()
    text = text.lower()

    tokens = wordpunct_tokenize(text)
    tokens = [
        lemmatizer.lemmatize(token) for token in tokens if token not in stop_words
    ]
    tokens = " ".join(tokens)

    return tokens


def predict_message(message, model, vectorizer):
    processed_message = preprocess(message)
    vectorized_message = vectorizer.transform([processed_message])
    prediction = model.predict(vectorized_message)

    return label_map[prediction[0]]
