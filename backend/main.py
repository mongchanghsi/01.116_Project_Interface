from flask import Flask, request, abort
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin
from ocr import main_ocr
import numpy as np

app = Flask(__name__)
cors = CORS(app)
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def api_root():
  return 'Root'

@app.route('/ocr', methods = ['POST'])
@cross_origin()
def api_ocr():
  files = request.files
  file1 = files.get('image1')
  file2 = files.get('image2')

  npimg1 = np.fromfile(file1, np.uint8)
  npimg2 = np.fromfile(file2, np.uint8)
  x = main_ocr(npimg1, npimg2)
  if (x):
    return x
  else:
    abort(400, description="Failed to OCR, please retake the image.")

if __name__ == "__main__":
  app.run(debug=True)