from django.db import models


class Submission(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField()
    input_file = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)


class Result(models.Model):
    name = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
