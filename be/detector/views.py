from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_500_INTERNAL_SERVER_ERROR

from .ml.utils import load_artefacts, predict_message


@api_view(["POST"])
def predict(request):
    message = request.data.get("message", "")

    if not message or not isinstance(message, str):
        response = {"data": {}, "message": "invalid input"}
        return Response(response, status=HTTP_400_BAD_REQUEST)

    try:
        model, vectorizer = load_artefacts()
    except RuntimeError as e:
        response = {"data": {}, "message": str(e)}
        return Response(response, status=HTTP_500_INTERNAL_SERVER_ERROR)

    predicted_label = predict_message(message, model, vectorizer)

    response = {"data": {"prediction": predicted_label}, "message": "success"}
    return Response(response)
