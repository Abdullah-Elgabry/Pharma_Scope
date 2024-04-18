import os
import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.efficientnet import preprocess_input, decode_predictions

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(BASE_DIR, 'Drug_id_app', 'model', 'efficientnetb0-Pharmaceutical-99.60.h5')
model = load_model(MODEL_PATH)

def preprocess_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = preprocess_input(img_array)
    return img_array

def predict_image(image_path):
    img_array = preprocess_image(image_path)
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)

    class_labels = ['Alaxan', 'Bactidol', 'Bioflu', 'Biogesic', 'DayZinc', 'Decolgen' , 'Fish Oil', 'Kremil S', 'Medicol', 'Neozep']
    class_probabilities = predictions[0]

    max_probability = max(class_probabilities)
    max_index = np.argmax(class_probabilities)
    max_class = class_labels[max_index]

    return max_class
