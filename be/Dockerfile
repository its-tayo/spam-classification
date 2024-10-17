FROM python:3.10-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
RUN python -m nltk.downloader wordnet stopwords punkt

COPY . /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]