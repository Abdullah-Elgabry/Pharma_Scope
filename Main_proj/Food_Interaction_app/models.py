from django.db import models

class Drug(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Interaction(models.Model):
    drug = models.ForeignKey(Drug, on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return f"{self.drug} - {self.description}"

